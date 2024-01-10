'use server'
import { revalidatePath } from "next/cache"
import User from "../models/user.model"
import { NewCommentProps, NewCommunityProps, NewPostProps, NewUserProps } from "../types/types"
import { connectToDb } from "../mongoose"
import Community from "../models/community.model"
import Thread from "../models/thread.model"
import { extractZtName } from "../utils"

const options = { sort: [{ 'createdAt': 'desc' }] };

export async function createThreadPost(threadObject: NewPostProps, clerkId: string | undefined, path: string) {
    try {
        connectToDb()
        const author = await User.findOne({ clerkId: clerkId })
        const extractedName = extractZtName(path)
        const community = await Community.findOne({ name: extractedName })
        const newThreadPost = await Thread.create({
            ...threadObject,
            author: author._id,
            community: community._id
        })
        await author.posts.push(newThreadPost._id)
        if (threadObject.type === 'post') {
            await community.posts.push(newThreadPost._id)
        } else if (threadObject.type === 'story') {
            await community.stories.push(newThreadPost._id)
        }
        await author.save()
        await community.save()
        console.log('NEW POST CREATED!!', newThreadPost)
        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Cannot create new thread! Error message: ${error.message}`)
    }
}
export async function fetchAllThreadPosts() {
    try {
        connectToDb()
        const homeCommunity = await Community.findOne({ name: 'home' }).populate({
            path: 'posts',
            populate: [
                {
                    path: 'author',
                    model: 'User',
                    select: 'username profileImg'
                },
                // {
                //     path: 'upvotes',
                //     model: 'User',
                //     select: 'username'
                // }
            ],
            options
        })
            .exec()
        const parsedThreads = (JSON.parse(JSON.stringify(homeCommunity.posts)))
        return parsedThreads
    } catch (error: any) {
        throw new Error(`Cannot fetch all posts. Error here: ${error.message}`)
    }
}
export async function fetchThreadById(clerkId: string, postId: string) {
    try {
        connectToDb()
        const thread = await Thread.findOne({ _id: postId }).populate({
            path: 'children',
            populate: [
                {
                    path: 'author',
                    model: User,
                    // select: '_id clerkId firstName imgUrl'
                },
                {
                    path: 'children',
                    model: Thread,
                    populate: {
                        path: 'author',
                        model: User,
                        // select: '_id name parentId image'
                    }
                }
            ]
        })
            .populate('author')
            .exec()
        const mongoUser = await User.findOne({ clerkId: clerkId })
        let isOwner = JSON.stringify(thread.author._id) === JSON.stringify(mongoUser._id)
        const parsedThread = await JSON.parse(JSON.stringify(thread))
        return { parsedThread, isOwner: !!isOwner }
    } catch (error: any) {
        throw new Error(`Unable to fetch thread by Id. Error here: ${error.message}`)
    }
}
export async function fetchHomeStories() {
    try {
        connectToDb()
        const community = await Community.findOne({ name: 'home' }).populate({
            path: 'stories',
            populate: [
                {
                    path: 'author',
                    model: 'User',
                    select: 'username profileImg'
                }
            ],
            options
        }).exec()
        return await JSON.parse(JSON.stringify(community.stories))
    } catch (error: any) {
        throw new Error(`Unable to fetch stories! Error here: ${error.message}`)
    }
}
export async function addComment(submitObject: NewCommentProps, path: string) {
    try {
        connectToDb()
        // find parent thread
        const parentThread = await Thread.findOne({ _id: submitObject.parentId })
        // new comment user
        const currentMongoUser = await User.findOne({ clerkId: submitObject.clerkId })
        // create new comment 
        const newComment = await Thread.create({
            title: submitObject.title,
            parentId: parentThread._id,
            community: parentThread.community,
            author: currentMongoUser._id,
            replyNotifications: true
        })
        await currentMongoUser.comments.push(newComment)
        await parentThread.children.push(newComment._id)
        await parentThread.save()
        await currentMongoUser.save()
        console.log('NEW COMMENT ADDED!', newComment)
        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Cannot add comment. Error here: ${error.message}`)
    }
}
export async function likePost(clerkId: string, threadId: string, path: string) {
    try {
        connectToDb()
        console.log(threadId)
        const thread = await Thread.findOne({ _id: threadId })
        const user = await User.findOne({ clerkId: clerkId })
        if (thread.upvotes.includes(user._id)) {
            console.log('YOU ALREADY LIKED THIS COMMENT')
        } else {
            await thread.upvotes.push(user._id)
            await user.likes.push(thread._id)
            await thread.save()
            await user.save()
            revalidatePath(path)
        }
    } catch (error: any) {
        throw new Error(`Unable to like post. Error here: ${error.message}`)
    }
}
export async function deletePost(postId: string, clerkId: string, path: string) {
    try {
        connectToDb()
        const parentThread = await Thread.findOne({ _id: postId })
        const owner = await User.findOne({ clerkId: clerkId })
        let isOwner = JSON.stringify(parentThread.author._id) === JSON.stringify(owner._id)
        if (!isOwner) return null
        await Thread.deleteMany({ parentId: postId })
        await Thread.deleteOne({ _id: postId })
        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Cannot delete post. Error here: ${error.message}`)
    }
}
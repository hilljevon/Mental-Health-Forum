'use server'
import { revalidatePath } from "next/cache"
import User from "../models/user.model"
import { NewUserProps } from "../types/types"
import { connectToDb } from "../mongoose"

export async function createUser(newUser: NewUserProps, path: string) {
    try {
        connectToDb()
        console.log('my new user upcoming...', { ...newUser })
        const newMongoUser = await User.create({ ...newUser })
        console.log('New mongo user created!', newMongoUser)
        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Cannot create new user! Error: ${error.message}`)
    }
}
// ONLY FETCHES MONGO ID
export async function fetchUserByClerk(clerkId: string) {
    try {
        connectToDb()
        const mongoUser = await User.findOne({ clerkId: clerkId })
        return await JSON.parse(JSON.stringify(mongoUser._id))
    } catch (error: any) {
        throw new Error(`Unable to fetch user by ClerkId. Error here: ${error.message}`)
    }
}
// FETCHES FULL MONGO USER
export async function fetchMongoUserByClerk(clerkId: string) {
    try {
        connectToDb()
        const mongoUser = await User.findOne({ clerkId: clerkId })
        return await JSON.parse(JSON.stringify(mongoUser))
    } catch (error: any) {
        throw new Error(`Unable to find Mongo User by ClerkId. Error here: ${error.message}`)
    }
}
export async function fetchUserProfile(mongoId: string) {
    try {
        connectToDb()
        const mongoUser = await User.findById(mongoId)
            .populate('comments')
            .populate('posts')
            .populate('reposts')
            .populate('likes')
        return await (JSON.parse(JSON.stringify(mongoUser)))
    } catch (error: any) {
        throw new Error(`Cannot fetch user! Error here: ${error.message}`)
    }
}
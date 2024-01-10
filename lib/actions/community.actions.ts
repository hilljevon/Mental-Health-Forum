'use server'
import { revalidatePath } from "next/cache"
import User from "../models/user.model"
import { NewCommunityProps, NewUserProps } from "../types/types"
import { connectToDb } from "../mongoose"
import Community from "../models/community.model"
export async function createCommunity(newCommunityObject: NewCommunityProps, clerkId: string, path: string) {
    try {
        connectToDb()
        const mongoUser = await User.findOne({ clerkId: clerkId })
        const community = await Community.create({
            ...newCommunityObject,
            members: [mongoUser._id],
            owner: mongoUser._id,
            admin: [mongoUser._id],
            moderators: [mongoUser._id]
        })
        console.log('NEW COMMUNITY CREATED!!', community)
        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Unable to create new community! Error here: ${error.message}`)
    }
}
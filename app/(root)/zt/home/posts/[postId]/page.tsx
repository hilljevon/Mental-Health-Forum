import ShowPost from '@/components/general/ShowPost'
import { fetchThreadById } from '@/lib/actions/thread.actions'
import { fetchMongoUserByClerk, fetchUserByClerk } from '@/lib/actions/user.actions'
import { currentUser } from '@clerk/nextjs'
import React from 'react'


const page = async ({ params }: { params: { postId: string } }) => {
    const clerkUser = await currentUser()
    if (!clerkUser) return null
    const mongoUser = await fetchMongoUserByClerk(clerkUser.id)
    console.log('MY MONGO USER HERE', mongoUser)
    const { parsedThread, isOwner } = await fetchThreadById(clerkUser.id, params.postId)
    return (
        <ShowPost post={parsedThread} isOwner={isOwner} clerkId={clerkUser.id} mongoUser={mongoUser} />
    )
}

export default page
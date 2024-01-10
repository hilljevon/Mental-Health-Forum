import ShowPost from '@/components/general/ShowPost'
import { fetchThreadById } from '@/lib/actions/thread.actions'
import { currentUser } from '@clerk/nextjs'
import React from 'react'


const page = async ({ params }: { params: { postId: string } }) => {
    const clerkUser = await currentUser()
    if (!clerkUser) return null
    const { parsedThread, isOwner } = await fetchThreadById(clerkUser.id, params.postId)
    return (
        <ShowPost post={parsedThread} isOwner={isOwner} clerkId={clerkUser.id} />
    )
}

export default page
import PostContent from '@/components/content/PostContent'
import { fetchAllThreadPosts } from '@/lib/actions/thread.actions'
import { fetchUserByClerk } from '@/lib/actions/user.actions'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async () => {
    const clerkUser = await currentUser()
    if (!clerkUser) return null
    const clerkObject = {
        clerkId: clerkUser.id || '',
        username: clerkUser.username || ''
    }
    const allThreads = await fetchAllThreadPosts()
    const mongoId = await fetchUserByClerk(clerkUser.id)
    return (
        <PostContent clerkObject={clerkObject} threads={allThreads} mongoId={mongoId} />
    )
}

export default page
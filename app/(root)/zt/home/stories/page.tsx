import StoryContent from '@/components/content/StoryContent'
import { fetchHomeStories } from '@/lib/actions/thread.actions'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async () => {
    const clerkUser = await currentUser()
    if (!clerkUser) return null
    const stories = await fetchHomeStories()
    return (
        <>
            <StoryContent clerkId={clerkUser.id} threads={stories} />
        </>
    )
}

export default page
import NewCommunity from '@/components/forms/NewCommunity'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async () => {
    const clerkUser = await currentUser()
    if (!clerkUser) return null
    return (
        <>
            <NewCommunity clerkId={clerkUser.id} />
        </>
    )
}

export default page
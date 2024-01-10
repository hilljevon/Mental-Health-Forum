import UserContent from '@/components/content/UserContent'
import { fetchUserProfile } from '@/lib/actions/user.actions'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async ({ params }: { params: { userId: string } }) => {
    const clerkUser = await currentUser()
    if (!clerkUser) return null
    const userData = await fetchUserProfile(params.userId)
    return (
        <>
            <UserContent userData={userData} />
        </>
    )
}

export default page
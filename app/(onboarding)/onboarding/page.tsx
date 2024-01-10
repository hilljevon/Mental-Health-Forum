import OnboardingForm from '@/components/forms/OnboardingForm'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async () => {
    const clerkUser = await currentUser()
    if (!clerkUser) return null
    const clerkObject = {
        clerkId: clerkUser.id || '',
        firstName: clerkUser.firstName || '',
        lastName: clerkUser.lastName || '',
        imageUrl: clerkUser.imageUrl || '',
        email: clerkUser.emailAddresses[0].emailAddress || '',
        username: clerkUser.username || '',
    }
    return (
        <>
            <OnboardingForm clerkObject={clerkObject} />
        </>
    )
}

export default page
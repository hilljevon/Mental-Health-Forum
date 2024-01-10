'use client'
// ******************************* CURRENT *******************************
import React from 'react'
import {
    ChatBubbleLeftEllipsisIcon,
    CodeBracketIcon,
    EllipsisVerticalIcon,
    EyeIcon,
    FlagIcon,
    HandThumbUpIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    ShareIcon,
    StarIcon,
} from '@heroicons/react/20/solid'
import { Button } from '../ui/button'
// who to follow profiles, top right
const whoToFollow = [
    {
        name: 'Leonard Krasner',
        handle: 'leonardkrasner',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Johnson',
        handle: 'michaeljohnson',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=3166&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Kyle Watson',
        handle: 'kylewatson',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // More people...
]
// BOTTOM RIGHT POSTS
const trendingPosts = [
    {
        id: 1,
        user: {
            name: 'Floyd Miles',
            imageUrl:
                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
        comments: 291,
    },
    {
        id: 2,
        user: {
            name: 'Floyd Miles',
            imageUrl:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        body: "Have you ever lied about your age to buy a kid's meal at a restaurant?",
        comments: 198,
    },
    {
        id: 3,
        user: {
            name: 'Floyd Miles',
            imageUrl:
                'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        body: "Does Santa Claus pay property taxes for his workshop at the North Pole?",
        comments: 198,
    },

]
const RightUserSection = () => {
    return (
        <>
            <section aria-labelledby="who-to-follow-heading">
                {/* TOP RIGHT, WHO TO FOLLOW SECTION */}
                <div className="rounded-lg bg-gray-50 shadow max-w-xs mx-auto">
                    <div className="p-6">
                        <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                            @jevonhill
                        </h2>
                        <div className='border-b pb-4'>
                            <Button className='bg-blue-600 mt-3 rounded-sm hover:bg-blue-800'>Follow</Button>
                            <Button className='ml-3 rounded-sm'>Message</Button>
                        </div>
                        <div className="mt-3 flow-root">
                            <div className='grid grid-cols-3 gap-x-6 gap-y-0 sm:grid-cols-6 mr-4 border-b pb-4'>
                                <div className='col-span-2'>
                                    2000
                                </div>
                                <div className='col-span-2'>
                                    92
                                </div>
                                <div className='col-span-2'>
                                    8
                                </div>
                                <div className='col-span-2 text-sm text-gray-400'>
                                    Followers
                                </div>
                                <div className='col-span-2 text-sm text-gray-400'>
                                    Following
                                </div>
                                <div className='col-span-2 text-sm text-gray-400'>
                                    Posts
                                </div>
                            </div>
                            <div className="mt-3">
                                <h2 className='text-medi'>Communities</h2>
                            </div>
                        </div>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                            >
                                View all
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RightUserSection
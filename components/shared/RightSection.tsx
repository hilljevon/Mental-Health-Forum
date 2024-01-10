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
const RightSection = () => {
    return (
        <>
            <section aria-labelledby="who-to-follow-heading">
                {/* TOP RIGHT, WHO TO FOLLOW SECTION */}
                <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                        <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                            Who to follow <span className='text-xs text-gray-600'>(coming soon...)</span>
                        </h2>
                        <div className="mt-6 flow-root">
                            <ul role="list" className="-my-4 divide-y divide-gray-200">
                                {whoToFollow.map((user) => (
                                    <li key={user.handle} className="flex items-center space-x-3 py-4">
                                        <div className="flex-shrink-0">
                                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href={user.href}>{user.name}</a>
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <a href={user.href}>{'@' + user.handle}</a>
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900"
                                            >
                                                <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                Follow
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
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
            {/* TRENDING SECTION */}
            <section aria-labelledby="trending-heading">
                <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                        <h2 id="trending-heading" className="text-base font-medium text-gray-900">
                            Trending <span className='text-xs text-gray-600'>(coming soon...)</span>
                        </h2>
                        <div className="mt-6 flow-root">
                            <ul role="list" className="-my-4 divide-y divide-gray-200">
                                {trendingPosts.map((post) => (
                                    <li key={post.id} className="flex space-x-3 py-4">
                                        <div className="flex-shrink-0">
                                            <img className="h-8 w-8 rounded-full" src={post.user.imageUrl} alt={post.user.name} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm text-gray-800">{post.body}</p>
                                            <div className="mt-2 flex">
                                                <span className="inline-flex items-center text-sm">
                                                    <button
                                                        type="button"
                                                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                                    >
                                                        <ChatBubbleLeftEllipsisIcon className="h-5 w-5" aria-hidden="true" />
                                                        <span className="font-medium text-gray-900">{post.comments}</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
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

export default RightSection
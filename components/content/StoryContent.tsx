'use client'
import React, { useEffect } from 'react'
import { AllThreadPostProps } from '@/lib/types/types'
import { useUserContext } from '@/lib/contexts/UserProvider';
import Link from 'next/link';

const StoryContent = ({ clerkId, threads }: { clerkId: string, threads: AllThreadPostProps[] }) => {
    const { setUser } = useUserContext();
    console.log(threads)
    useEffect(() => {
        { setUser && setUser(clerkId) }
    }, [])
    return (
        <>
            <div className="mt-8 space-y-6 border-gray-200">
                {threads.map((post) => (
                    <article key={post._id} className="flex max-w-3xl flex-col items-start justify-between border-b pb-4">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time className="text-gray-500">
                                {post.createdAt.split('T')[0]}
                            </time>
                            <Link
                                href={`/zt/home/posts/${post._id}`}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                Wellness
                            </Link>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <Link href={`/zt/home/posts/${post._id}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                        </div>
                        <div className="relative mt-4 flex items-center gap-x-4">
                            <img src={post.author.profileImg} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a href={`/user/${post.author._id}`}>
                                        <span className="absolute inset-0" />
                                        {post.author.username}
                                    </a>
                                </p>
                                <p className="text-gray-600">User</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}

export default StoryContent
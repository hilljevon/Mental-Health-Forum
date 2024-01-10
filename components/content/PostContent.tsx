'use client'
// ******************************* CURRENT *******************************
import React, { Fragment, useEffect } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
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
import {
    ArrowTrendingUpIcon,
    Bars3Icon,
    BellIcon,
    FireIcon,
    HomeIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { AllThreadPostProps } from '@/lib/types/types'
import { useUserContext } from '@/lib/contexts/UserProvider'
import Link from 'next/link'
import { useToast } from '../ui/use-toast'
import { usePathname, useRouter } from 'next/navigation'
import { likePost } from '@/lib/actions/thread.actions'
interface ClerkProps {
    username: string,
    clerkId: string
}
// MAIN MIDDLE CONTENT
const questions = [
    {
        id: '81614',
        likes: '29',
        replies: '11',
        views: '2.7k',
        author: {
            name: 'Dries Vincent',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        date: 'December 9 at 11:43 AM',
        datetime: '2020-12-09T11:43:00',
        href: '#',
        title: 'What would you have done differently if you ran Jurassic Park?',
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
    },
    {
        id: '81615',
        likes: '49',
        replies: '27',
        views: '3.1k',
        author: {
            name: 'Lindsey Walton',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        date: 'December 22 at 09:43 PM',
        datetime: '2020-12-09T11:43:00',
        href: '#',
        title: "What's it like to be a golden retriever?",
        body: `Man I am glad you asked this question. I'm a 6 year old golden retriever and while I still have a few years left to experience, I think I've been around long enough to tell you what it's really like.

        Most people think being a dog is awesome. You sleep as much as you want, all of your meals are prepared for you, and someone literally picks up your poop you. And yeah, you know what, those parts are pretty awesome. But there's a dark side to being a golden retriever that they don't tell you about…
        `,
    },
    // More questions...
]
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const PostContent = ({ clerkObject, threads, mongoId }: { clerkObject: ClerkProps, threads: AllThreadPostProps[], mongoId: string }) => {
    const { setUser } = useUserContext();
    const path = usePathname()
    const router = useRouter()
    const { toast } = useToast()
    useEffect(() => {
        { setUser && setUser(clerkObject.clerkId) }
    }, [])
    const handleLikeClick = async (thread: AllThreadPostProps) => {
        await likePost(clerkObject.clerkId, thread._id, path)
        toast({ description: 'Post has been liked!' })
    }
    return (
        <>
            <h1 className="sr-only">Recent questions</h1>
            <ul role="list" className="space-y-4">
                {threads.map((thread: AllThreadPostProps) => (
                    <li key={thread._id} className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                        <article aria-labelledby={'question-title-' + thread._id}>
                            <div>
                                <div className="flex space-x-3">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={thread.author.profileImg} alt="" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-semibold text-gray-900">
                                            <Link href={`/user/${thread.author._id}`} className="hover:underline">
                                                {/* thread author name */}
                                                @{thread.author.username}
                                            </Link>
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <a href={`/zt/home/posts/${thread._id}`} className="">
                                                <time dateTime={thread.createdAt}>{thread.createdAt.split('T')[0]}</time>
                                            </a>
                                        </p>
                                    </div>
                                    <div className="flex flex-shrink-0 self-center">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="relative -m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                                                    <span className="absolute -inset-1" />
                                                    <span className="sr-only">Open options</span>
                                                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-0"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'flex px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                    <span>Add to favorites</span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'flex px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    <CodeBracketIcon
                                                                        className="mr-3 h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <span>Embed</span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'flex px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                    <span>Report content</span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <Link href={`/zt/home/posts/${thread._id}`}>
                                    <h2 id={'question-title-' + thread._id} className="mt-4 text-base font-medium text-gray-900 hover:text-gray-600">
                                        {thread.title}
                                    </h2>
                                </Link>
                            </div>
                            <div
                                className="mt-2 space-y-4 text-sm text-gray-700"
                                dangerouslySetInnerHTML={{ __html: thread.description }}
                            />
                            <div className="mt-6 flex justify-between space-x-8">
                                <div className="flex space-x-6">
                                    {/* LIKES */}
                                    <span className="inline-flex items-center text-sm">
                                        <button onClick={() => handleLikeClick(thread)} type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                            <HandThumbUpIcon className={`h-5 w-5} ${thread.upvotes.includes(mongoId) && 'text-red-600'} `} aria-hidden="true" />
                                            <span className="font-medium text-gray-900"> {thread.upvotes.length} </span>
                                            <span className="sr-only">likes</span>
                                        </button>
                                    </span>
                                    {/* REPLIES */}
                                    <span className="inline-flex items-center text-sm">
                                        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                            <ChatBubbleLeftEllipsisIcon className="h-5 w-5" aria-hidden="true" />
                                            <span className="font-medium text-gray-900">{thread.children.length}</span>
                                            <span className="sr-only">replies</span>
                                        </button>
                                    </span>
                                    {/* VIEWS */}
                                    {/* <span className="inline-flex items-center text-sm">
                                        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                            <EyeIcon className="h-5 w-5" aria-hidden="true" />
                                            <span className="font-medium text-gray-900">4k</span>
                                            <span className="sr-only">views</span>
                                        </button>
                                    </span> */}
                                </div>
                                <div className="flex text-sm">
                                    <span className="inline-flex items-center text-sm">
                                        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                            <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                            <span className="font-medium text-gray-900">Share</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PostContent
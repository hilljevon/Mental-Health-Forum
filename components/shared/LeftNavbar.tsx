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
import {
    ArrowTrendingUpIcon,
    Bars3Icon,
    BellIcon,
    FireIcon,
    HomeIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
const navigation = [
    { name: 'Home', href: '/zt/home/posts', icon: HomeIcon, current: true },
    { name: 'Popular', href: '#', icon: FireIcon, current: false },
    { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Trending', href: '#', icon: ArrowTrendingUpIcon, current: false },
]

// BOTTOM LEFT, COMMUNITY CATEGORIES
const communities = [
    { name: 'Main', href: '/zt/home/posts' },
    { name: 'Wellness', href: '/zt/home/posts' },
    { name: 'Therapy', href: '#' },
    { name: 'Nutrition', href: '#' },
    // { name: 'Science', href: '#' },
    // { name: 'Dinosaurs', href: '#' },
    // { name: 'Talents', href: '#' },
    // { name: 'Gaming', href: '#' },
]
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const LeftNavbar = () => {
    return (
        <>
            <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
                <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                    <div className="space-y-1 pb-8">
                        {/* TOP LEFT NAVIGATION */}
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50',
                                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                <item.icon
                                    className={classNames(
                                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                        '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                />
                                <span className="truncate">{item.name}</span>
                            </a>
                        ))}
                    </div>
                    <div className="pt-10">
                        <p className="px-3 text-sm font-medium text-gray-500" id="communities-headline">
                            Communities
                        </p>
                        {/* BOTTOM LEFT NAVIGATION CATEGORIES */}
                        <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
                            {communities.map((community) => (
                                <a
                                    key={community.name}
                                    href={community.href}
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    <span className="truncate">{community.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default LeftNavbar
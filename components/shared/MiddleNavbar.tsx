'use client'
import { useUserContext } from '@/lib/contexts/UserProvider'
import { usePathname } from 'next/navigation'
// ******************************* CURRENT *******************************
import React, { useEffect, useState } from 'react'
// MIDDLE COLUMN NAV
// let tabs = [
//     { name: 'Posts', href: '/zt/home/posts', current: true },
//     { name: 'Stories', href: '/zt/home/stories', current: false },
//     { name: 'Questions', href: '/zt/home/questions', current: false },
// ]
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
type TabType = {
    name: string,
    href: string,
    current: boolean
}
const MiddleNavbar = () => {
    const [tabs, setTabs] = useState([
        { name: 'Posts', href: '/zt/home/posts', current: false },
        { name: 'Stories', href: '/zt/home/stories', current: false },
        { name: 'Questions', href: '/zt/home/questions', current: false },
    ])
    const path = usePathname()
    const activeTab = path.split('/zt/home/')[1]
    useEffect(() => {
        setTabs((oldTabs: TabType[]) => {
            const newTabs = oldTabs.map((tab: TabType) => {
                if (tab.name.toLowerCase() === activeTab) {
                    return { ...tab, current: true }
                } else {
                    return { ...tab, current: false }
                }
            })
            return newTabs
        })
    }, [])
    return (
        <>
            {/* FOR MIDDLE NAVBAR */}
            <div className="sm:hidden">
                <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="question-tabs"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-rose-500"
                >
                    {tabs.map((tab, idx) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            {/* MIDDLE NAVBAR, MOBILE */}
            <div className="hidden sm:block">
                <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                    {tabs.map((tab, tabIdx) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? 'page' : undefined}
                            className={classNames(
                                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-l-lg' : '',
                                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
                            )}
                        >
                            <span>{tab.name}</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    tab.current ? 'bg-rose-500' : 'bg-transparent',
                                    'absolute inset-x-0 bottom-0 h-0.5'
                                )}
                            />
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}

export default MiddleNavbar
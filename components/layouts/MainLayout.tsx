'use client'
import Link from 'next/link'
import TopNavbar from '../shared/TopNavbar'
import LeftNavbar from '../shared/LeftNavbar'
import MiddleNavbar from '../shared/MiddleNavbar'
import RightSection from '../shared/RightSection'
import MiddleContent from '../content/PostContent'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-full">
                {/* TOP NAVBAR ADD HERE */}
                <TopNavbar />
                <div className="py-10">
                    <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                        {/* LEFT SECTION */}
                        <LeftNavbar />
                        {/* MIDDLE SECTION */}
                        <main className="lg:col-span-9 xl:col-span-6">
                            <div className="px-4 sm:px-0">
                                <MiddleNavbar />
                            </div>
                            {/* MAIN MIDDLE CONTENT */}
                            <div className="mt-4">
                                {children}
                            </div>
                        </main>
                        {/* RIGHT SIDEBAR */}
                        <aside className="hidden xl:col-span-4 xl:block">
                            <div className="sticky top-4 space-y-4">
                                <RightSection />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ThreeLayout from '@/components/shared/ThreeLayout'
import { UserProvider } from '@/lib/contexts/UserProvider'
import MainLayout from '@/components/layouts/MainLayout'
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'ZenThreads',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html className="" lang="en">
                <body className={`${inter.className}`}>
                    <UserProvider>
                        <MainLayout children={children} />
                        <Toaster />
                    </UserProvider>
                </body>
            </html>
        </ClerkProvider >
    )
}

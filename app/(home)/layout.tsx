import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ThreeLayout from '@/components/shared/ThreeLayout'


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
                    <ThreeLayout children={children} />
                </body>
            </html>
        </ClerkProvider >
    )
}

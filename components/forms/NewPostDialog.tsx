'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { usePathname, useRouter } from 'next/navigation'
import { useUserContext } from '@/lib/contexts/UserProvider'
import { createThreadPost } from '@/lib/actions/thread.actions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewPostForm from './NewPostForm'
import NewStoryForm from './NewStoryForm'
import NewQuestionForm from './NewQuestionForm'

const NewPostDialog = () => {
    const path = usePathname()
    const router = useRouter()
    const { user } = useUserContext()
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='ml-6 inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600' variant="outline">New Post</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>zt/home</DialogTitle>
                        <DialogDescription>
                            Add a title and caption for your post.
                        </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="posts">Post</TabsTrigger>
                            <TabsTrigger value="stories">Story</TabsTrigger>
                            <TabsTrigger value="question">Question</TabsTrigger>
                        </TabsList>
                        <TabsContent value="posts">
                            {/* new post form */}
                            <NewPostForm />
                        </TabsContent>
                        <TabsContent value="stories">
                            {/* new story form */}
                            <NewStoryForm />
                        </TabsContent>
                        <TabsContent value="question">
                            {/* new question form */}
                            <NewQuestionForm />
                        </TabsContent>
                    </Tabs>

                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewPostDialog
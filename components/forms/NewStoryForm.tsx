'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"

import * as z from "zod"
import { usePathname, useRouter } from 'next/navigation'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useUserContext } from '@/lib/contexts/UserProvider'
import { createThreadPost } from '@/lib/actions/thread.actions'
const formSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(5),
    notifications: z.boolean()
})
const NewStoryForm = () => {
    const path = usePathname()
    const router = useRouter()
    const { user } = useUserContext()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
            notifications: false
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const newPost = {
            title: values.title,
            description: values.description,
            replyNotifications: values.notifications,
            type: 'story'
        }
        const newThread = await createThreadPost(newPost, user, path)
        form.reset()
        router.push('/zt/home/stories')
    }
    return (
        <>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mr-4">
                        {/* title */}
                        <div className="sm:col-span-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Heading
                                        </FormLabel>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    id="title"
                                                    {...field}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/* description */}
                        <div className="col-span-full">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                            Your Story
                                        </FormLabel>
                                        <div className="mt-2">
                                            <textarea
                                                id="description"
                                                rows={7}
                                                {...field}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Tell your story.</p>
                                    </FormItem>
                                )} />
                        </div>
                    </div>
                    {/* notifications */}
                    <div className="sm:col-span-6">
                        <FormField
                            control={form.control}
                            name="notifications"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md mt-3">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Send me post reply notifications
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <DialogFooter className='mt-3 mr-4'>
                        <DialogClose asChild>
                            <Button type="submit">Create Post</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </Form>
        </>
    )
}

export default NewStoryForm
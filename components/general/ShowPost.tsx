'use client'
import { AllThreadPostProps, MongoUserProps } from '@/lib/types/types'
import Link from 'next/link'
import React from 'react'
import AddCommentToPost from '../forms/AddCommentToPost'
import { deletePost } from '@/lib/actions/thread.actions'
import { usePathname, useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

const reviews = {
    average: 4,
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
          <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
        `,
            date: 'July 16, 2021',
            datetime: '2021-07-16',
            author: 'Emily Selman',
            avatarSrc:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        {
            id: 2,
            rating: 5,
            content: `
          <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
        `,
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            author: 'Hector Gibbons',
            avatarSrc:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        // More reviews...
    ],
}
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const ShowPost = ({ post, isOwner, clerkId, mongoUser }: { post: AllThreadPostProps, isOwner: boolean, clerkId: string, mongoUser: MongoUserProps }) => {
    const path = usePathname()
    const router = useRouter()
    const { toast } = useToast()
    const handleDelete = async () => {
        const deleted = await deletePost(post._id, clerkId, path)
        toast({ description: 'Post deleted!' })
        router.push('/zt/home/posts')
    }
    return (
        <>
            <article key={post._id} className="flex max-w-3xl flex-col items-start justify-between border-b pb-4 mt-8">
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
                    {isOwner && (
                        <p onClick={handleDelete} className='text-xs text-gray-700 font-semibold underline hover:cursor-pointer'>Delete Post</p>
                    )}
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
                            <a href={`/zt/user/${post.author}`}>
                                <span className="absolute inset-0" />
                                @{post.author.username}
                            </a>
                        </p>
                        <p className='text-sm'>User</p>
                    </div>
                </div>
            </article>
            <AddCommentToPost postId={post._id} clerkId={clerkId} mongoUser={mongoUser} />
            <h3 className="sr-only">Customer Reviews</h3>
            {post.children.map((comment, commentIdx) => (
                <div key={comment._id} className="flex space-x-4 text-sm w-full text-gray-500 ">
                    <div className="flex-none py-5">
                        <img src={comment.author.profileImg} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    </div>
                    <div className={classNames(commentIdx === 0 ? '' : 'border-t border-gray-200 w-full', 'py-5')}>
                        <h3 className="font-medium text-gray-900">@{comment.author.username}</h3>
                        <p>
                            <time dateTime={comment.createdAt}>{comment.createdAt.split('T')[0]}</time>
                        </p>

                        <div
                            className="prose prose-sm mt-2 max-w-none text-gray-500"
                            dangerouslySetInnerHTML={{ __html: comment.title }}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}
// AUTHOR USERNAME, AUTHOR MONGO ID, AUTHOR PROFILE IMG
export default ShowPost
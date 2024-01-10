export type ClerkObjectProps = {
    clerkId: string,
    firstName: string,
    lastName: string,
    imageUrl: string,
    email: string,
    username: string,
}
export type NewUserProps = {
    clerkId: string,
    firstName: string,
    lastName: string,
    profileImg: string,
    email: string,
    username: string,
    bio: string,
    phone: string,
    onboarded: boolean
}
export type NewCommunityProps = {
    name: string,
    description: string,
    public: boolean,
    status: string,
    rules: {
        title: string,
        description: string
    }[],
}
export type NewPostProps = {
    title: string,
    description: string,
    replyNotifications: boolean,
    type: string
}
export type MongoUserProps = {
    badges: string[],
    bio: string,
    clerkId: string,
    comments: AllThreadPostProps[],
    email: string,
    firstName: string,
    followers: any[],
    following: any[],
    friends: MongoUserProps[],
    journals: any[],
    lastName: string,
    likes: MongoUserProps[],
    onboarded: boolean,
    phone: string,
    posts: AllThreadPostProps[],
    profileImg: string,
    reposts: AllThreadPostProps[],
    tags: string[],
    username: string,
    _id: any
}
export type AllThreadPostProps = {
    _id: string,
    author: MongoUserProps,
    title: string,
    description: string,
    tags: string[],
    images: string[],
    community: string,
    children: AllThreadPostProps[],
    upvotes: string[],
    reposts: string[],
    replyNotifications: boolean,
    createdAt: string,
    updatedAt: string
}
export type NewCommentProps = {
    title: string,
    parentId: string,
    clerkId: string
}
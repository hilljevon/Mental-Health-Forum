import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    clerkId: String,
    firstName: String,
    lastName: String,
    username: String,
    bio: String,
    pfp: String,
    email: String,
    phone: String,
    emailNotifications: Boolean,
    messageNotifications: Boolean,
    onboarded: Boolean,
    journals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Journal'
        }
    ],
    tags: [String],
    profileImg: String,
    bannnerImg: String,
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    friends: [
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    reposts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    influence: Number,
    badges: [
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Badge'
            }
        ],
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    gender: String,
})
const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
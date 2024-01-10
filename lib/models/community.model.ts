import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    name: String,
    description: String,
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    stories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    admin: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    rules: [
        {
            title: String,
            description: String
        }
    ],
    journals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Journal'
        }
    ],
    moderators: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    public: Boolean,
    profileImg: String,
    backgroundImg: String,
    theme: String,
    tags: [String],
    status: String,
})
const Community = mongoose.models.Community || mongoose.model('Community', communitySchema)
export default Community
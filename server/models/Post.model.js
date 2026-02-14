const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    fullname: {
        type: String
    },

    profileImg: {
        type: String
    },

    description: {
        type: String
    },

    postImg: {
        type: String
    },

    title: {
        type: String
    },

    content: {
        type: String
    },

    author: {
        type: String
    },

    likes: {
        type: Number,
        default: 0
    },

    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Post = mongoose.model("posts", postSchema)

module.exports = Post

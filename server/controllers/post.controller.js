const Post = require('../models/Post.model');
const { imageUpload } = require('../utils/image');

const getPosts = async (req, res, next) => {
    try {
        const post = await Post.find();
        return res.status(200).json({ data: { post } });
    } catch (error) {
        console.log("error in getPosts", error);
    }
}

const addPost = async (req, res, next) => {
    try {
        const user = req.user;
        const { title, content, likes, description, author, profileImg } = req.body;

        let imageUrl = null;

        if (req.files && req.files.length > 0) {
            const filePaths = req.files.map(file => file.path);
            const uploadResult = await imageUpload('posts images', filePaths);

            if (uploadResult && uploadResult.length > 0) {
                imageUrl = uploadResult[0].secure_url;
            }
        }

        const newPost = await Post.create({
            title,
            content,
            description,
            likes: likes || 0,
            author: author || user.fullname,
            profileImg: profileImg || user.photo,
            userId: user._id,
            postImg: imageUrl
        });

        return res.status(200).json({
            status: 'success',
            data: { post: newPost }
        });

    } catch (error) {
        console.log("error in addPost", error);
        res.status(500).json({ status: 'error', message: error.message });
    }
}

const deletePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const post = await Post.findByIdAndDelete(id);
        return res.status(200).json({ data: { post } });
    } catch (error) {
        console.log("error in deletePost", error);
    }
}


const updatePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ data: { post } });
    } catch (error) {
        console.log("error in updatePost", error);
    }
}

module.exports = {
    getPosts,
    addPost,
    deletePost,
    updatePost
}

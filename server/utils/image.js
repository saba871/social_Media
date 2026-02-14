const claudinary = require("../config/claudinary.js");


const settings = {
    use_filename: true,
    unique_filename: true,
    overwrite: true,
    resource_type: "image",
    quality: "auto",
    format: "webp",
    transformation: [{ width: 200, height: 200, crop: "fit", gravity: "center" }],
};

const imageUpload = async (folder, files) => {
    try {
        const uploadPromises = files.map((file) => {
           return claudinary.uploader.upload(file, { ...settings, folder })
        })

        const results = await Promise.all(uploadPromises);
        return results
    } catch (error) {
        console.log("error in imageUpload", error);
    }
};

module.exports = {
    imageUpload
}

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
    },

    photo: String,
    
    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"],
    },

    password: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    photo: String
}, { timestamps: true });


// before save it hashes password
userSchema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
});


// compare hashing password
userSchema.methods.comparePassword = async function (candidate) {
    return await(bcrypt.compare(candidate, this.password));
}


// create token to send
userSchema.methods.signToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}

const User = mongoose.model('User', userSchema);
module.exports = User;

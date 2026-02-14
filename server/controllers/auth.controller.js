const User = require('../models/User.model');

// send json web token
const createSendToken = (user, statusCode, res) => {
    const token = user.signToken();

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        secure: false,
        sameSite: 'lax',
    };

    res.status(statusCode).cookie('token', token, options).json({ user })
}


// get uers
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({ users });
    } catch (error) {
        console.log("error in getUsers", error);
    }
}

// signup
const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.create({ fullname, email, password });
        createSendToken(user, 201, res);
    } catch (error) {
        console.log('error in signUp', error);
    }
};

// login
const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordCorrect = await user.comparePassword(password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }

        return createSendToken(user, 200, res);
    } catch (error) {
        console.log('error in logIn', error);
    }
};



// update user
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;

        const { fullname, email, isAdmin } = req.body;

        const user = await User.findByIdAndUpdate(id, { fullname, email, isAdmin }, { new: true });

        return res.status(200).json({ user });
    } catch (error) {
        console.log("error in updateUser", error);
    }
}


// delete user
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.log("error in deleteUser", error);
    }
}


const logOut = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
}

module.exports = {
    getUsers,
    signUp,
    logIn,
    updateUser,
    deleteUser,
    logOut
};

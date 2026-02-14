const express = require('express');
const { signUp, logIn, updateUser, deleteUser, getUsers, logOut } = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');

const authRouter = express.Router();

authRouter.get('/', getUsers);
authRouter.post('/signup', signUp);
authRouter.post('/login', logIn);
authRouter.put('/:id', updateUser);
authRouter.delete('/:id', deleteUser);
authRouter.post('/logout', logOut);

authRouter.post("/autologin", protect, (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    return res.status(200).json({ user: req.user });
});

module.exports = authRouter;

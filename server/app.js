const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.router');
const cors = require('cors');
const postRouter = require('./routes/post.router');
const cookieParser = require('cookie-parser');

const app = express();
dotEnv.config();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());


app.use('/api/auth', authRouter);
app.use("/api/posts", postRouter);

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server running on port 3000');
        });

        console.log('Database connected');
    })
    .catch((error) => {
        console.log(error);
    });

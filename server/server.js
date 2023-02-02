const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// enviourment variables
env.config();

// middlewares
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require('./routes/user.routes');
const testRoutes = require('./routes/test.routes');

app.use('/public', express.static(path.join(__dirname, "uploads")));
app.use('/api', userRoutes)
app.use('/api', testRoutes)

// mongodb connection
const connectDB = (dburl) => {
    return mongoose.connect(dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }).then(() => {
        console.log('Database Connected');
    })
}

const start = async () => {
    try {
        await connectDB("mongodb+srv://Harshal_k:b4wx4HEPz5dk63MO@fplay.nvhvf4g.mongodb.net/fplay?retryWrites=true&w=majority");
        app.listen(5000, () => {
            console.log(`Server is running on port ${5000}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
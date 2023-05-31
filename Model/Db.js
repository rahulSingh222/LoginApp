const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGOURL;

mongoose.connect(URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

mongoose.connection.on('connected', () => {
    console.log("Connected to mongodb");
});

mongoose.connection.on("error", (err) => {
    console.error("failed to connect mongodb", err);
})


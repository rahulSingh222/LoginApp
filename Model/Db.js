const mongoose = require('mongoose');

const URL = 'mongodb+srv://rsinghrahul224:JUJsvTso7J8VJTnK@cluster0.d2m0oyl.mongodb.net/?retryWrites=true&w=majority'

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


const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./Controllers/controller');
require("./Model/Db")

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => console.log(`app lostening at port ${PORT}`));


const express = require('express');
const router = require('./routers');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv');
const { connectToDB } = require('./database');

dotenv.config();
app.use(express.json());

connectToDB(); // connect to database
app.use(router);

app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');
const helmet = require('helmet');

const app = express();

dotEnv.config();

app.use(helmet());
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).json({
        greeding: 'Helloo, welcome to Burak\' website!'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
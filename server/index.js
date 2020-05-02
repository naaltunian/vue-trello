const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
if(process.env.node !== 'production') {
    require('dotenv').config();
}

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
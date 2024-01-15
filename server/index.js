const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute')

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.get('/', (req,res) => {
    res.send('welcome!')
});



app.listen(port, (req, res)=>{
    console.log(`server runnin on ${port}`);
} );

mongoose.connect(uri,{
})
.then(()=> console.log('Mongodb connection established.'))
.catch((error) => console.log("Mongodb connection failed:", error.message));
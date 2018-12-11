const mongoose = require('mongoose');
const express = require('express');
const app = express();

//DB Setting
const mlab = 'mongodb://picker:picker1234@ds037478.mlab.com:37478/phonepicker';
mongoose.connect(mlab, {useNewUrlParser:true})
.then( () => console.log('Connected to MongoDB') )
.catch( (error) => console.log(error) );

app.use(express.json());

const port = process.env.PORT || 5000;
app.listen( port, () => console.log(`Listening on port ${port}`) );

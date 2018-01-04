var express = require('express');
const bodyParser = require('body-parser');

const app=express();
const port = process.env.PORT || 3001;


app.listen(port, ()=>{
    console.log(`Store Server running on port ${port}`);
});
const express = require("express");

const app = express();
const PORT = 8002;

app.listen(PORT, ()=>{
    console.log(`Server started on Port: ${PORT}`);
    
});
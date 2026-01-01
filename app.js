const express = require ('express');
const app = express();

// routes files 
app.get('/', (req, res) => {
res.send('Hello world! I\'m New here!');
});

//node server console
app.listen(3000, ()=>{
console.log('Server is running on port 3000')
});
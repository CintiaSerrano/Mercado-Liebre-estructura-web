const express = require ('express');
const path = require ('path');
const app = express();
port = 3030;

app.listen(port, () => {
    console.log('Server running in http://localhost:' + port)
});

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'views','home.html'))
});

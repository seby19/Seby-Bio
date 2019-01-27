
const express = require('express');
const path = require('path');
const app =express()
app.use(express.static('./dist/Portfolio'));
app.get('/*',(req , res) =>{
    res.sendFile(path.join('/dist/Portfolio/index.html'));
});

app.listen(process.env.PORT || 8080 , () =>
{
    console.log('server started');
}
)
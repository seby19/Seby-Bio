
const express = require('express');
const path = require('path');
const app =express()
app.use(express.static('./dist/portfolio'));
app.get('/*',(req , res) =>{
    res.sendFile(path.join('/dist/portfolio/index.html'));
});

app.listen(process.env.PORT || 8080 , () =>
{
    console.log('server started');
}
)
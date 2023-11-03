const express = require("express");
const videoRouter=require('./route/videoroute');

const app= express();
app.use(express.json());
// app.use('/video',(req,res)=>{
// res.send("HELLO");
// });
// app.get('/video',(req,res)=>{
//     res.send("HELLO");
// });
app.use(videoRouter);
// app.post('/video',(req,res)=>{
//     console.log(req.body);
//     const video=[
//         {title:"video 1",thumbnail:"https://www.youtube.com/watch?v=skOrAg0IIJs&list=RDskOrAg0IIJs&start_radio=1"},
//         {title:"video 2",thumbnail:"https://www.youtube.com/watch?v=skOrAg0IIJs&list=RDskOrAg0IIJs&start_radio=1"},
//          {title:"video 3",thumbnail:"https://www.youtube.com/watch?v=skOrAg0IIJs&list=RDskOrAg0IIJs&start_radio=1"},
//          {title:"video 4",thumbnail:"https://www.youtube.com/watch?v=skOrAg0IIJs&list=RDskOrAg0IIJs&start_radio=1"},
//          {title:"video 5",thumbnail:"https://www.youtube.com/watch?v=skOrAg0IIJs&list=RDskOrAg0IIJs&start_radio=1"},
    
//     ];
//  res.send(video);
// });
app.listen(6000,onServerStart);

function onServerStart(){
    console.log("server started");
}

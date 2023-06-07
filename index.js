console.log("Server Starting")

import express from 'express';
import {readFile} from 'fs';


const app = express();

app.get('/', (req, res) => {
  readFile('data/kor-con-game/001.json','utf-8',(err,data)=>{
    if(err){
      console.log("Failed to read")
    }
    try{
      const jsonData = JSON.parse(data);
      console.log("Success")
      console.log(jsonData)

      res.send(jsonData);
    }catch(err){
      console.error('Error parsing JSON:', err);
    }
  })
})

app.listen(3003,()=>{
  console.log("server listening port 3003")
})
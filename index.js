console.log("Server Starting")
import cors from 'cors'
import express from 'express';
import { conGameFindData } from './data/pathHandlers.js';
import conGame from './routes/conGame.js'
import info from './routes/info.js'

const app = express();
app.use(cors())
app.use('/games/con-game', conGame)
app.use('/info', info)

app.listen(3003,()=>{
  console.log("server listening port 3003")
})
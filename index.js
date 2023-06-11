console.log("Server Starting")

import express from 'express';
import { conGameFindData } from './data/pathHandlers.js';
import conGame from './routes/conGame.js'

const app = express();

app.use('/games/con-game', conGame)

app.listen(3003,()=>{
  console.log("server listening port 3003")
})
import {conversationGameInfo} from '../data/infoData.js'
import {conGameFindData, conGameFindMP3} from '../data/pathHandlers.js'
import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.send(conversationGameInfo)
})


router.get('/:id', (req, res) =>{
  const id = req.params.id
  if(parseInt(id)>20){
    res.sendStatus(404)
  }else{
    const data = conGameFindData(id)
    res.send(data)
    
  }
})
router.get('/:id/audio/:sen', (req,res) => {
  const fileName = `G${req.params.id}S${req.params.sen}.mp3`
  try{
    const file = conGameFindMP3(fileName)
    res.set('Content-Type', 'audio/mpeg')
    res.send(file)
  }catch{
    res.status(404).send('file Not Found')
  }
})

export default router
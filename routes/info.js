import {availableGames} from '../data/infoData.js'
import {Router} from 'express'
const router = Router()


router.get('/:info', (req, res) => {
  const info = req.params.info 
  if (info == 'games'){
    res.send(availableGames)
  }

})

export default router
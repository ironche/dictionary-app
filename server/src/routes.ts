import { Router } from 'express'
import { selectWordInfo } from './queries/word'

export default function () {
  return Router()
    .get('/', (req, res) => {
      return res.json({ message: 'Hello, world!' })
    })
    .get('/word/:word/:limit?/:exactMatch?', async (req, res) => {
      try {
        const { word } = req.params
        const limit = parseInt(req.params.limit ?? '')
        const exactMatch = Boolean(+(req.params.exactMatch ?? 0))

        const result = await selectWordInfo(word, limit, exactMatch)
        return res.status(200).json({ result })
      } catch (error) {
        console.error(error)
        return res.status(400).json({ error })
      }
    })
}

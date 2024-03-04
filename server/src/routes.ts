import { Router } from 'express'

export default function () {
  return Router().get('/', (req, res) => {
    return res.json({ message: 'Hello, world!' })
  })
}

import express from 'express'
import routes from './routes'
import { logRequest } from './utils/log'
import { AppConfig } from './config'

express()
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(logRequest)
  .use('/', routes())
  .listen(AppConfig.PORT, () => {
    console.log(`Server is running on port ${AppConfig.PORT}`)
  })

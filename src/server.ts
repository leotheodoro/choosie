import express from 'express'

const app = express()

app.get("/", (request, response) => {
  return response.json({ message: 'Choosie API working...' })
})

app.listen(3333)
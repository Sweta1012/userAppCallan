import express from "express"

const app = express()
const port: Number = 3001
app.listen(port, () => console.log(`app listening on port ${port}`))

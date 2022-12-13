const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config({ path: './config/config.env'})
const routes = require('./endpoints/routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require("./config/db");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.use(cors())
app.use('/api/v1/', routes)

const PORT = process.env.PORT

app.listen(PORT, console.log("Server running"))
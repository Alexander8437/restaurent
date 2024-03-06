const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const { dbConnection } = require('./database/dbConnection.js');
const { errorMiddleware } = require('./error/error.js');
const reservationRoute = require('./routes/reservationRoute.js')
const bodyParser = require('body-parser');

const app = express()
dotenv.config({ path: "./config/config.env" })

app.use(cors(
  {
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  }
))
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRoute)

app.get('/', (req, res) => {
  res.send('hello world')
})

dbConnection();
app.use(errorMiddleware);

module.exports = app;
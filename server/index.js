require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan");
const path = require("path");
const root = process.cwd()
const app = express();
const PORT = process.env.PORT
const ENV = process.env.NODE_ENV

app.use(morgan('tiny'))
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api", require("./routes.js"))

app.get("*", (req, res) => {
  res.sendFile(path.join(root, "index.html"))
})

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} port in ${ENV} mode`);
})

const express = require("express");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(cors({origin:"https://sourcecodewebsite.surajsingh.online"}));
app.use(bodyparser.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//require config.env file
dotenv.config({ path: "./config.env" });

//database file access
require("./database/conn");
app.use(express.json());
app.use(cookieParser());

const PORT=process.env.PORT||5000;

const buildPath = path.join(__dirname, 'sourcecodewebsite/build')

app.use(express.static(buildPath))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//require router
app.use(require("./router/auth"));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

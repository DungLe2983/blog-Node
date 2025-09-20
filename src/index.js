const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); // xử lý form method POST
app.use(express.json()); // xử lý dữ liệu dạng JSON

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" })); // truyền engine vào
app.set("view engine", "hbs"); // sử dụng template engine
app.set("views", "./src/resources/views");

// Routes init
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

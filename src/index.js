const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require("./route/route");


app.use(express.json());

mongoose.connect("mongodb+srv://RameshwarJay:RUlNC8QtlA8A91jX@rameshwarnavathar.dujri1m.mongodb.net/")
.then(() => {console.log("Connect Database successfully")})
.catch((errors) => {console.log(errors.message)})



app.use("/", route);

app.listen(4000, function () {
  console.log("express running on PORT "+ 3000)
})
const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());

//connect to db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/news-group",  // helps get rid of deprecation warnings
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// app.use("/api",(req,res,next)=>{
//     console.log(req.headers);
//     next();
// })
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/articles", require("./routes/article"));

app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});

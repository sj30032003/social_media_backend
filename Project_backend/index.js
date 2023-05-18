const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
dotenv.config();
const morgan = require("morgan");
console.log(process.env.MONGO_URL);
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser:true,  useUnifiedTopology: true },
);
const userRoute = require("./routers/user");
// const authRoute = require("./routers/auth");
// const postRoute = require("./routers/posts");
  app.use(express.json());
  app.use(helmet());
  app.use(morgan("common"));
// app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
// app.use("/api/posts", postRoute);
 
  app.listen(8800,()=>{
    console.log("backend server is");
  });




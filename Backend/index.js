require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const UserRouter = require("./router/UserRouter");
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    Credentials: true,
  }),
);
app.use(express.json());
//handle the user request
app.use(UserRouter);

const MONGOOSE_URI = process.env.MONGOOSE_URI;
mongoose
  .connect(MONGOOSE_URI)
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is listen on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to mongoDB", err);
  });

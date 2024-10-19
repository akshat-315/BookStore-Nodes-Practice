require("dotenv").config();
const express = require("express");
const { connectToDB } = require("./db/db");
const userRouter = require("./routers/UserRouter.js");
const { errorMiddleware } = require("./middlewares/errorMiddleware.js");

const app = express();
connectToDB();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/v1", userRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

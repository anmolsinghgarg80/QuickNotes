const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routers/authRouter");
const notesRouter = require("./routers/notesRouter");

const app = express();

const PORT = process.env.PORT || 8000

const corsOptions = {
  origin: process.env.FR_URL, // Specific origin
  credentials: true, // Required to send cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());
//app.use(express.urlencoded({extended:true}));


mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  console.log("Database connected");
})
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({ data: "Hello" });
});

app.use("/user", authRouter);
app.use("/note", notesRouter);

app.listen(PORT, () => { console.log(`The Server has started at PORT ${PORT}`) });

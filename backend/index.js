import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db Connected");
  } catch (err) {
    console.log("Error: Connection Failed");
  }
};

//Middleware
app.use(express.json());
app.use(cookieparser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute); //domain/api/v1/auth/register
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});

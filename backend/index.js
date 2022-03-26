// To connect with your mongoDB database
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/",
  {
    dbName: "yourDB-name",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err ? console.log(err) : console.log("Connected to yourDB-name database")
);

// Schema for users of app
//wtf
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema2 = new mongoose.Schema({
  email2: {
    type: String,
    required: true,
    unique: true,
  },
  password2: {
    type: String,
    required: true,
  },
});

const User2 = mongoose.model("users2", UserSchema2);

const User = mongoose.model("users", UserSchema);
User.createIndexes();

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
  // You can check backend is working or not by
  // entering http://loacalhost:5000

  // If you see App is working means
  // backend working properly
});

app.post("/register", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    console.log(result);
    result = result.toObject();
    if (result) {
      // delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already registered");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

app.post("/signin", async (req, resp) => {
  const email2 = User.find({ email: User2.email2 });
  console.log(req.body.email2);
//   const orgPwd = email2.password;

//   let pwd = req.body.password2;
//   if (pwd === orgPwd) {
//     alert("Password matched");
//   } else {
//     alert("Try again");
//   }
});
app.listen(5000);

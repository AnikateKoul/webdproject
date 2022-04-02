// To connect with your mongoDB database
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/",
  {
    dbName: "wlDatabase",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err ? console.log(err) : console.log("Connected to wlDatabase database")
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
    type: Number,
    required: true,
  },
  contactno: {
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
  },
  password2: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", UserSchema);
const User2 = mongoose.model("users2", UserSchema);
User.createIndexes();
User2.createIndexes();

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
  // entering http://localhost:5000

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
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already registered");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});
app.post("/login",async(req,res)=>{
  try{
    const user2= new User2(req.body);
    console.log(user2);
    const enteredEmail=user2.email2;
    const enteredPass=user2.password2;
    const query  = User.where({ email: `${enteredEmail}` });
    query.findOne(function (err, User) {
    if (err) console.log("fuck,man!");
    if (User) {
    console.log("yeah,man!");
    // let pass=query.findOne();
    // console.log(pass);
    if(enteredPass===(User.password)){console.log("working!!!!!!!!!");}
  }
  }
);
  }catch(e){
    resp.send("well,fuck!!!!!!");
  }
});

// const arr = User.find({email:"nikhilranjan1103@gmail.com"});
// console.log(arr);
app.listen(5000);

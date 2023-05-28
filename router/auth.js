const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();


const Authentication = require("../middleware/authentication");

require("../database/conn");
const userData = require("../database/models/userSchema");



//posting register.js data to server

router.post("/registers", (req, res) => {
  const {
    fullname,
    email,
    profession,
    dob,
    age,
    gender,
    fname,
    mobile,
    discription,
    fulladdress,

    password,
    confirmpassword,
  } = req.body;

  if (
    !fullname ||
    !email ||
    !profession ||
    !dob ||
    !age ||
    !gender ||
    !fname ||
    !mobile ||
    !discription ||
    !fulladdress ||
    !password ||
    !confirmpassword
  ) {
    return res.status(422).json({
      error: "please fill all the fields properly",
    });
  }

  userData
    .findOne({
      email: email,
    })
    .then((userPresent) => {
      if (userPresent) {
        return res.status(422).json({
          error: "user already Exits",
        });
      }

      const user = new userData({
        fullname,
        email,
        profession,
        dob,
        age,
        gender,
        fname,
        mobile,
        discription,
        fulladdress,

        password,
        confirmpassword,
      });

      user
        .save()
        .then(() => {
          res.status(201).json({
            error: "user successfully register",
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: " user not register",
          });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

//login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        msg: "please fill both fields",
      });
    }

    const userLogin = await userData.findOne({
      email: email,
    });
    

    //compare password

    if (userLogin!=null) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
 
    
      //jwt token is here
      const token = await userLogin.generateAuthToken();

      if (!isMatch) {
        res.status(400).json({
          err: "email not exists or user not exists",
        });
      } else {
        if (!isMatch) {
          res.status(400).json({
            err: "password not match",
          });
        }
        res.cookie('userToken', token, { maxAge: 900000, httpOnly: true }); 
        res.status(200).json({
          msg: "user login successfully",
        });
      }
    } else {
      res.status(400).json({
        err: "email not exists or user not exists",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//about us page
router.get("/about", Authentication, (req, res) => {
  res.send(req.rootUser);
});

//authentications
router.get("/authentications", Authentication, (req, res) => {
console.log(req.rootUser)
  res.send(req.rootUser);
});

//getting user Data
router.get("/getData", Authentication, (req, res) => {
  res.send(req.rootUser);
});



//sending user message
router.post("/message", Authentication, async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    if (!fullname || !email || !message) {
      return res.status(401).json({ err: "please fill all the fields" });
    }

    const userContact = await userData.findOne({ _id: req.userId });
    console.log(userContact);
    if (userContact) {
      const userMessage = await userContact.addMessage(
        fullname,
        email,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "user message successfully send" });
    }
  } catch (err) {
    console.log(err);
  }
});

//logout
router.get("/logouts", (req, res) => {
  res.clearCookie("userToken", { path: "/" });
  res.status(200).send("user successfully logout");
});

module.exports = router;

const UserModel = require("../model/UserModel");  //this will be used to fetch user data
require("dotenv").config(); //to access env variables
const jwt = require("jsonwebtoken"); //to verify jwt token

module.exports.userVerification = async (req, res) => { //controller function
  try {
    const token = req.cookies.token;//get token from cookies    

    if (!token) {//if token not found in cookies
      return res.json({ status: false });//respond with status false
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {//verify token
      if (err) {
        return res.json({ status: false });//if verification fails, respond with status false
      } else {
        const user = await UserModel.findById(data.id);//fetch user from database using id from token payload

        if (user) {
          return res.json({ status: true, user: user.username });//if user found, respond with status true and username
        } else {
          return res.json({ status: false });
        }
      }
    });
  } catch (error) {
    console.error("Verification error:", error.message);
    return res.json({ status: false });
  }
};

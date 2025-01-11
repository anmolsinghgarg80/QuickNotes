const { signupSchema, loginSchema} = require('../middlewares/validate');
const {doHash, doHashValidation } = require('../utils/hashing')
const User = require("../models/usersModel");
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
  const {fullName, email, password} = req.body;

  try{
    const {error, value} = signupSchema.validate({fullName,email,password});

    if(error){
      return res
      .status(401)
      .json({success: false, message: error.details[0].message});
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
        return res
        .status(401)
        .json({success: false, message: "User already exists!"});
    }
    const hashedPassword = await doHash(password, 12);

    const user = new User({
        fullName,
        email,
        password: hashedPassword,
    });
    const result = await user.save();

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET,{
      expiresIn:"36000m",
    });

    res.cookie('Authorization', 'Bearer ' + accessToken,
      { expires: new Date(Date.now() + 8 * 3600000) }
    )
    .json({
      success: true,
      message: 'logged in successfully',
    });
    
} catch(error){
    console.log(error);
  }
};

exports.login = async (req, res) => {
  const {email, password} = req.body;

  try{

    const {error, value} = loginSchema.validate({email, password});

  if(error){
    return res
    .status(401)
    .json({success: false, message: error.details[0].message});
  }

  const user = await User.findOne({email});
        
  if(!user){
      return res
      .status(401)
      .json({ success: false, message: 'User does not exists'});
  }
  const result = await doHashValidation(password, user.password);
  if(!result){
      return res
      .status(401)
      .json({success: false, message: 'Invalid Credentials'});
  }
  // using jwt for authentication
  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '8h',
      }
  );

  res.cookie('Authorization', 'Bearer ' + token, { expires: new Date(Date.now() + 
      8 * 3600000 ),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
  })
  .json({
      success: true,
      token,
      message: 'logged in successfully',
  });

  }catch(error){
    console.log(error);
  };
};

exports.logout = async (req, res) => {
  res.clearCookie('Authorization')
  .status(200)
  .json({success: true, message: 'logged out succesfully'});
};

exports.getUser = async (req, res) => {
  const {user} = req.user;

  const isUser = await User.findOne({_id: user._id});

  if(!isUser) {
    return res.sendStatus(401);
  }

  return res.json({
    user: isUser,
    message: "",
  });
};
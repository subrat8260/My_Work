const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const UserToken = require("../utils/userToken");
exports.HomePage = (req, res) => {
  res.send("this is home page");
};
//****LogIn Page***//
exports.LoginPage = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Email is not found !" });
  }
  const dcryptPassword = await bcrypt.compare(password, user.password);
  if (!dcryptPassword) {
    return res.status(401).json({ message: "Password is not Authenticated" });
  }
  //Create a Access Token and Refresh Token
  const AccessToken = UserToken.userAccessToken(user._id);
  const RefreshToken = UserToken.userRefreshToken(user._id);
  console.log(`AccessToken : ${AccessToken}, RefreshToken : ${RefreshToken}`);
  //store the AccessToken and RefreshToken in the cookie
  res.cookie("AccessToken", AccessToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 15,
  });
  res.cookie("RefreshToken", RefreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
  res.send("User Login Successfully !");
};

//***SingUP Page***//
exports.SignupPage = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res
      .status(401)
      .json({ message: "Invalid password & confirmPassword !" });
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.status(401).json({
      message: "Please Use the Unique Email, Already this Email is in used !",
    });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password: hashPassword,
  });
  newUser.save().then(() => res.send("New User Created Successfully !"));
};

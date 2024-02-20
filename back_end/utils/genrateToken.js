import jwt from "jsonwebtoken";
const genrateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // milisecond
    httpOnly: true, //prevent xss attack (cross site scripting attack)
    sameSite: "strict", //csrf attack cross site request forigry
    secure: process.env.NODE_ENV !== "development",
  });
};

export default genrateTokenAndSetCookie;

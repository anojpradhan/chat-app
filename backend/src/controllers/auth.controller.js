import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must have at least 6 characters" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "invalid email format" });
    }

    const userWithSameEmail = await User.findOne({ email });
    if (userWithSameEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    const newUser = User.create({ fullName, email, password: hashedPwd });

    if (newUser) {
      // suru ma user save garney ani matra token cookie banuney persistence ko lagi
      const savedUser = (await newUser).save();
      generateToken((await savedUser)._id, res);
      res.status(201).json({
        _id: (await newUser).id,
        fullName: (await newUser).fullName,
        email: (await newUser).email,
        profilePic: (await newUser).profilePic,
      });
    } else {
      res.status(400).json({ message: "Data is invalid" });
    }
  } catch (error) {
    console.log("error registering ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullName: {
    first: {
      type: String,
      required: true,
      minlength: [2, "First name must be at least 2 characters long"],
    },
    last: {
      type: String,
      required: true,
      minlength: [2, "Last name must be at least 2 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
    select: false,
  },
  socketId: {
    type: String,
    default: null,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.generateAuthToken = function () {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret || jwtSecret.length < 16) {
    throw new Error(
      "JWT_SECRET is missing or too short. Please set a secure JWT_SECRET in your environment variables."
    );
  }

  const token = jwt.sign({ _id: this._id }, jwtSecret, {
    expiresIn: "24h",
  });

  return token;
};

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;

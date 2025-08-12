import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MIN_JWT_SECRET_LENGTH = 16;

const captainSchema = new mongoose.Schema({
  fullName: {
    first: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters long"],
    },
    last: {
      type: String,
      required: true,
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return EMAIL_REGEX.test(v);
      },
      message: "Please enter a valid email address.",
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  socketId: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    type: {
      type: String,
      required: true,
      enum: ["car", "bike", "auto"],
    },
  },
  location: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
});

captainSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

captainSchema.methods.generateAuthToken = function () {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret || jwtSecret.length < MIN_JWT_SECRET_LENGTH) {
    throw new Error(
      `JWT_SECRET is missing or too short (minimum ${MIN_JWT_SECRET_LENGTH} characters). Please set a secure JWT_SECRET in your environment variables.`
    );
  }

  const token = jwt.sign({ _id: this._id }, jwtSecret, {
    expiresIn: "24h",
  });

  return token;
};

captainSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Captain = mongoose.model("Captain", captainSchema);

export default Captain;

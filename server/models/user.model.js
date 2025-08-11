import mongoose from "mongoose";

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
  },
  socketId: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;

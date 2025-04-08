const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
  },
  feedbackText: {
    type: String,
    required: [true, "Feedback text is required"]
  }
}, { timestamps: true }); // <-- Correct property name

module.exports = mongoose.model("Feedback", feedbackSchema);

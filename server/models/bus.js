import mongoose from "mongoose";

const TimetableSchema = new mongoose.Schema({
  time: String,
  numberOfPeopleSeated: {
    type: Number,
    default: 0
  }
});

const BusSchema = new mongoose.Schema({
  busNumber: String,
  days: String, // 'Mon-Fri' or 'Sat-Sun'S
  timetable: [TimetableSchema] // Array of timetable entries
});

export const Bus = mongoose.model("Bus", BusSchema)

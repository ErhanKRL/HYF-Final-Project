import mongoose from "mongoose";

const machineSchema = new mongoose.Schema({
  address: String,
  location: {
    lat: Number,
    lon: Number,
  },
  status: Number,
  status_update_time: Date,
  history: [
    {
      status: Number,
      status_update_time: Date,
    },
  ],
  reviews: [],
  image: String,
  score: Number,
});

const Machine = mongoose.model("Machine", machineSchema);

export default Machine;

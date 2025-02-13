import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  comment: String,
  stars: Number,
  machine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Machine'
  },
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: String
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;

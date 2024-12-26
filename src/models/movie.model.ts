import mongoose, { Schema, Document, Types } from 'mongoose';

export default interface IMovie extends Document {
  userId: Types.ObjectId;
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}

const movieSchema: Schema = new Schema<IMovie>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    streamingLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Movie = mongoose.model<IMovie>('Movie', movieSchema);
export { Movie };

import mongoose, { Schema, Document } from 'mongoose';

export interface ICareer extends Document {
  name: string;
  email: string;
  skills: string;
  experienceYears: number;
  experienceMonths: number;
  cvFileName: string;
  cvPath: string;
  createdAt: Date;
  isRead: boolean;
}

const CareerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  skills: {
    type: String,
    required: true,
    trim: true
  },
  experienceYears: {
    type: Number,
    required: true,
    min: 0
  },
  experienceMonths: {
    type: Number,
    required: true,
    min: 0,
    max: 11
  },
  cvFileName: {
    type: String,
    required: true
  },
  cvPath: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isRead: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model<ICareer>('Career', CareerSchema);

import mongoose, { Schema, Document } from 'mongoose';

export interface ICarousel extends Document {
  title: string;
  description?: string;
  image: string;
  link?: string;
  active: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const CarouselSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  link: { type: String },
  active: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, {
  timestamps: true,
});

export default mongoose.models.Carousel || mongoose.model<ICarousel>('Carousel', CarouselSchema);
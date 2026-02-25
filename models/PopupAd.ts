import mongoose, { Schema, Document } from 'mongoose';

export interface IPopupAd extends Document {
  title: string;
  content?: string;
  image?: string;
  link?: string;
  active: boolean;
  showOnce: boolean; // show only once per user
  createdAt: Date;
  updatedAt: Date;
}

const PopupAdSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  image: { type: String },
  link: { type: String },
  active: { type: Boolean, default: true },
  showOnce: { type: Boolean, default: false },
}, {
  timestamps: true,
});

export default mongoose.models.PopupAd || mongoose.model<IPopupAd>('PopupAd', PopupAdSchema);
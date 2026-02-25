import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description?: string;
  image?: string;
  parent?: mongoose.Types.ObjectId; // for subcategories
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  parent: { type: Schema.Types.ObjectId, ref: 'Category' },
}, {
  timestamps: true,
});

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  stock: number;
  category: mongoose.Types.ObjectId;
  images: string[];
  type: 'physical' | 'digital' | 'service';
  isFlashSale: boolean;
  flashSaleEnd?: Date;
  recommended: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  stock: { type: Number, required: true, default: 0 },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [{ type: String }],
  type: { type: String, enum: ['physical', 'digital', 'service'], default: 'physical' },
  isFlashSale: { type: Boolean, default: false },
  flashSaleEnd: { type: Date },
  recommended: { type: Boolean, default: false },
}, {
  timestamps: true,
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
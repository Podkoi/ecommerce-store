import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  items: {
    product: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  type: 'purchase' | 'service' | 'topup';
  paymentMethod?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  type: { type: String, enum: ['purchase', 'service', 'topup'], default: 'purchase' },
  paymentMethod: { type: String },
  address: { type: String },
}, {
  timestamps: true,
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
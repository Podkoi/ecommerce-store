import mongoose, { Schema, Document } from 'mongoose';

export interface ITopUp extends Document {
  user: mongoose.Types.ObjectId;
  amount: number;
  method: 'truewallet' | 'promptpay' | 'custom';
  code?: string; // for custom codes
  qr?: string; // qr code data
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

const TopUpSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  method: { type: String, enum: ['truewallet', 'promptpay', 'custom'], required: true },
  code: { type: String },
  qr: { type: String },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
}, {
  timestamps: true,
});

export default mongoose.models.TopUp || mongoose.model<ITopUp>('TopUp', TopUpSchema);
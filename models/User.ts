import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string; // optional for OAuth
  image?: string;
  role: 'user' | 'admin';
  rank: {
    name: string;
    color: string;
  };
  discordId?: string;
  balance: number;
  history: mongoose.Types.ObjectId[]; // refs to Order or TopUp
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  rank: {
    name: { type: String, default: 'Bronze' },
    color: { type: String, default: '#CD7F32' },
  },
  discordId: { type: String },
  balance: { type: Number, default: 0 },
  history: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
import mongoose, { Schema, Document } from 'mongoose';

export interface IStoreSettings extends Document {
  name: string;
  description?: string;
  logo?: string;
  theme: {
    primaryColor: string;
    darkMode: boolean;
  };
  ranks: {
    name: string;
    color: string;
    minBalance: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const StoreSettingsSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  logo: { type: String },
  theme: {
    primaryColor: { type: String, default: '#3B82F6' },
    darkMode: { type: Boolean, default: false },
  },
  ranks: [{
    name: { type: String, required: true },
    color: { type: String, required: true },
    minBalance: { type: Number, default: 0 },
  }],
}, {
  timestamps: true,
});

export default mongoose.models.StoreSettings || mongoose.model<IStoreSettings>('StoreSettings', StoreSettingsSchema);
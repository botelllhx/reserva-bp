import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    nome: string;
    email: string;
    tipo: 'Cliente' | 'Corretor';
}

const userSchema = new Schema<IUser>({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    tipo: { type: String, enum: ['Cliente', 'Corretor'], required: true },
});

export default mongoose.model<IUser>('User', userSchema);

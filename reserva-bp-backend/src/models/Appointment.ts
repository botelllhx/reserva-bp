import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
    clienteId: mongoose.Types.ObjectId;
    corretorId: mongoose.Types.ObjectId;
    data: Date;
    duracao: number;
}

const appointmentSchema = new Schema<IAppointment>({
    clienteId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    corretorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    data: { type: Date, required: true },
    duracao: { type: Number, min: 30, max: 120, required: true },
});

export default mongoose.model<IAppointment>('Appointment', appointmentSchema);

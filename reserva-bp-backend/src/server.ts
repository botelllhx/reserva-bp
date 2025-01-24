import fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';
import appointmentRoutes from './routes/appointmentRoutes';

dotenv.config();
connectDB();

const app = fastify({ logger: true });

app.register(cors, {
    origin: true, // Permitir todas as origens.
});

app.register(userRoutes, { prefix: '/api/users' });
app.register(appointmentRoutes, { prefix: '/api/appointments' });

const start = async (): Promise<void> => {
    try {
        await app.listen({ port: parseInt(process.env.PORT || '5000', 10), host: '0.0.0.0' });
        console.log(`Servidor rodando na porta ${process.env.PORT || 5000}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();

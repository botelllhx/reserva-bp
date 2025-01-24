import { FastifyInstance } from 'fastify';
import * as appointmentController from '../controllers/appointmentController';

const appointmentRoutes = async (fastify: FastifyInstance): Promise<void> => {
    fastify.post('/', appointmentController.criarAgendamento);
    fastify.get('/', appointmentController.listarAgendamentos);
    fastify.get('/:id', appointmentController.obterAgendamento);
    fastify.delete('/:id', appointmentController.removerAgendamento);
};

export default appointmentRoutes;

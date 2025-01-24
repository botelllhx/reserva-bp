import { FastifyReply, FastifyRequest } from 'fastify';
import Appointment, { IAppointment } from '../models/Appointment';

// Criar um novo agendamento
export const criarAgendamento = async (req: FastifyRequest<{ Body: IAppointment }>, reply: FastifyReply) => {
    try {
        const { clienteId, corretorId, data, duracao } = req.body;

        // Verificar se os IDs estão presentes
        if (!clienteId || !corretorId) {
            return reply.status(400).send({ error: 'Cliente e Corretor são obrigatórios' });
        }

        // Verificar conflito de horários
        const conflito = await Appointment.findOne({
            corretorId,
            data: {
                $gte: new Date(data),
                $lt: new Date(new Date(data).getTime() + duracao * 60000)
            },
        });

        if (conflito) {
            return reply.status(400).send({ error: 'Corretor ocupado neste horário' });
        }

        // Criar agendamento
        const agendamento = new Appointment(req.body);
        await agendamento.save();
        reply.status(201).send(agendamento);
    } catch (error) {
        console.error('Erro ao criar agendamento:', error);
        reply.status(500).send({ error: 'Erro interno ao criar agendamento' });
    }
};

// Listar todos os agendamentos
export const listarAgendamentos = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
        const agendamentos = await Appointment.find().populate('clienteId').populate('corretorId');
        reply.send(agendamentos);
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao listar agendamentos' });
    }
};

// Obter um agendamento por ID
export const obterAgendamento = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    try {
        const agendamento = await Appointment.findById(req.params.id).populate('clienteId').populate('corretorId');
        if (!agendamento) {
            return reply.status(404).send({ error: 'Agendamento não encontrado' });
        }
        reply.send(agendamento);
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao obter agendamento' });
    }
};

// Remover um agendamento
export const removerAgendamento = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    try {
        const agendamento = await Appointment.findByIdAndDelete(req.params.id);
        if (!agendamento) {
            return reply.status(404).send({ error: 'Agendamento não encontrado' });
        }
        reply.send({ message: 'Agendamento removido com sucesso' });
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao remover agendamento' });
    }
};

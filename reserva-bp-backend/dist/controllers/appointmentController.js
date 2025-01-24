"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removerAgendamento = exports.obterAgendamento = exports.listarAgendamentos = exports.criarAgendamento = void 0;
const Appointment_1 = __importDefault(require("../models/Appointment"));
// Criar um novo agendamento
const criarAgendamento = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clienteId, corretorId, data, duracao } = req.body;
        // Verificar se os IDs estão presentes
        if (!clienteId || !corretorId) {
            return reply.status(400).send({ error: 'Cliente e Corretor são obrigatórios' });
        }
        // Verificar conflito de horários
        const conflito = yield Appointment_1.default.findOne({
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
        const agendamento = new Appointment_1.default(req.body);
        yield agendamento.save();
        reply.status(201).send(agendamento);
    }
    catch (error) {
        console.error('Erro ao criar agendamento:', error);
        reply.status(500).send({ error: 'Erro interno ao criar agendamento' });
    }
});
exports.criarAgendamento = criarAgendamento;
// Listar todos os agendamentos
const listarAgendamentos = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agendamentos = yield Appointment_1.default.find().populate('clienteId').populate('corretorId');
        reply.send(agendamentos);
    }
    catch (error) {
        reply.status(500).send({ error: 'Erro ao listar agendamentos' });
    }
});
exports.listarAgendamentos = listarAgendamentos;
// Obter um agendamento por ID
const obterAgendamento = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agendamento = yield Appointment_1.default.findById(req.params.id).populate('clienteId').populate('corretorId');
        if (!agendamento) {
            return reply.status(404).send({ error: 'Agendamento não encontrado' });
        }
        reply.send(agendamento);
    }
    catch (error) {
        reply.status(500).send({ error: 'Erro ao obter agendamento' });
    }
});
exports.obterAgendamento = obterAgendamento;
// Remover um agendamento
const removerAgendamento = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agendamento = yield Appointment_1.default.findByIdAndDelete(req.params.id);
        if (!agendamento) {
            return reply.status(404).send({ error: 'Agendamento não encontrado' });
        }
        reply.send({ message: 'Agendamento removido com sucesso' });
    }
    catch (error) {
        reply.status(500).send({ error: 'Erro ao remover agendamento' });
    }
});
exports.removerAgendamento = removerAgendamento;

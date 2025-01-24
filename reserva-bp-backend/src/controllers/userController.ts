import { FastifyReply, FastifyRequest } from 'fastify';
import User, { IUser } from '../models/User';

// Criar um novo usuário
export const criarUsuario = async (req: FastifyRequest<{ Body: IUser }>, reply: FastifyReply) => {
    try {
        const usuario = new User(req.body);
        await usuario.save();
        reply.status(201).send(usuario);
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao criar usuário' });
    }
};

// Listar todos os usuários
export const listarUsuarios = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
        const usuarios = await User.find();
        reply.send(usuarios);
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao listar usuários' });
    }
};

// Obter um usuário por ID
export const obterUsuario = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    try {
        const usuario = await User.findById(req.params.id);
        if (!usuario) {
            return reply.status(404).send({ error: 'Usuário não encontrado' });
        }
        reply.send(usuario);
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao obter usuário' });
    }
};

// Atualizar um usuário
export const atualizarUsuario = async (req: FastifyRequest<{ Params: { id: string }; Body: IUser }>, reply: FastifyReply) => {
    try {
        const usuario = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) {
            return reply.status(404).send({ error: 'Usuário não encontrado' });
        }
        reply.send(usuario);
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao atualizar usuário' });
    }
};

// Remover um usuário
export const removerUsuario = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    try {
        const usuario = await User.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return reply.status(404).send({ error: 'Usuário não encontrado' });
        }
        reply.send({ message: 'Usuário removido com sucesso' });
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao remover usuário' });
    }
};

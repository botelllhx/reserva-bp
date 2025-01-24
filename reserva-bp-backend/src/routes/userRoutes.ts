import { FastifyInstance } from 'fastify';
import * as userController from '../controllers/userController';

const userRoutes = async (fastify: FastifyInstance): Promise<void> => {
    fastify.post('/', userController.criarUsuario);
    fastify.get('/', userController.listarUsuarios);
    fastify.get('/:id', userController.obterUsuario);
    fastify.put('/:id', userController.atualizarUsuario);
    fastify.delete('/:id', userController.removerUsuario);
};

export default userRoutes;

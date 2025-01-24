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
exports.removerUsuario = exports.atualizarUsuario = exports.obterUsuario = exports.listarUsuarios = exports.criarUsuario = void 0;
const User_1 = __importDefault(require("../models/User"));
// Criar um novo usuário
const criarUsuario = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = new User_1.default(req.body);
        yield usuario.save();
        reply.status(201).send(usuario);
    }
    catch (error) {
        reply.status(500).send({ error: 'Erro ao criar usuário' });
    }
});
exports.criarUsuario = criarUsuario;
// Listar todos os usuários
const listarUsuarios = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield User_1.default.find();
        reply.send(usuarios);
    }
    catch (error) {
        reply.status(500).send({ error: 'Erro ao listar usuários' });
    }
});
exports.listarUsuarios = listarUsuarios;
// Obter um usuário por ID
const obterUsuario = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield User_1.default.findById(req.params.id);
        if (!usuario) {
            return reply.status(404).send({ error: 'Usuário não encontrado' });
        }
        reply.send(usuario);
    }
    catch (error) {
        reply.status(500).send({ error: 'Erro ao obter usuário' });
    }
});
exports.obterUsuario = obterUsuario;
// Atualizar um usuário
const atualizarUsuario = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield User_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) {
            return reply.status(404).send({ error: 'Usuário não encontrado' });
        }
        reply.send(usuario);
    }
    catch (error) {
        reply.status(500).send({ error: 'Erro ao atualizar usuário' });
    }
});
exports.atualizarUsuario = atualizarUsuario;
// Remover um usuário
const removerUsuario = (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield User_1.default.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return reply.status(404).send({ error: 'Usuário não encontrado' });
        }
        reply.send({ message: 'Usuário removido com sucesso' });
    }
    catch (error) {
        reply.status(500).send({ error: 'Erro ao remover usuário' });
    }
});
exports.removerUsuario = removerUsuario;

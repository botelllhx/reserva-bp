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
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
dotenv_1.default.config();
(0, database_1.default)();
const app = (0, fastify_1.default)({ logger: true });
// Registrar o novo plugin CORS
app.register(cors_1.default, {
    origin: true, // Permitir todas as origens. Ajuste conforme necessário.
});
app.register(userRoutes_1.default, { prefix: '/api/users' });
app.register(appointmentRoutes_1.default, { prefix: '/api/appointments' });
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app.listen({ port: parseInt(process.env.PORT || '5000', 10), host: '0.0.0.0' });
        console.log(`Servidor rodando na porta ${process.env.PORT || 5000}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
});
start();

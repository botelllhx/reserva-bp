import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Reutilizamos o CSS de Login

const Register: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipo, setTipo] = useState('Cliente'); // Cliente ou Corretor
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/users', { nome, email, tipo });
            alert('Usuário cadastrado com sucesso!');
            navigate('/');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Cadastro</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="Cliente">Cliente</option>
                    <option value="Corretor">Corretor</option>
                </select>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Register;

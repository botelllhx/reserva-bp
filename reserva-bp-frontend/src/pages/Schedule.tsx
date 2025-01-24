import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../services/api';
import '../styles/Schedule.css';

const Schedule: React.FC = () => {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState([]);
    const [corretores, setCorretores] = useState([]);
    const [clienteId, setClienteId] = useState('');
    const [corretorId, setCorretorId] = useState('');
    const [data, setData] = useState('');
    const [duracao, setDuracao] = useState(30);

    useEffect(() => {
        axios.get('/users')
            .then((response) => {
                const users = response.data;
                setClientes(users.filter((user: any) => user.tipo === 'Cliente'));
                setCorretores(users.filter((user: any) => user.tipo === 'Corretor'));
            })
            .catch((error) => console.error('Erro ao carregar usuários:', error));
    }, []);

    const handleSchedule = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const isoData = new Date(data).toISOString();
            await axios.post('/appointments', { clienteId, corretorId, data: isoData, duracao });
            toast.success('Agendamento criado com sucesso!');
            navigate('/dashboard');
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro ao criar agendamento. Tente novamente.');
            }
        }
    };


    return (
        <div className="schedule-container">
            <form onSubmit={handleSchedule} className="schedule-form">
                <h2>Criar Agendamento</h2>
                <select value={clienteId} onChange={(e) => setClienteId(e.target.value)} required>
                    <option value="">Selecione o Cliente</option>
                    {clientes.map((cliente: any) => (
                        <option key={cliente._id} value={cliente._id}>
                            {cliente.nome}
                        </option>
                    ))}
                </select>
                <select value={corretorId} onChange={(e) => setCorretorId(e.target.value)} required>
                    <option value="">Selecione o Corretor</option>
                    {corretores.map((corretor: any) => (
                        <option key={corretor._id} value={corretor._id}>
                            {corretor.nome}
                        </option>
                    ))}
                </select>
                <input className="datetime"
                    type="datetime-local"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                />
                <select value={duracao} onChange={(e) => setDuracao(Number(e.target.value))} required>
                    <option value={30}>30 minutos</option>
                    <option value={60}>1 hora</option>
                    <option value={90}>1 hora e 30 minutos</option>
                    <option value={120}>2 horas</option>
                </select>
                <button type="submit">Agendar</button>
                <button className="back-button" onClick={() => navigate('/dashboard')}>
                    Voltar ao Dashboard
                </button>
            </form>
        </div>
    );
};

export default Schedule;
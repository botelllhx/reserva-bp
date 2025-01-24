import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.error('Erro ao carregar usuários:', error));

        axios.get('/appointments')
            .then((response) => setAppointments(response.data))
            .catch((error) => console.error('Erro ao carregar agendamentos:', error));
    }, []);

    const handleLogout = () => {
        // Remover dados do usuário do localStorage ou outro método de autenticação
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Dashboard</h1>
                <div className="actions">
                {/* Link para a tela de agendamento */}
                <Link to="/schedule" className="schedule-link">Criar Agendamento</Link>
            </div>
            </div>
            <section>
                <h2>Usuários</h2>
                <ul>
                    {users.map((user: any) => (
                        <li key={user._id}>
                            {user.nome} - {user.email} ({user.tipo})
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Agendamentos</h2>
                <ul>
                    {appointments.map((appt: any) => (
                        <li key={appt._id}>
                            Cliente: {appt.clienteId.nome}, Corretor: {appt.corretorId.nome}, Data: {new Date(appt.data).toLocaleString()}, Duração: {appt.duracao} minutos
                        </li>
                    ))}
                </ul>
                
            </section>
            <button className="logout-button" onClick={handleLogout}>
                    Sair
            </button>
        </div>
    );
};

export default Dashboard;
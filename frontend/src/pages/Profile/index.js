import React, { useState, useEffect } from 'react';
// Importando componente Link do pacote react-router-dom para funcionar como SPA
import { Link, useHistory } from 'react-router-dom'; 
// Importando apenas os ícones que serão utilizados do pactoe react-icons
import { FiPower, FiTrash2  } from 'react-icons/fi';

// Importando o cliente HTTP na api
import api from '../../services/api';

// Importando os arquivos de CSS
import './styles.css';

// Importando os arquivos de imagem
import logoImg from '../../assets/logo.svg';

export default function Profile() {

    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ ongId ]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`/incidents/${id}`, {
                headers:{
                    Authorization: ongId
                }
            });
            // Atualizar o conjunto com os incidentes
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao excluir o caso. Tente novamente.');
        }
    }

    function handleLogout() {
        // Limpa os dados do navegadir
        localStorage.clear();

        // Redireciona o usuário para a página inicial
        history.push('/');
    }

    return (        

        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>

                <span>Bem-vinda, {ongName}!</span>

                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>

                <button onClick={() => handleLogout()}><FiPower size={18} color="#E02041"/> </button>

            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)}><FiTrash2 size={20} color="#A8A8B3" /></button>
                    </li> 
                ))}                
            </ul>


        </div>
        
     );
} 
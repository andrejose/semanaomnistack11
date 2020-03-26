import React, { useState } from 'react';
// Importando componente Link do pacote react-router-dom para funcionar como SPA
import { Link, useHistory } from 'react-router-dom'; 
// Importando apenas os ícones que serão utilizados do pactoe react-icons
import { FiLogIn  } from 'react-icons/fi';

// Importando o cliente HTTP na api
import api from '../../services/api';

// Importando os arquivos de CSS
import './styles.css';

// Importando os arquivos de imagem
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {

    const [id, setId] = useState(''); 

    const history = useHistory();

    async function handleLogin(e) {

        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            // Salvando os dados no armazenamento do navegador
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            // Redireciona o usuário para a página Profile
            history.push('/profile');

        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (        

        <div className="logon-container">
            
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        />
                    <button className="button">Entrar</button>
                    <Link to="/register" className="back-link"><FiLogIn size={16} color="#E02041" /> Não tenho cadastro</Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
        
     );
} 
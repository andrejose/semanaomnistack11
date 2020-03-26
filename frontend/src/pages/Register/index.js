import React, { useState } from 'react';
// Importando componente Link do pacote react-router-dom para funcionar como SPA
import { Link, useHistory } from 'react-router-dom'; 
// Importando apenas os ícones que serão utilizados do pactoe react-icons
import { FiArrowLeft  } from 'react-icons/fi';

// Importando o cliente HTTP na api
import api from '../../services/api';

// Importando os arquivos de CSS
import './styles.css';

// Importando os arquivos de imagem
import logoImg from '../../assets/logo.svg';

export default function Register () {
    // Acessar o histórico de navegação
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente!');
        }
    }

    return (        
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="back-link"><FiArrowLeft size={16} color="#E02041" /> Voltar para o logon</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={ e => setName(e.target.value) }
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value) }
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={ e => setCity(e.target.value) }
                        />
                        <input
                            placeholder="UF"
                            style={{ width:80 }}
                            value={uf}
                            onChange={ e => setUf(e.target.value) }
                        />
                    </div>
                    <button className="button">Cadastrar</button>

                </form>
            </div>
        </div>
     );
} 
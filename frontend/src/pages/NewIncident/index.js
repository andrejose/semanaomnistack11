import React, { useState }  from 'react';
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

export default function NewIncident() {
    // Acessar o histórico de navegação
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            const response = await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }
            });
            
            history.push('/profile');

        } catch (err) {
            alert('Erro no cadastro, tente novamente!');
        }
    }
    return (        

        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastrar novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link"><FiArrowLeft size={16} color="#E02041" /> Voltar para Home</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={ e => setTitle(e.target.value) }
                    />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={ e => setDescription(e.target.value) }
                    />
                    <input placeholder="Valor em reais"
                        value={value}
                        onChange={ e => setValue(e.target.value) }
                    />
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
        
     );
} 
import React, { useState } from 'react';
import './styles.css';
import api from '../services/api';

const Times = () => {

    const [nome, setNome] = useState('');
    const [jogador1, setJogador1] = useState('');
    const [jogador2, setJogador2] = useState('');

    const cadastrarTime = async (e) => {
        e.preventDefault();

        const data = {
            nome,
            jogador1,
            jogador2
        }

        try {
            const response = await api.post('time', data);
            setNome('');
            setJogador1('');
            setJogador2('');
            alert('Cadastro realizado.');
        } catch (err) {
            alert('Erro ao cadastrar.');
        }
    }

    return (
        <>
            <div id="content">
                <h1>Cadastrar time:</h1>
                <form onSubmit={cadastrarTime}>
                    <div>
                        <label>
                            Nome do time
                    </label><br />
                        <input
                            value={nome}
                            required
                            onChange={e => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>
                            Jogador 1
                    </label><br />
                        <input
                            value={jogador1}
                            required
                            onChange={e => setJogador1(e.target.value)} />
                    </div>
                    <div>
                        <label>
                            Jogador 2
                    </label><br />
                        <input
                            value={jogador2}
                            required
                            onChange={e => setJogador2(e.target.value)} />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </>
    );
}

export default Times;
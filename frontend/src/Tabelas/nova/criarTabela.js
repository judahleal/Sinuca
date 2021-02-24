import React, { useState } from 'react';
import './styles.css';
import api from '../../services/api';

const CriarTabelas = () => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [regra, setRegra] = useState('');
    const [pontuacao, setPontuacao] = useState('');

    const cadastrarTime = async (e) => {
        e.preventDefault();

        const data = {
            nome,
            descricao,
            regra,
            pontuacao
        }

        try {
            const response = await api.post('tabela', data);
            setNome('');
            setDescricao('');
            setRegra('');
            setPontuacao('');
            alert('Cadastro realizado.');
        } catch (err) {
            alert('Erro ao cadastrar.');
        }
    }

    return (
        <>
            <div id="content">
                <h1>Cadastrar tabela:</h1>
                <form onSubmit={cadastrarTime}>
                    <div>
                        <label>
                            Nome da tabela
                    </label>
                        <input
                            value={nome}
                            required
                            onChange={e => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>
                            Descrição
                    </label>
                        <input
                            value={descricao}
                            required
                            onChange={e => setDescricao(e.target.value)} />
                    </div>
                    <div>
                        <label>
                            Regra
                    </label>
                        <input
                            value={regra}
                            required
                            onChange={e => setRegra(e.target.value)} />
                    </div>
                    <div>
                        <label>
                            Pontuação
                    </label>
                        <input
                            value={pontuacao}
                            required
                            type="number"
                            onChange={e => setPontuacao(e.target.value)} />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </>
    );
}

export default CriarTabelas;
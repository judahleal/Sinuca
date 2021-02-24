import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../services/api';
import { Link } from 'react-router-dom';

const Tabelas = () => {

    const [tabela, setTabela] = useState([]);

    useEffect(() => {
        api.get('tabela').then(response => {
            setTabela(response.data);
        });
    }, []);

    return (
        <>
            <div id="content">
                <h1>Tabelas</h1>
                <Link to="/tabela/nova">Cadastrar tabela</Link>
                {tabela.length == 0 && <h4>Nenhuma tabela cadastrada.</h4>}
                {tabela.map(tab => (
                    <div className="tabela" key={tab.id}>
                        <Link  to={`/tabela/${tab.id}`} className="tabela-nome">{tab.nome}</Link>
                        <div className="tabela-descricao">{tab.descricao}</div>
                        <div className="tabela-regra">{tab.regra}</div>
                        <div className="tabela-pontuacao">{tab.pontuacao}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Tabelas;
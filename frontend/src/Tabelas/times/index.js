import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import { useParams } from 'react-router-dom'

const TabelasTimes = () => {

    const [times, setTimes] = useState([]);

    let id = useParams();

    useEffect(() => {
        api.get('tabelaTime', {
            params: {
                tabelas_id: id.id
            }
        }).then(response => {
            setTimes(response.data);
        });
    }, []);

    return (
        <>
            <div id="content">
                <h1>Tabelas</h1>
                {times.map(time => (
                    <div className="tabela" key={time.id}>
                        <div className="tabela-nome">{time.nome}</div>
                        <div>{time.jogador1}</div>
                        <div>{time.jogador2}</div>
                        <div>Pontuação: {time.pontuacao}</div>
                    </div>
                ))}
                {times.length == 0 && <h4>Nenhum time cadastrado nesta tabela.</h4>}
            </div>
        </>
    );
}

export default TabelasTimes;
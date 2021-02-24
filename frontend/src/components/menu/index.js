import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div id="menu">
            <div id="menu-content">
                <Link className="menu-link" to="/time">Times</Link>
                <Link className="menu-link" to="/tabela">Tabelas</Link>
            </div>
        </div>
    );
}

export default Menu;
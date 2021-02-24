import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Times from './Times';
import Tabelas from './Tabelas';
import CriarTabela from './Tabelas/nova/criarTabela';
import TabelaTime from './Tabelas/times';

const Routes = () => {
    return (
        <Switch>
            {/* <Route path="/" exact component={} /> */}
            <Route path="/time" component={Times} />
            <Route path="/tabela" exact component={Tabelas} />
            <Route path="/tabela/nova" component={CriarTabela} />
            <Route path="/tabela/:id" component={TabelaTime} />
        </Switch>
    );
}

export default Routes;
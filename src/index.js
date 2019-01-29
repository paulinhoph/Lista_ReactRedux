import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import  Entrar from './components/Entrar';
import  Listas from './components/Listas';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Entrar} />
                <Route Route path="/Lista"  component={Listas} />
            </Switch>
        </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

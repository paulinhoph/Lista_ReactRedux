import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Lista CpTech</h1>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

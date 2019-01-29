import React, { Component } from 'react';
import cptech from  '../Assets/cptech.jpg';
import '../App.css';
import { Link } from 'react-router-dom';



export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img className="imagensCp" src={cptech} />
        <Link className="link" to="/Lista" >Adicinar Lista</Link>
      </div>
    );
  }
} 
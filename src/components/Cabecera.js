import React from "react";
import '../stylesheet/cabecera.css';

function Cabecera() {
    return(
      <div className="contenedor-cabecera">
        <img src={require(`../imagenes/freecodecamp-logo.5486935b905c7949600c.png`)} alt="logo freecode" />
      </div>      
    );
}

export default Cabecera;
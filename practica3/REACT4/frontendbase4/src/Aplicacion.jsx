import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { createRoot } from 'react-dom/client';
 
class Application extends React.Component {
  render() {
    return (
    // Formulario
    <div>
    <form method="get" action="http://localhost:8080/Action">
    <input type="text" name="id" /><br />
    <input type="password" name="password" /><br />
    <input type="submit" />
    </form>                        
    </div>    
    );
  }
}
 
export default Application;

//CODIGO ACTUALIZADO PAREA LA NUEVA VERSION DE REACT
const rootElement = document.getElementById("contenedor");
const root = createRoot(rootElement);
root.render(<Application />);


// Importamos React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Creamos un componente sencillo que muestra un mensaje
function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

// Renderizamos el componente en el contenedor "root" del archivo HTML
ReactDOM.render(
  <Saludo nombre="Mundo" />,
  document.getElementById('root')
);

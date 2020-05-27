
/*  const element = document.createElement('h1');
 element.innerText ='Hola';
 const container = document.getElementById('app');
 container.appendChild(element);
 */
 import React from 'react';
 import ReactDOM from 'react-dom';
import Badgenew from './pages/Badgenew'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//const jsx =<h1>HEllo</h1>;


 // Enlaces------ const element =React.createElement('a', {href: 'https://google.com'}, 'ir a google');

// const name ='angie';
 //const sum = () => 3 + 3;
  // expresiones----------const jsx = <h1>Hola soy, {sum()}</h1>;



 //const element =React.createElement('h1', {}, 'holas, soy ${name}');


// const jsx = <h1>Hola soy, {sum()}</h1>;





//---------- es lo mismo que jsx
/* const jsx=(
<div>
  <h1>holas, soy iingeniero</h1>
  <p>ingeniero fronr</p>
</div>
);

const element = React.createElement(
  'div',
  {},
  React.createElement('h1',{}, 'hola soy mar'),
  React.createElement('p', {}, 'soy ing frontend')

); */


 //const container = document.getElementById('app');
 const container= document.getElementById('app');
 ReactDOM.render(<Badgenew 
 /*  firstName="LILI" 
  jobtittle="arq"
  twitter="maril" */
  />,
   container
   ); 
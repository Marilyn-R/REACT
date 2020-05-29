import React from 'react';
import logo from '../images/logo.svg';
import './styles/Navbar.css';
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                <div className="main-header">
  
                    <nav>
                        <ul>
                        <li>Inicio</li>
                        <li>Categorias</li>
                        <li>Colecciones</li>
                        <li>Iniciar Sesión</li>
                        <li>Crear cuenta</li>
                        <li>Buscar</li>
                        </ul>
                    </nav>
                    </div>
                <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo"src={logo} alt ="logo"/>
                    <span className="font-weight-bold">WEB</span>
                </a>
                </div>
                {/* <div className="Footer">
                    <p>homl</p>
                </div> */}
            </div>

            

   
            
        );
    }
}
export default Navbar;
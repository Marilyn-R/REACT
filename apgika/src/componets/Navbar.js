import React from 'react';
import logo from '../images/logo.svg';
import './styles/Navbar.css';
import{Link} from 'react-router-dom';
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
                <Link  className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo"src={logo} alt ="logo"/>
                    <span className="font-weight-bold">WEB</span>
                </Link>
                </div>
              
            </div>

            

   
            
        );
    }
}
export default Navbar;
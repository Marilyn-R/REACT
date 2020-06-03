import React from 'react';
import {Link } from 'react-router-dom';
class BadgeForm1 extends React.Component{
    //state = {};
    
   // handleChange = e => {
        //console.log({
          //name: e.target.name,
        //value: e.target.value,

        //this.setState({
           // [e.target.name]: e.target.value, 
        
   //  });
    //};

    handleClick = e => {
        console.log("Button was clicked");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form submit");
        console.log(this.state);
    };

    render(){
        return(
           <div> 
            <center><h2>Iniciar Sesión </h2>
            <h6>Ingresa alguno de los campos y tu contraseña</h6></center>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Nombre </label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>

                </div>
                <div className="form-group">
                    <label>Apellidos </label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>

                </div>

                <div className="form-group">
                    <label>Correo electronico  </label>
                    <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>

                </div>

                <div className="form-group">
                    <label>Nombre de Usuario</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>

                </div>

                <div className="form-group">
                    <label>Ingresa tu Contraseña</label>
                    <input onChange={this.props.onChange} className="form-control" type="password" name=""/>

                </div>
                
                <center> <button  onClick={this.handleClick} className="btn btn-primary">iniciar Sesión</button></center>
               
            </form>
            <center> <Link to= "/badges/new "className="registrarse" >No tienes cuenta, registrate</Link> </center>
           
        </div>
        );
    }
}

export default BadgeForm1;
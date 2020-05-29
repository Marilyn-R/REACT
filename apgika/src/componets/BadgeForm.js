import React from 'react';
class BadgeForm extends React.Component{
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
            <center><h2>Registrate</h2></center>
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
                    <label>Nueva Contraseña</label>
                    <input onChange={this.props.onChange} className="form-control" type="password" name=""/>

                </div>
                
                <center> <button  onClick={this.handleClick} className="btn btn-primary">Registrarme</button></center>
               
            </form>
            <center> <a className="registrarse" href="">Ya tienes cuenta</a> </center>
        </div>
        );
    }
}

export default BadgeForm;
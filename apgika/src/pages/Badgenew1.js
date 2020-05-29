import React from 'react';
import '../componets/styles/Badge.css';
import BadgeForm1 from '../componets/BadgeForm1';
import Navbar from '../componets/Navbar';
import Badge from '../componets/Badge';
class Badgenew1 extends React.Component{
    state={form: {
        firstName:'',
        lastName:'',
        email:'',
        twitter:'',
    }};

    handleChange = e => {
       // const nextForm = this.state.form
        //nextForm[e.target.name] = e.target.value

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value,
            },
        });
    };
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src="" alt=""/>    

                
                <div className="container">
                    <div className="row">
                    <div className="col-6">
                    <Badge 
                        firstName={this.state.form.firstName}
                        lastName= {this.state.form.lastName} 
                        twitter={this.state.form.twitter} 
                        email={this.state.form.email} 
                        jobtittle={this.state.form.email} />
                    </div>


                    <div className="col-6">
                        <BadgeForm1 onChange={this.handleChange}
                        formValues={this.state.form } />
                    </div>
                    </div>
                </div>
            </div>
         </div>
            
        );
    }
}
export default Badgenew1;
import React from 'react';
import '../componets/styles/Badge.css';
import BadgeForm from '../componets/BadgeForm';
import Navbar from '../componets/Navbar';
import Badge from '../componets/Badge';
class Badgenew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
               
               
                    <img className="img-fluid" src="" alt=""/>
                    <h2>Registrate</h2>

                
                <div className="container">
                    <div className="col-6">
                    <Badge firstName="maril" lastName="juarez" twitter="hsdfhsd" jobtittle="ingeni"/>
                    </div>


                    <div className="col-6">
                        <BadgeForm/>
                    </div>
                    
                </div>
            </div>
         </div>
            
        );
    }
}
export default Badgenew;
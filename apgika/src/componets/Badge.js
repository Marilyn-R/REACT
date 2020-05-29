import React from 'react';
import './styles/Badge.css';
import conflogo from '../images/logo.svg';
import conflog from '../images/im.svg';
class Badge extends React.Component{
    render(){
    
            //const firstName ='marily';


        return ( <div className="Badge">
            
                <div className="Badge__header" >
                    
                    
                    <img src={conflogo} alt="logo de la conferen"></img>
                    
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar"
                    src={conflog} alt="avatar"/>
                    <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <p>{this.props.jobtittle}</p>
                    <p>@{this.props.twitter}</p>
                </div>

                <div className="Badge__footer ">
                    #GIKA
                </div>
            </div>    
        );   
    }
}
export default Badge;
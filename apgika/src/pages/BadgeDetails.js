import React from 'react';
import {Link } from 'react-router-dom';
import './styles/BadgeDetails.css';
import conflogo from '../images/logo1.svg';
import Badge from '../componets/Badge';
function BadgeDetails(props){
    const badge =props.badge;
    return(
        <div>
                 <div className="BadgeDetails__hero">
                     <div className="container">
                         <div className="row">
                             <div className="col-6">
                                 <img src={conflogo} alt="Lodo conferencia"/>
                             </div>
                             <div className="col-6 BadgeDetails__hero--attendant-name">
                                 <h1>{badge.firstName} {badge.lastName}</h1>
                             </div>
                         </div>
                     </div>
                 </div>
            <div className="container">
                <div className="col"></div>
                <Badge fisrtName={badge.firstName} lastName={badge.lastName} email={badge.email} twitter={badge.twitter} jobtittle={badge.jobtittle}/>
                <div className="col">
                    <h2>Actions</h2>
                    <div>
                        <div><Link className="btn btn-primary"mb-4 to={'/badges/${badge.id/edit'}>
                            
                        Edit
                        </Link></div>

                        <div><button className="btn btn-danger">Edit</button></div>
                    </div>
                </div>
            </div>

             </div>
    );
}
export default BadgeDetails;
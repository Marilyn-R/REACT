import React from 'react';
import {Link } from 'react-router-dom';
import './styles/BadgeDetails.css';
import conflogo from '../images/logo1.svg';

import Badge from '../componets/Badge';
import DeleteBadgeModal from '../componets/DeleteBadgeModal';
function useIncreaseCount(max){
    const [count, setCount] = React.useState(0);
    if (count> max){
        setCount(0);
    }
    return[ count, setCount];
}
function BadgeDetails(props){
    const [count, setCount]  = React.useState (0);
    
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
                    <h2>Actiones</h2>
                    <div>
                        <div>
                            <button onClick={()=> {
                                setCount(count + 1);
                            }}className="btn btn-primary">

                                Increase Count: {count}
                            </button>
                            <Link className="btn btn-primary"mb-4 to={'/badges/${badge.id/edit'}>
                            
                        Edit
                        </Link>

                        <div><button onClick={props.onOpenModal}className="btn btn-danger">Borrar</button>
                        <DeleteBadgeModal 

                        isOpen={props.modalIsOpen}
                        onClose={props.onCloseModal}
                        onDeleteBadge={props.onDeleteBadge}
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

             </div>
    );
}
export default BadgeDetails;
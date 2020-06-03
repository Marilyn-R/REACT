import React, { Component } from 'react';
import conflog from '../images/im.svg';
import {Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
    render(){
        return(
            <div className="BadgesListItem">
                <Gravatar
                className="BadgesListItem__avatar"
                email={this.props.badge.email}
                />
                <div>
                    <strong>
                        {this.props.badge.firstName}{this.props.lastName}
                    </strong>
                    <br/>@{this.props.badge.twitter}
                    <br/>
                    {this.props.badge.jobtittle}
                </div>
            </div>
        );
    }
}

class BadgesList extends React.Component{
render(){
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No se encontraron personas</h3>
                    <Link className = "btn btn-primary" to= "/badges/new">
                        Agregar nueva persona

                    </Link>
                </div>
            );

        }
        return ( 
        <div className="BadgesList">
        <ul className="list-unstyled">
        {this.props.badges.map(badge => {
            return(
                
                <li key ={badge.id}>
                    <Link
                    className="text-reset text-decoration-none"
                    to= {'/badges/${badges.id}'}
                    >
                    <BadgesListItem badge={badge}/>
                    </Link>
                 </li>
            );
        })}
        </ul>
        </div>
    );
    }
}

export default BadgesList;
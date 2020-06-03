import React, { Component } from 'react';
import conflog from '../images/im.svg';
import {Link } from 'react-router-dom';
class BadgesList extends React.Component {
    render(){
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No badges found</h3>
                    <Link className = "btn btn-primary" to= "/badges/new">
                        Create new badge

                    </Link>
                </div>
            )

        }
        return ( 
        <div className="BadgesList">
        <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
            return(
                
                <li key ={badge.id}>
                    <BadgesList badge={badge}/>
                    </li>);
        })}
        </ul>
        </div>
                    
           

        
    );
    }
}

export default BadgesList;
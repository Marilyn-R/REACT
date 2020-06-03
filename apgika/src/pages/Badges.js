import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/stars.svg';

import BadgesList from '../componets/BadgesList';
import {Link } from 'react-router-dom';
import PageLoading from '../componets/PageLoading';
import PageError from '../componets/PageError';
class Badges extends React.Component{
  
           state={
               loading:true,
               error:null,
            data: undefined,
           
            
        };
    componentDidMount(){
        this.fetchData();
    }
  
    fetchData= () => {
        this.setState({loading: true, error: null });
    
    try {
        const data =[]; 
        this.setState({loading:false, data: data});
    } catch(error){
        this.setState({loading:false, error: error});
    }
};
    render(){

        if (this.state.loading === true){
            return <PageLoading />;
        }
        
        if (this.state.error){
            return <PageError error= { this.state.error}/>
        }
        return(

            <React.Fragment>
               <div className="BadgeNew__hero">
                <div className="BadgeNew__hero">
                <div className="BadgeNew">
                        <div className= "Badges__hero">
                            <div className="Badges__container">
                            {/* <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>  */}
                            </div>
                            
                        </div>
                    </div>
                </div>
                    <div className="Badges__container ">
                        <div className="Badges__buttons ">
                        <center> <Link to= "/badges/new "className="btn btn-primary" >New Badge</Link> </center>
                          
                        </div>
                        <div className="BadgesList">
                            <div className="Badges__container">
                                <BadgesList badges={this.state.data} />
                               
                            </div>
                        </div>

                    </div>
                    </div>
               </React.Fragment>
        );
    }
}
export default Badges;
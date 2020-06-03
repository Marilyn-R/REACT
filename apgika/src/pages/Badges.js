import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/stars.svg';

import BadgesList from '../componets/BadgesList';
import {Link } from 'react-router-dom';
import PageLoading from '../componets/PageLoading';
import PageError from '../componets/PageError';
import MiniLoader from '../componets/MiniLoader';
class Badges extends React.Component{
  
           state={
               loading:true,
               error:null,
            data: undefined,
           
            
        };
    componentDidMount(){
        this.fetchData();
        this.intervalId = setInterval (this.fetchData, 5000);
    }
  componentWillMount(){
      clearInterval(this.intervalId);
  }
    fetchData= async () => {
        this.setState({loading: true, error: null });
    
    try {
        const data =[]; 
        this.setState({loading:false, data: data});
    } catch(error){
        this.setState({loading:false, error: error});
    }
};
    render(){

        if (this.state.loading === true && !this.state.error){
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
                        <center> <Link to= "/badges/new "className="btn btn-primary" > Not Found</Link> </center>
                          
                        <BadgesList badges={this.state.data} />
                        {this.state.loading && <MiniLoader/> }

                        </div>

                    </div>
                    </div>
               </React.Fragment>
        );
    }
}
export default Badges;
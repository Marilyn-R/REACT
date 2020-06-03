import React from 'react';
import '../componets/styles/Badge.css';
import BadgeForm from '../componets/BadgeForm';
import PageLoading from '../componets/PageLoading'; 
import Badge from '../componets/Badge';
class BadgeEdit extends React.Component{
    state={
        loading: true,
        error:null,
        form: {
        firstName:'',
        lastName:'',
        email:'',
        twitter:'',
        jobtittle:'',
    }};

    componentDidMount(){
        this.fetchData()
    }
    fetchData = async e => {
        this.setState({loading:true, error: null })
        try{
            /* const data= await api.badges.update(this.props.match.params.badgeId, this.state.form) */
        
            /* this.setState({loading:false, form: data}); */
        } catch (error){
        this.setState({loading:false, error: error })
    }
};
    
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

    handleSubmit =async e =>{
        e.preventDefault();
        this.setState({loading: true, error: null });
            try{
               /*  await api.badges.update(this.props.match.params.badgeId, this.state.form); */
                this.setState({loading: false});

                this.props.history.push('./badges');
            } catch (error){
                this.setState({loading: false, error: error });

            }   
    }

    render(){
        if (this.state.loading){
            return <PageLoading/>

        }
        return(
            <React.Fragment>
               
                <div className="BadgeNew__hero">
               
               
                    <img className="img-fluid" src="" alt=""/>    

                
                <div className="container">
                    <div className="row">
                    <div className="col-6">
                    <h2>Registrate</h2>
                    <Badge 
                        firstName={this.state.form.firstName || 'Tu nombre'}
                        lastName= {this.state.form.lastName || 'Tu apellido '} 
                        twitter={this.state.form.twitter || 'Tu nombre de usuario'} 
                        email={this.state.form.email || 'Tu email'} 
                        jobtittle={this.state.form.email || 'Tu email'} 
                        avatarUrl="https://www.gravatar.com/"/>

                    </div>


                    <div className="col-6">
                        <BadgeForm 
                        onChange={this.handleChange}
                        onSubmit= {this.handleSubmit}
                        formValues={this.state.form } 
                        error={this.state.error}/>
                    </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
            
        );
    }
}
export default BadgeEdit;
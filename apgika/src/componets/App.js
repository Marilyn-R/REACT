import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Badgenew from '../pages/Badgenew';
/* import Badgenew1 from '../pages/Badgenew1'; */
import Layout from './Layout';
import Badges from '../pages/Badges';
import BadgesEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import Home from '../pages/Home';

function App(){
    return (
        <BrowserRouter>
        <Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges}/>
        <Route exact path="/badges/new" component={Badgenew}/>
        <Route exact path="/badges/badgeId/edit" component={BadgeEdit}/>
        <Route exact path="/badges/badgeId/" component={BadgeDetails}/>
        <Route component={NotFound} /> 
       
        </Switch>
        </Layout>
        </BrowserRouter>
    );
}
export default App;
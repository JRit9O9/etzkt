import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginView from 'src/views/auth/LoginView';
import DashboardView from 'src/views/reports/DashboardView';

const Route1 = () => {
        return(
            <BrowserRouter>
            <div>
             <Switch>
             <Route path="/"  component= {LoginView} />
             {/* <Route path="/app" component= {DashboardView} /> */}


             </Switch>
            </div>
            </BrowserRouter>
        )     
}


export default Route1;
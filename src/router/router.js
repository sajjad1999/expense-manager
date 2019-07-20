import React from 'react';
import {BrowserRouter, Route, Switch,} from 'react-router-dom'
import DashBoard from '../components/Dashboard'
import CreateExpense from '../components/CreateExpense'
import EditExpense from '../components/EditExpense'
import NotFound from '../components/NotFound'
import Header from '../components/Header'
import ExpenseNumber from '../components/ExpenseNumber'
import TotalCost from '../components/TotalCost';



const Router = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <TotalCost/>
            <Switch>
                <Route path="/" component={DashBoard} exact={true}/>
                <Route path="/createExpense" component={CreateExpense}/>
                <Route path="/EditExpense" component={EditExpense} exact={true}/>
                <Route path="/EditExpense/:id" component={ExpenseNumber} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router
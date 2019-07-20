import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <div className="header">
        <h1 className="header-title">EXPENSE MANAGER</h1>
        <NavLink to="/" activeStyle={{color: 'rgb(205, 219, 231)',fontWeight: 'bold'}} className="links" exact={true}>DashBoard</NavLink>
        <NavLink to="/CreateExpense" activeStyle={{color: 'rgb(205, 219, 231)',fontWeight: 'bold'}} className="links">Create Expense</NavLink>
    </div>
);

export default Header
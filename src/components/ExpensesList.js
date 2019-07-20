import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import {getVisibleExpenses} from '../selector/expenses'
import ExpenseListFilter from './ExpenseListFilter';

 const ExpensesList = (props) => (
    <div className="main-container">
        <ExpenseListFilter/>
        {props.expenses.map(arg => <ExpenseListItem key={arg.id} {...arg}/>)}
    </div>
)


const mapStateToProps = (state) => {
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesList)
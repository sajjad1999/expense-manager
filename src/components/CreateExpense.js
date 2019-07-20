import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux'
import { addExpense } from '../actions/expenses';

const CreateExpense = (props) => (
    <div>
        <h3 className="create-title">Add Expense</h3>
        <ExpenseForm onFormSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }} />
    </div>
);

export default connect()(CreateExpense)
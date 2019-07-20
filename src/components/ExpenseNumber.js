import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import MaterialIcon, {colorPalette} from 'material-icons-react'

const ExpenseNumber = (props) => {
    return(
        <div>
            <h3 className="create-title">
                <MaterialIcon icon="build" size={25} color="rgb(29, 59, 114)"/>
                Edit Expense
            </h3>
            <ExpenseForm
            expense={props.expense}
            onFormSubmit={(expense) => {
                console.log(expense)
                props.dispatch(editExpense(props.expense.id,expense))
                props.history.push('/')
            }}
            />
            <button
                className="remove-button"
                onClick={() => {
                    props.dispatch(removeExpense({id: props.expense.id}))
                    props.history.push('/')
                }}
            >
                <MaterialIcon icon="delete" size={15} color="rgb(29, 59, 114)"/>
                remove
            </button>
        </div>
    )}

const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ExpenseNumber)
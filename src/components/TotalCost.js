import React from 'react'
import {connect} from 'react-redux'
import {getVisibleExpenses} from '../selector/expenses'

const TotalCost =  (props) => {
    return(
        <div className="total-div">
            <div>
            <p>TOTAL</p>
            <p>EXPENSE</p>
            <p>IS</p>
            </div>
            <div>{props.expenses.reduce((a,b) => a + b.amount ,0)}$</div>
        </div>
    )
}

const mapStateToProps = (state,props) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(TotalCost)

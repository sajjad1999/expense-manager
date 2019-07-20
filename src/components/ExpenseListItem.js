import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import MaterialIcon, {colorPalette} from 'material-icons-react'

const ExpenseListItem = ({description, id, amount, createdAt}) => (
    <div className="expense-row">
        <Link to={`/editExpense/${id}`} style={{textDecoration: 'none'}}>
            <h3 className="description">{description}</h3>
        </Link>
        <p className="row-item"><MaterialIcon icon="euro_symbol" size={16}/>{amount}$</p>
        <p className="row-item"><MaterialIcon icon="schedule" size={16}/>{moment(createdAt).format('MMM Do YYYY')}</p>
        
    </div>
)

export default ExpenseListItem
import uuid from 'uuid'
import moment from 'moment'

//ADD EXPENSE

export const addExpense = ({description = '', note = '', amount = 0, createdAt = moment()} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE EXPENSE

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT EXPENSE

export const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
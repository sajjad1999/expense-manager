const defaultExpenses = []
export const expensesReducer = (state = defaultExpenses, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(arg => arg.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {...expense, ...action.updates}
                }else{
                    return expense
                }
            })
        default:
            return state
    }
}
import moment from 'moment'

const defaultFilters = {
    text: '',
    sortBy: 'date',
    startDate: 0,
    endDate: moment().endOf('month')
}

export const filtersReducer = (state = defaultFilters, action) => {
    switch (action.type) {
        case 'ADD_TEXT':
            return {...state, text: action.text}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate}
        default: 
            return state
    }
}
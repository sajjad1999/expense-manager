import React from 'react'
import {connect} from 'react-redux'
import {addText, sortByDate, sortByAmount, setEndDate, setStartDate} from '../actions/filter'
import {DateRangePicker} from 'react-dates'
import MaterialIcon, {colorPalette} from 'material-icons-react'

class ExpenseListFilter extends React.Component{
    state = {
        calenderFocused: null,
    }
    onFocusChange = calenderFocused => {
        this.setState(() => ({calenderFocused}))
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    render() {
        return(
        <div className="filter-div">
            <input
            type="text" 
            placeholder='search..'
            className="search-input"
            value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(addText(e.target.value))
            }} />
            <select
            className="filter-select"
            value={this.props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value === 'date') {
                    this.props.dispatch(sortByDate())
                }else{
                    this.props.dispatch(sortByAmount())
                }
            }}
            >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
        className="date-picker"
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        focusedInput={this.state.calenderFocused}
        onFocusChange={this.onFocusChange}
        onDatesChange={this.onDatesChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
        />
    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)
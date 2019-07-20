import React ,{Component} from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import MaterialIcon, {colorPalette} from 'material-icons-react'

export default class ExpenseForm extends Component{
    constructor(props) {
        super()
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }
    onDesctiptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!isNaN(amount)) {
            this.setState(() => ({amount}))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}))
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused: focused}))
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'please check your inputs'}))
        }else{
            this.setState(() => ({error: ''}))
            this.props.onFormSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div className="create-main-div">
                {this.state.error && <p className="error-form">
                <MaterialIcon icon="error" size={15} color="rgb(199, 61, 61)"/>
                {this.state.error}
                </p>}
                <form onSubmit={this.onFormSubmit}>
                    <input
                        className="create-description-input"
                        type="text" 
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.onDesctiptionChange}
                        autoFocus
                    />
                    <input
                        className="create-amount-input"
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        className="text-area"
                        placeholder="add note here for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button className="create-submit">
                        <MaterialIcon icon="done" size={18} color="rgb(29, 59, 114)"/>
                        submit
                    </button>
                </form>
            </div>
        )
    }
}
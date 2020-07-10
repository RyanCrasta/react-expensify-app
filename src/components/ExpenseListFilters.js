import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'
 
class ExpenseListFilters extends React.Component{
    
    state={
        calenderFocused: null
    }
    
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => {
            return{
                calenderFocused
            }
        })
    }


    render(){
        return(
        <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
            <input placeholder="Search expenses" className="text-input" type="text" value={this.props.filters.text} onChange= {(e) => {
                
                this.props.dispatch(setTextFilter(e.target.value))
           
            }}/>
            </div>
            <div className="input-group__item">

                <select className="select" value={this.props.filters.sortBy} onChange = {(e) => {
                    this.props.dispatch( e.target.value === 'date' ? sortByDate() : sortByAmount())
                }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
            </div>
            <div className="input-group__item">
            <DateRangePicker 
                startDate = {this.props.filters.startDate}
                endDate = {this.props.filters.endDate}
                onDatesChange = {this.onDatesChange}
                focusedInput = {this.state.calenderFocused}
                onFocusChange = {this.onFocusChange}
                startDateId= '1'
                endDateId='2'
                numberOfMonths={1}
                isOutsideRange = {() => {
                    return false
                }}
                showClearDates={true}
            /> 
            </div>
        
        </div>
        </div>)
    }
}

const ConnectedExpenseListFilter = connect((state) => {
    return{
        filters: state.filters
    }
})(ExpenseListFilters)

export { ConnectedExpenseListFilter as default }








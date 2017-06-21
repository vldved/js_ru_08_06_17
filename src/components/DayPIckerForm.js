import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import moment from 'moment'

 export default class DayPickerForm extends Component {
     state = {
         from: null,
         to: null,
     };
     handleDayClick = day => {
         const range = DateUtils.addDayToRange(day, this.state);
         this.setState(range);
     };
     handleResetClick = e => {
         e.preventDefault();
         this.setState({
             from: null,
             to: null,
         });
     };
    render () {
        const { from, to } = this.state;
        return <div>
            <div>
                {from && <span>{moment(from).format('L')}</span>}
                {to && <span> - {moment(to).format('L')}</span>}
                {(from || to ) && <div><u onClick={this.handleResetClick}>reset</u></div>}
            </div>
            <DayPicker numberOfMonths={2}
                       selectedDays={[from, { from, to }]}
                       onDayClick={this.handleDayClick}
                       fixedWeeks />
        </div>;
    }
 }
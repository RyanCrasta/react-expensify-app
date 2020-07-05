import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action obj', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        start: moment(0)
    })
})

test('should generate set end date action obj', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        end: moment(0)
    }) 
})

test('should generate sortBydate action obj', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'

    })
})

test('should generate sortByAmount action obj', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'

    })
})

test('should generate setTextFilter action obj with provided values', () => {
    const action = setTextFilter('shop');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        msg: 'shop'        
    })
})

test('should generate setTextFilter action obj with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        msg: ''        
    })
})
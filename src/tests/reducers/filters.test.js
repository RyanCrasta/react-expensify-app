import filterReducer from '../../reducers/filters.js';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})


test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),      
    })
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined     
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        msg: 'abc'
    }
    const state = filterReducer(undefined, action);
    expect(state.text).toBe('abc');
})


test('should set start date filter', () => {
    const action = {
        type: 'SET_START_DATE',
        start: 1000
    }
    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(1000);
})

test('should set end date filter', () => {
    const action = {
        type: 'SET_END_DATE',
        end: 1000
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(1000);
})

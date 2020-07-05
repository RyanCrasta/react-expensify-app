import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'juice',
    note: 'orange juice',
    amount: 45,
    createdAt: 0
},
{
    id: '2',
    description: 'ice cream',
    note: 'chocolate',
    amount: 95,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'movie',
    note: 'super 30',
    amount: 90,
    createdAt: moment(0).add(4, 'days').valueOf()
}
]

export {expenses as default}
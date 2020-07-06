import React from 'react';

import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
 
// load a locale
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'rupee' : 'rupees';
    },
    currency: {
        symbol: '₹'
    }
});

// switch between locales
numeral.locale('fr');

const ExpenseListItem = (props) => {
    return(
        <div>
        {props.expenses.map((exp) => {
            return(
                <div key={exp.id}>
                    <Link to={`/edit${exp.id}`}><h3>{exp.description}</h3></Link>

                    <p>
                        {numeral(exp.amount).format('$0,0.00')} 
                        - 
                        {moment(exp.createdAt).format('Do-MMMM-YYYY')}
    
                    </p>
       
                </div>
            )

        })}
        </div>
    )
}



export { ExpenseListItem as default }
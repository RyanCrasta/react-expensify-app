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
                <div  key={exp.id}>
                    <Link className="list-item" to={`/edit${exp.id}`}>
                        <div>
                            <h3 className="list-item__title">{exp.description}</h3>
                            
                            <span className="list-item__subtitle">{moment(exp.createdAt).format('Do-MMMM-YYYY')}</span>
                        </div>
                        <h3 className="list-item__data">{numeral(exp.amount).format('$0,0.00')}</h3>        
                    </Link>
                </div>
            )

        })}
        </div>
    )
}



export { ExpenseListItem as default }
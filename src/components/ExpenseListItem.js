import React from 'react';

import {Link} from 'react-router-dom';

 
const ExpenseListItem = (props) => {
    return(
        <div>
        {props.expenses.map((exp) => {
            return(
                <div key={exp.id}>
                    <Link to={`/edit${exp.id}`}><h3>{exp.description}</h3></Link>
                    
                    {exp.amount} - {exp.createdAt}
                    
                    <p></p>
       
                </div>
            )

        })}
        </div>
    )
}



export { ExpenseListItem as default }
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Select(props) {
    return (
        <select
            id={props.name}
            name={props.name}
            className={props.bgColor + " block shrink-0 rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"}
            value={props.type}
            onChange={(e) => {
                props.setItem(e.target.value)
            }}
        >
            {
                props.data.map((item) => (
                    <option key={uuidv4()} value={item.value}>{item.display}</option>
                ))
            }
        </select>
    )
}

export default Select
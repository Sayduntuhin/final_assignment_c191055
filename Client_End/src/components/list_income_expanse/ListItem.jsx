import React, { useContext } from 'react'
import { CurrencyFormat } from '../../utils/CurrencyFormat'


function ListItem(props) {
    return (
        <li className="py-2">
            <div className="group grid grid-cols-3 gap-1 text-sm">
                <span>{props.description}</span>
                <span className='text-center'>{props.category}</span>
                <div className='text-end'>
                    <span className={props.color}>{CurrencyFormat(props.amount)}</span>
                    <span className="ml-2 hidden cursor-pointer font-medium text-blue-500 group-hover:inline-block"
                    onClick={()=>props.handleEdit(props.id)}>
                        Edit
                    </span>
                    <span className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                        onClick={() => props.DeleteItem(props.id)}>
                        Delete
                    </span>
                </div>
            </div>
        </li>
    )
}

export default ListItem
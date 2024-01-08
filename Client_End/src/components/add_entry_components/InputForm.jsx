import React from 'react'

function InputForm(props) {   
    return (
        <input
            id={props.id}
            type={props.type}
            name={props.name}
            autoComplete="off"
            className={ props.class + "block p-2 rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
            placeholder={props.placeholder}
            value={props.pvalue}
            onChange={(e)=>{
                props.psetValue(e.target.value)
            }}
        />
    )
}

export default InputForm
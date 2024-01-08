import React from 'react'

function ListTitle(props) {
    return (
        <div className={"border-b pb-2 font-medium grid grid-cols-3 gap-1 " + props.color}>
            <span >
                {props.innerText}
            </span>
            <span className='text-center'>
                Category
            </span>
            <span></span>
        </div>
    )
}

export default ListTitle
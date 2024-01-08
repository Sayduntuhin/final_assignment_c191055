import React, { useContext } from 'react';
import ListItem from './ListItem';
import { DataContext } from '../../context/EntriesContext';
import axios from 'axios';

function UnorederList(props) {
    const { data, updateFlag, setUpdateFlag } = useContext(DataContext)
    const entries = data.filter((item) => item.type === props.type)
    // console.log(entries)

    const DeleteItem = async (id) => {
        const url = "http://localhost:3000/entries/" + id
        await axios.delete(url);
        setUpdateFlag(!updateFlag);
    }

    const handleEdit = async (id) => {
        const title = prompt('Title: ');
        const amount = prompt('Amount: ');
        const category = prompt('Category: ');

        const url = "http://localhost:3000/entries/" + id
        await axios.patch(url, {
            title: title || "",
            amount: parseFloat(amount) || "",
            category: category || ""
        })
        setUpdateFlag(!updateFlag);
    };

    return (
        <div>
            <ul id={props.id} className="divide-y">
                {entries.map((item, index) => (
                    <ListItem
                        key={index}
                        id={item.id}
                        description={item.title}
                        category={item.category}
                        color={props.color}
                        amount={item.amount}
                        DeleteItem={DeleteItem}
                        handleEdit={handleEdit}
                    />
                ))}
            </ul>
        </div>
    )
}
export default UnorederList
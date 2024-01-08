import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const DataContext = createContext()

export default function DataContextProvider({ children }) {

    const [data, setData] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(true);

    useEffect(() => {
        const fetchAvailableBudget = () => {
            try {
                axios.get("http://localhost:3000/entries")
                    .then((response) => {
                        setData(response.data);
                    });
                console.log(data);

            } catch (e) {
                console.log("Unable to fetch data.");
                console.log(e);
            }
        }

        fetchAvailableBudget()
    }, [updateFlag])


    const totalIncome = data
        .filter((item) => item.type === "income")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = data
        .filter((item) => item.type === "expense")
        .reduce((sum, item) => sum + item.amount, 0);


    return (
        <DataContext.Provider value={{ data, setData, totalIncome, totalExpense, updateFlag, setUpdateFlag}}>
            {children}
        </DataContext.Provider>
    )
}

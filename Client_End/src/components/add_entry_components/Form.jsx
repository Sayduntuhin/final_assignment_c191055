import React, { useContext, useState } from 'react';
import Select from './Select';
import InputForm from './InputForm';
import ButtonForm from './ButtonForm';
import { DataContext } from '../../context/EntriesContext';
import { FormInputValidation } from '../../utils/FormInputValidation';
import axios from 'axios';


function Form() {
    const { updateFlag, setUpdateFlag } = useContext(DataContext)
    const [type, setType] = useState("income");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [cat, setCategory] = useState("category");

    const categoryOption = [
        { value: "category", display: "Category" },
        { value: "salary", display: "Salary" },
        { value: "utility bill", display: "Bill" },
        { value: "rent", display: "Rent" },
        { value: "assets", display: "Assests Revenue" },
        { value: "loan", display: "Loan" },
        { value: "freelancing", display: "Freelancing" },
        { value: "grocery", display: "Grocery" },
        { value: "entertainment", display: "Entertainment" }
    ]

    const ammountType = [
        { value: "income", display: "+" },
        { value: "expense", display: "-" }
    ]

    return (
        <div className="mx-auto max-w-xl px-5">
            <form className="flex gap-2" onSubmit={(e) => {
                e.preventDefault()
                if (FormInputValidation(title, value, cat)) {
                    axios.post('http://localhost:3000/entries', {
                        title: title,
                        amount: parseFloat(value),
                        type: type,
                        category: cat
                    })
                        .then((response) => {
                            console.log(response);
                        }, (error) => {
                            console.log(error);

                        });
                        setUpdateFlag(!updateFlag);

                }
            }} >
                <Select type={cat} name="category" setItem={setCategory} data={categoryOption} bgColor="bg-orange-500" />
                <Select type={type} name="type" setItem={setType} data={ammountType} bgColor="" />
                <InputForm pvalue={title} psetValue={setTitle} id="description" type="text" name="description" class="flex-1" placeholder="Add description" />
                <InputForm pvalue={value} psetValue={setValue} id="value" type="number" name="value" class="w-20" placeholder="Value" />
                <ButtonForm />
            </form>
        </div>
    )
}

export default Form
import React, {useState} from 'react';
import './ExpenseForm.css';

const  ExpenseForm = (props) =>{
    const [titleEntered, setTitleEntered] = useState('');
    const [amountEntered, setAmountEntered] = useState('');
    const [dateEntered, setDateEntered] = useState('');
    // const [userInput, setUserInput] = useState({
    //     titleEntered: '',
    //     amountEntered: '',
    //     dateEntered: ''
    // })

    const titleChangeHandler = (event) => {
        setTitleEntered(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, titleEntered: event.target.value}

        // })
    }
    const amountChangeHandler = (event) => {
        setAmountEntered(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, amountEntered: event.target.value}

        // })
    }
    const dateChangeHandler = (event) => {
        setDateEntered(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, dateEntered: event.target.value}

        // })
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: titleEntered,
            amount: amountEntered,
            date: new Date(dateEntered)
        };
        props.onSaveExpenseData(expenseData);
        setTitleEntered('');
        setAmountEntered('');
        setDateEntered('');
    }
    return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls ">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={titleEntered} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01"  value={amountEntered} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={dateEntered} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
    );
};

export default ExpenseForm;
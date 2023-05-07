import React, { useState } from 'react'
import './NewExpense.scss'
import supabase from '../../supabase'
import ErrorBox from '../UI/ErrorBox'

const NewExpense = ({ getExpenses }) => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState(0)
	const [enteredDate, setEnteredDate] = useState('')
	const [isEditing, setIsEditing] = useState(false)
	const [select, setSelect] = useState('')
	const [error, setError] = useState()

	let year = enteredDate.split('-')
	console.log(enteredDate, year)

	const titleHandler = e => {
		setEnteredTitle(e.target.value)
	}

	const amountHandler = e => {
		const inputAmount = e.target.value

		// if (isNaN(inputAmount)) {
		// 	alert('Amount must be a number.')
		// } else {
		setEnteredAmount(inputAmount)
		// }
	}
	const dateHandler = e => {
		setEnteredDate(e.target.value)
	}

	const submitHandler = async e => {
		e.preventDefault()
		// await supabase.from('Expenses').insert({
		// 	Title: enteredTitle,
		// 	Date: enteredDate,
		// 	ExpensesAmount: +enteredAmount,
		// 	filteredYear: year[0].toString(),
		// 	Kategoria: select,
		// })

		if (enteredTitle === '') {
			setError({
				title: 'Invalid title',
				text: 'Please enter title !!',
			})
			return
		} else if (enteredAmount === '' || enteredAmount < 0) {
			setError({
				titile: 'Invalid Amout',
				text: 'Please enter the right amount(Must be > 0) !!!',
			})
			setEnteredAmount('')
			return
		} else if (enteredDate === '') {
			setError({
				title: 'Invalid date',
				text: 'Please enter date !',
			})
			return
		} else {
			await supabase.from('Expenses').insert({
				Title: enteredTitle,
				Date: enteredDate,
				ExpensesAmount: +enteredAmount,
				filteredYear: year[0].toString(),
				Kategoria: select,
			})
		}

		setEnteredAmount('')
		setEnteredDate('')
		setEnteredTitle('')
		setSelect('')

		setIsEditing(false)
		getExpenses()
	}
	const editingHandler = () => {
		setIsEditing(true)
	}
	const stopEditingHandler = () => {
		setIsEditing(false)
	}
	const selectedHandler = e => {
		setSelect(e.target.value)
	}
	const errorHandler = () => {
		setError(null)
	}

	return (
		<>
			{error && <ErrorBox title={error.title} text={error.text} onConfirm={errorHandler} />}
			<div className="new-expense">
				{!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
				{isEditing && (
					<form onSubmit={submitHandler}>
						<div className="new-expense__controls">
							<div className="new-expense__control">
								<label>Title</label>
								<input type="text" value={enteredTitle} onChange={titleHandler} />
							</div>
						</div>
						<div className="new-expense__controls">
							<div className="new-expense__control">
								<label>Amount</label>
								<input type="number" step="0.01" value={enteredAmount} onChange={amountHandler} />
							</div>
						</div>
						<div className="new-expense__controls">
							<div className="new-expense__control">
								<label>Date</label>
								<input type="date" min="2023-01-01" max="2026-01-01" onChange={dateHandler} value={enteredDate} />
							</div>
						</div>
						<div className="new-expense__controls">
							<div className="new-expense__control">
								<label>Category</label>
								<select onChange={selectedHandler} value={select}>
									<option value=""></option>
									<option value="Food">Food</option>
									<option value="Grocery shopping">Grocery shopping</option>
									<option value="Car">Car</option>
									<option value="Home">Home</option>
								</select>
							</div>
						</div>
						<div className="new-expene__actions">
							<button type="submit">Add Expense</button>
							<button type="button" onClick={stopEditingHandler}>
								Cancel
							</button>
						</div>
					</form>
				)}
			</div>
		</>
	)
}

export default NewExpense

import React from 'react'
import './ExpenseItem.scss'
import ExpenseDate from './ExpenseDate'
import supabase from '../supabase'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ExpenseItem = ({ title, date, amount, category, setExpensesStored, getExpenses }) => {
	if (!title && !date && !amount && !category) return null

	const deleteTask = async e => {
		e.preventDefault()
		try {
			const { data, error } = await supabase.from('Expenses').delete().eq('ExpensesAmount', parseInt(amount))

			if (error) {
				throw error
			} else {
				setExpensesStored(data)
				getExpenses()
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<div className="expense-item">
				<ExpenseDate date={date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<p>{category}</p>
					<div className="expense-item__price">{amount}$</div>
					<FontAwesomeIcon icon={faTrash} style={{height:'30px' , width:'30px' , color:'white', cursor:'pointer'}} onClick={(e) => deleteTask(e)}></FontAwesomeIcon>
				</div>
			</div>
		</>
	)
}

export default ExpenseItem

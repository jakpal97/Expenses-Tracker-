import React from 'react'
import './ExpenseItem.scss'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({title , date , amount, category}) => {

	if(!title && !date && !amount && !category) return null

	return (
		<>
			<div className="expense-item">
				<ExpenseDate date={date}/>
				<div className="expense-item__description">
					<h2>{title}</h2>
					<p>{category}</p>
					<div className="expense-item__price">{amount}</div>
				</div>
			</div>
		</>
	)
}

export default ExpenseItem

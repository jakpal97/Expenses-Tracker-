import React from 'react'
import './ExpenseItem.scss'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({title , date , amount}) => {

	if(!title && !date && !amount) return null

	return (
		<>
			<div className="expense-item">
				<ExpenseDate date={date}/>
				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">{amount}</div>
				</div>
			</div>
		</>
	)
}

export default ExpenseItem

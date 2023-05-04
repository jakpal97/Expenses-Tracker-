import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = ({date}) => {
	if(!date)return null

	const calendar = date.split('-') 
	
	

    const month =calendar[1]
	const day = calendar[2]
	const year = calendar[0]

	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
		</div>
	)
}
export default ExpenseDate

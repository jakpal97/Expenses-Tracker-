import React, { useState } from 'react'
import './expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = items => {
	const [filteredYear, setFilteredYear] = useState('2023')
	const filterChangeHandler = year => {
		setFilteredYear(year)
		console.log(year)
	}

	const filteredExpenses = items.expenses.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	let noExpenses = <p className='expenses-list__fallback'>No expenses found.</p>

	if (filteredExpenses.length > 0) {
		noExpenses = filteredExpenses.map((expense, index) => {
			return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />
		})
	}

	return (
		<div>
			<div className="expenses">
				<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
				<ExpensesChart expenses={filteredExpenses}/>
				{noExpenses }
			</div>
		</div>
	)
}

export default Expenses

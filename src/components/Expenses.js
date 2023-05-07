import React, { useState } from 'react'
import './expenses.scss'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'


const Expenses = ({ expensesStored, setExpensesStored, getExpenses  }) => {
	const [filteredYear, setFilteredYear] = useState('2023')
	if (!expensesStored) {
		return null
	}
	const filterChangeHandler = year => {
		setFilteredYear(year)
		
	}

	const filteredExpenses = expensesStored.filter(expense => {
		return expense.filteredYear === filteredYear
	})
	console.log(filteredYear)

	let noExpenses = <p className="expenses-list__fallback">No expenses found.</p>

	if (filteredExpenses.length > 0) {
		noExpenses = filteredExpenses.map((expense, index) => {
			return <ExpenseItem key={index} title={expense.Title} category={expense.Kategoria} amount={expense.ExpensesAmount} date={expense.Date} setExpensesStored={setExpensesStored} getExpenses={getExpenses} />
		})
	}

	

	return (
		<div>
			<div className="expenses">
				<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
				<ExpensesChart expenses={filteredExpenses} />
				{noExpenses}
			</div>
		</div>
	)
}

export default Expenses

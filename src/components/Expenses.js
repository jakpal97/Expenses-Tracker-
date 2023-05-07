import React, { useState } from 'react'
import './expenses.scss'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expensesStored, setExpensesStored, getExpenses }) => {
	const [filteredYear, setFilteredYear] = useState('2023')
	const [selectCategory, setSelectcategory] = useState('All')

	if (!expensesStored) {
		return null
	}
	const filterChangeHandler = year => {
		setFilteredYear(year)
	}
	const filterSelect = category => {
		setSelectcategory(category === 'ALL' ? '' : category)
	}

	const filteredExpenses = expensesStored.filter(expense => {
		return expense.filteredYear === filteredYear && (selectCategory === 'All' || expense.Kategoria === selectCategory)
	})

	// const expensesCategory = expensesStored.filter(expense => {
	// 	return (selectCategory === 'All' || expense.Kategoria === selectCategory) &&
	// 		   (filteredYear === '' || expense.filteredYear === filteredYear);
	// });

	let noExpenses = <p className="expenses-list__fallback">No expenses found.</p>

	if (filteredExpenses.length > 0) {
		noExpenses = filteredExpenses.map((expense, index) => {
			return (
				<ExpenseItem
					key={index}
					title={expense.Title}
					category={expense.Kategoria}
					amount={expense.ExpensesAmount}
					date={expense.Date}
					setExpensesStored={setExpensesStored}
					getExpenses={getExpenses}
					id={expense.id}
				/>
			)
		})
	}

	return (
		<div>
			<div className="expenses">
				<ExpensesFilter
					selectedYear={filteredYear}
					onChangeFilter={filterChangeHandler}
					selectCategory={selectCategory}
					onChangeSelect={filterSelect}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				{noExpenses}
			</div>
		</div>
	)
}

export default Expenses

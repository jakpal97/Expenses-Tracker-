import React, { useState, useEffect } from 'react'
import './App.scss'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'
import supabase from './supabase'
import DonutChart from "react-donut-chart";

const INITIAL_EXPENSES = []
const App = () => {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
	const [expensesStored, setExpensesStored] = useState()

	async function getExpenses() {
		const { data } = await supabase.from('Expenses').select()
		setExpensesStored(data)
	}

	useEffect(() => {
		getExpenses()
	}, [])

	const addExpenseHandler = expense => {
		setExpenses(prevstate => {
			return [expense, ...prevstate]
		})
	}

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler} getExpenses={getExpenses} />
			<Expenses expenses={expenses} expensesStored={expensesStored} />
			
		</>
	)
}

export default App

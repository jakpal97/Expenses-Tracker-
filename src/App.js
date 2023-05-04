import React,{useState} from 'react'
import'./App.css'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'


const INITIAL_EXPENSES = [
		
	]
const App = () => {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
	
	
	const addExpenseHandler=(expense)=>{
        setExpenses(prevstate=>{ return[expense,...prevstate]})
	}

	
	return (
		<>
			<NewExpense  onAddExpense={addExpenseHandler}/>
			<Expenses expenses={expenses} />
		</>
	)
}

export default App

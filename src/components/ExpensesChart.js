import { React, useState } from 'react'
import Chart from './Chart/Chart'

const ExpensesChart = ({ expenses }) => {
	const [showTooltip, setShowTooltip] = useState(false)
	const [tooltipValue, setTooltipValue] = useState(0)

	const chartDataPoints = [
		{
			label: '01',
			value: 0,
		},
		{
			label: '02',
			value: 0,
		},
		{
			label: '03',
			value: 0,
		},
		{
			label: '04',
			value: 0,
		},
		{
			label: '05',
			value: 0,
		},

		{
			label: '06',
			value: 0,
		},
		{
			label: '07',
			value: 0,
		},
		{
			label: '08',
			value: 0,
		},
		{
			label: '09',
			value: 0,
		},
		{
			label: '10',
			value: 0,
		},
		{
			label: '11',
			value: 0,
		},
		{
			label: '12',
			value: 0,
		},
	]

	for (let item of expenses) {
		const calendar = item.Date.split('-')
		const mounth = calendar[1].toString()
		const getMounth = chartDataPoints.find(el => el.label == mounth)
		getMounth.value += item.ExpensesAmount
		console.log(getMounth)
	}

	return (
		<div>
			<Chart dataPoints={chartDataPoints} />
		</div>
	)
}

export default ExpensesChart

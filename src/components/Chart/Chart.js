import React from 'react'
import './chart.scss'
import ChartBars from './ChartBars'

const Chart = props => {
    const arr = props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMax = Math.max(...arr)
    



	return (
		<div className="chart">
			{props.dataPoints.map(dataPoint => (
				<ChartBars key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={totalMax}/>
			))}
		</div>
	)
}

export default Chart

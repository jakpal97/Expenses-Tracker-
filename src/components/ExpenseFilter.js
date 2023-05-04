
import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = ({onChangeFilter, selectedYear}) => {

    const selectHandler=(e)=>{
       onChangeFilter(e.target.value)


    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={selectHandler}>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
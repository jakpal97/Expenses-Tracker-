
import React from 'react';

import './ExpenseFilter.scss';

const ExpensesFilter = ({onChangeFilter, selectedYear, selectCategory, onChangeSelect}) => {

    const selectHandler=(e)=>{
       onChangeFilter(e.target.value)
    }
    const selectedCategory=(e)=>{
      onChangeSelect(e.target.value)
    }
  return (
    <>
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={selectHandler}>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
        </select>
      </div>
    </div>
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filtered by category</label>
        <select value={selectCategory} onChange={selectedCategory}>
          <option value='All'>All</option>
          <option value='Food'>Food</option>
          <option value='Grocery shopping'>Grocery shopping</option>
          <option value='Car'>Car</option>
          <option value='Home'>Home</option>
        </select>
      </div>

    </div>
    </>
  );
};

export default ExpensesFilter;
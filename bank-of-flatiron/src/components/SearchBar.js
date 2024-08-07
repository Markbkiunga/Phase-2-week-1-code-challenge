import React from 'react';

function SearchBar({ transactions, setTransactions }) {
  function handleSearch(event) {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description.includes(event.target.value);
    });
    setTransactions(filteredTransactions);
    console.log(event.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search" />
    </div>
  );
}

export default SearchBar;

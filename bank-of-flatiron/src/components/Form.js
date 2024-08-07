import React from 'react';

function Form() {
  return (
    <div>
      <form className="transactions-form">
        <p className="transaction-form-heading">Add Transaction Form</p>
        <input type="text" name="date" placeholder="Enter Date" />
        <input type="text" name="description" placeholder="Enter Description" />
        <input type="text" name="category" placeholder="Enter Category" />
        <input type="text" name="amount" placeholder="Enter Amount" />
        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default Form;

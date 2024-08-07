import React from 'react';
import TransactionTableHeading from './TransactionTableHeading';
import Transaction from './Transaction';

function TransactionTable({ transactions }) {
  return (
    <table>
      <thead>
        <TransactionTableHeading />
      </thead>
      <tbody>
        <Transaction transactions={transactions} />
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default TransactionTable;

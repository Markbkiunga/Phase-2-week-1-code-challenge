import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import TransactionTable from './components/TransactionTable';
import { useEffect, useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/transactions')
    .then(response => response.json())
    .then(transactions => setTransactions(transactions))
  },[])
  return (
    <div className="App">
     <Heading />
     <Form transactions={transactions} setTransactions={setTransactions}/>
     <TransactionTable  transactions={transactions}/>
    </div>
  );
}

export default App;

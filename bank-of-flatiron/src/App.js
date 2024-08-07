import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import TransactionTable from './components/TransactionTable';

function App() {
  return (
    <div className="App">
     <Heading />
     <Form />
     <TransactionTable />
    </div>
  );
}

export default App;

import './App.css';
import Search from './components/Search';
import Add from './components/Add';
import Edit from './components/Edit';
import Delete from './components/Delete'; 
import Phonebook from './components/Phonebook';

function App() {
  return (
    <div className="App">
        <h1>Phonebook</h1>
        <h2>Sections:</h2>
        <h3>
          <p>Search Contacts: </p> <Search/>
          <p>Add New Contact: </p> <Add/>
          <p>Edit Contact: </p> <Edit/>
          <p>Delete Contact: </p> <Delete/>
          <p>Show Contacts: </p>  <Phonebook/>
        </h3>
    </div>
  );
}

export default App;

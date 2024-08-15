import logo from './logo.svg';
import './App.css';
import TimesList from './components/TimesList';
import AddTime from './components/AddTime'
function App() {
  return (
    <div className="App">
      <h1>CRUD de Times de Futebol</h1>
      <header className="App-header">
        <TimesList />
      </header>
    </div>
  );
}

export default App;

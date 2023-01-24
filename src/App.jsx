import logo from './logo.svg';
import './App.scss';
import Todo from './components/todo/AddTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>To do app </h2>
      </header>

        <Todo />
      
    </div>
  );
}

export default App;

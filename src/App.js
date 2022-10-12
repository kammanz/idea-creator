import logo from './logo.svg';
import './App.css';
import Tile from './components/tile';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: 'lightgrey', height: '80vh' }}>
      <Tile />
    </div>
  );
}

export default App;

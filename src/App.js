import logo from './logo.svg';
import './App.css';
import IdeaList from './components/IdeaList';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <IdeaList />
    </div>
  );
}

export default App;

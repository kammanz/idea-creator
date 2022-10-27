import logo from './logo.svg';
import './App.css';
import IdeaList from './components/IdeaList';
import List2 from './components/List2';
import Header from './components/Header';
import ReactForm from './components/ReactForm';

function App() {
  return (
    <div className="container">
      <Header />
      <List2 />
      {/* <ReactForm /> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
// import IdeaList from './components/IdeaList';
import List from './components/List';
import Header from './components/Header';
import ReactForm from './components/ReactForm';

function App() {
  return (
    <div className="container">
      <Header />
      <List />
      {/* <ReactForm /> */}
    </div>
  );
}

export default App;

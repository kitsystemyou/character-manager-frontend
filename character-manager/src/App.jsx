import './App.css';
import Header from './components/modules/Header'
import CharacterList from './components/pages/CharacterList'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Header />
      </div>
      <div className='body'>
        <CharacterList />
      </div>
    </div>
  );
}

export default App;

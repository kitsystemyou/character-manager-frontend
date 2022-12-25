import './App.css';
import { Routes, Route} from "react-router-dom";
import CharacterList from './components/pages/CharacterList'
import CharacterCreate from './components/pages/CharacterCreate'

const App = () => {
  return (   
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/create' element={<CharacterCreate />} />
      </Routes>
    </div>
  );
}

export default App;

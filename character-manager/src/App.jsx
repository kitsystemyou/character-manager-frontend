import './App.css';
import { Routes, Route} from "react-router-dom";
import CharacterList from './components/pages/CharacterList'
import CharacterCreate from './components/pages/CharacterCreate'
import CharacterEdit from './components/pages/CharacterEdit'
import CharacterInfo from './components/pages/CharacterInfo'

const App = () => {
  return (   
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/character/create' element={<CharacterCreate />} />
        <Route path='/characters/:character_id/edit' element={<CharacterEdit />} />
        <Route path='/characters/:character_id' element={<CharacterInfo />} />
      </Routes>
    </div>
  );
}

export default App;

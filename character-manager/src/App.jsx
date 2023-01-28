import './App.css';
import { Routes, Route} from "react-router-dom";
import CharacterList from './components/pages/CharacterList'
import CharacterCreate from './components/pages/CharacterCreate'
import CharacterInfo from './components/pages/CharacterInfo'
import Top from './components/pages/Top'

const App = () => {
  return (   
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/create' element={<CharacterCreate />} />
        <Route path='/info' element={<CharacterInfo />} />
        <Route path='/top/:name/:desc' element={<Top />}/>
      </Routes>
    </div>
  );
}

export default App;

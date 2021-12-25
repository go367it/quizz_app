import './App.css';
import {Routes, Route} from 'react-router-dom'

//importing pages
import Homepage from './pages/Homepage'
import Quiz from './pages/quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;

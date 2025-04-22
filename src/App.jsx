import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Today from './components/Today';
import Alltask from './components/Alltask';
import Completed from './components/Completed';
import Mainmenu from './components/Mainmenu';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4 pt-4">
          <Routes>
            <Route path='/' element={<Mainmenu/>}/>
            <Route path="/today" element={<Today />} />
            <Route path="/alltasks" element={<Alltask/>} />
            <Route path="/completed" element={<Completed/>} />
            <Route path="/alltasks" element={<Alltask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
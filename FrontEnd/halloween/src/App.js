import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CharForm from './Components/CharForm';
import Read from "./Components/read"
import BG from './vecteezyhalloween-festivity-backgroundAW0821_generated.jpg'
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';



function App() {
  return (
    <div className="App" style={{backgroundImage: BG}}>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {" "}
          <Link to="/read">Characters</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CharForm />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </Router>
    </div>

  );
}



export default App;

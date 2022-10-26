import './App.css';
import CharForm from './Components/CharForm';
import Read from "./Components/read"
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
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

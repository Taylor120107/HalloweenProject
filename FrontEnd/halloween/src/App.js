import './App.css';
import CharForm from './Components/CharForm';
import Create from "./Components/create";
import Read from "./Components/read"
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <CharForm/>
      <Read/>
      <Router>
        <Routes>
          <Route path="CharForm" element={<CharForm />} />
          <Route path="create" element={<Create />} />
          <Route path="read" element={<Read />} />
        </Routes>
      </Router>
    </div>

  );
}



export default App;

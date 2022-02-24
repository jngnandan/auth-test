import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;

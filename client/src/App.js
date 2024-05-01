import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
>>>>>>> ae54427f268f4f72357e74ddcd7e87933a381ebb

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
      <Router>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
      </Router>
  );
}

export default App;
>>>>>>> ae54427f268f4f72357e74ddcd7e87933a381ebb

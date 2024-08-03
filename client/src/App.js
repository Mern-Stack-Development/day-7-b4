import logo from './logo.svg';
import './App.css';
import CrudPost from './Components/CRUD/CrudPost';
import CrudGet from './Components/CRUD/CrudGet';
import CrudGetSpecific from './Components/CRUD/CrudGetSpecific';
import CrudUpdate from './Components/CRUD/CrudUpdate';
import CrudDelete from './Components/CRUD/CrudDelete';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
import HomePage from './Components/Pages/homepage';

function App() {
  return (
    <div className="App">
      {/* <CrudPost/>
      <CrudGet/>
      <CrudGetSpecific/>
      <CrudUpdate/>
      <CrudDelete/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

import "./App.css";
import Register from "./components/Register/Register";
import Err404 from "./components/Error/Err404";
import MapContainer from "./components/Map/Map";
import { Routes, Route } from "react-router-dom";
import School from "./components/School/School";
import Login from "./components/Login/Login";
import Friends from "./components/Friends/Friends";
import Conversation from "./components/conversation/Conversation";
import { NavBar } from "./components/Styled/Navbar.styled";
import Nav from "./components/Navbar/Nav";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<MapContainer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/school/:id" element={<School />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friends/:id" element={<Conversation />} />
        <Route path="/admin" element={<Admin />} />
        
        <Route path="*" element={<Err404 />} />

      </Routes>
    </div>
  );
}

export default App;

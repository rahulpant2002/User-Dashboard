import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </Body>
      </div>
    </Router>
  );
}

export default App;

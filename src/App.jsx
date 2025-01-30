import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import { useEffect, useState } from "react";
import { getUsers } from "./apis/getAPIs";

function App() {
  const [allUsers, setAllUsers] = useState(); 

  const fetchAllUsers = async()=>{
      const data = await getUsers();
      setAllUsers(data);
  }

  useEffect(()=>{
      fetchAllUsers();
  }, []);

  return (
    <Router>
      <div>
        <NavBar/>
        <Body>
          <Routes>
            <Route path="/" element={<Home allUsers={allUsers} setAllUsers={setAllUsers} />} />
            <Route path="/add" element={<AddUser allUsers={allUsers} setAllUsers={setAllUsers}/>} />
            <Route path="/edit/:id" element={<EditUser setAllUsers={setAllUsers} />} />
          </Routes>
        </Body>
      </div>
    </Router>
  );
}

export default App;

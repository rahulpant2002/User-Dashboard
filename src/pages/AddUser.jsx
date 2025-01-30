import React, { useState } from "react";
import { addUser } from "../apis/addAPI";
import { useNavigate } from "react-router-dom";

const AddUser = ({allUsers, setAllUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = { name, email, company : {name : department} };
    const addedUser = await addUser(newUser);
    if (addedUser) {
      setAllUsers(prevUsers => [...prevUsers, addedUser]);
      setName("");
      setEmail("");
      setDepartment("");
      navigate('/');
    }
  };

  return (
    <div className="my-6 p-4 shadow-md rounded-lg w-[35%] mx-auto">
      <h3 className="text-lg font-bold mb-4 text-center">Add New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white font-bold" htmlFor="name">Name</label>
          <input
            id="firstName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
    
        <div className="mb-4">
          <label className="block text-white font-bold" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold" htmlFor="department">Department</label>
          <input
            id="department"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { editUser } from '../apis/editAPI';

const EditUser = ({ allUsers, setAllUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: { name: "" } 
  });
  const fetchTheUser = async () => {
    const foundUser = allUsers?.find((u) => u.id === parseInt(id));
    if (foundUser) {
      const [firstName, lastName] = foundUser.name.split(' '); 
      setUser({
        firstName: firstName || "",
        lastName: lastName || "",
        email: foundUser.email,
        company: { name: foundUser.company?.name || "" }
      });
    }
  };

  useEffect(() => {
    fetchTheUser();
  }, [id, allUsers]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = await editUser(id, {
      name: `${user.firstName} ${user.lastName}`.trim(),
      email: user.email,
      company: { name: user.company.name }
    });

    if (updatedUser) {
      setAllUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === parseInt(id) ? updatedUser : u))
      );
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "department") {
      setUser((prevUser) => ({
        ...prevUser,
        company: { ...prevUser.company, name: value }
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value
      }));
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-96 mx-auto mt-10">
      <h2 className="text-xl text-gray-700 text-center font-semibold mb-4">Edit User</h2>

      <form className="text-gray-700" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">First Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={user.company.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditUser;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { editUser } from '../apis/editAPI';

const EditUser = ({allUsers, setAllUsers}) => {
  const {id} = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: {
      name : ""
    }
  });


  const fetchTheUser = async () => {
      const foundUser = allUsers?.find((u) => u.id === parseInt(id));
      if (foundUser) {
        setUser({
          firstName: foundUser.name.split(' ')[0],
          lastName: foundUser.name.split(' ')[1],
          email: foundUser.email,
          company : {
            name : department
          }
        });
      }
  };
  console.log(user);

  useEffect(()=>{
    fetchTheUser();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = await editUser(id, user);
    console.log(updatedUser);
    if (updatedUser) {
      setAllUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === parseInt(id) ? updatedUser : u))
      );
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-96 mx-auto mt-10">

      <h2 className="text-xl text-gray-700 text-center font-semibold mb-4">Edit User</h2>
      
      <form className='text-gray-700' onSubmit={handleSubmit}>
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
          <label className="block text-gray-700">Last Name</label>
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
            value={user.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditUser
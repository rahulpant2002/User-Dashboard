import React from 'react'
import UserTable from '../components/UserTable'

const Home = ({allUsers, setAllUsers}) => {
  return (
    <UserTable allUsers={allUsers} setAllUsers={setAllUsers} />
  )
}

export default Home;
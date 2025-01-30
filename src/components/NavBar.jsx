import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar bg-base-300">
        <div className="flex-1">
            <Link to='/'><div className="btn btn-ghost text-xl text-black bg-gray-200">User Dashboard</div></Link>
        </div>
        <div className="flex-none">
            <Link to='/add'><div className="btn btn-ghost text-xl text-black bg-gray-200">Add User</div></Link>
        </div>
    </div>
  )
}

export default NavBar
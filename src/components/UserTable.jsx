import { Link } from "react-router-dom";
import { deleteUser } from "../apis/deleteAPI";

const UserTable = ({allUsers, setAllUsers}) => {
    
    const handleDeleteUser = async(id)=>{
        const success = await deleteUser(id);
        if (success) {
            const filteredRes = allUsers.filter(user => user.id !== id);
            setAllUsers(filteredRes);
        }
    }

    return(
        <div className="overflow-x-auto">
            <table className="table bg-gradient-to-r ">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>

                <tbody>
                
                {
                    allUsers?.map((user) => {
                        const {id, name, email, company} = user;
                        const [firstName, lastName] = name?.split(' ');

                        return(
                            <tr key={id}>
                                <th>{id}</th>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{company?.name}</td>
                                <td><Link to={`/edit/${id}`} >✏️</Link></td>
                                <td> <button className="cursor-pointer" onClick={()=>handleDeleteUser(id)} >🗑</button> </td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
}

export default UserTable;
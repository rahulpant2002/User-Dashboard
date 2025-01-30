import { useEffect, useState } from "react";
import {getUsers} from "../apis/getAPIs"

const UserTable = () => {
    const [allUsers, setAllUsers] = useState();
    
    const fetchAllUsers = async()=>{
        const data = await getUsers();
        setAllUsers(data);
    }

    useEffect(()=>{
        fetchAllUsers();
    }, []);

    console.log(allUsers);

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
                    allUsers?.map(user => {
                        const {id, name, email, company} = user;
                        const [firstName, lastName] = name.split(' ');

                        return(
                            <tr>
                                <th>{id}</th>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{company?.name}</td>
                                <td>✏️</td>
                                <td>🗑</td>
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
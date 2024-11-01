"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Users(){
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const result = await axios("http://127.0.0.1:8000/api/users")
            setUserData(result.data.result);
        }catch (err){
            console.log("Something Wrong")
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/userdelete/`+id);
        const newUserData=userData.filter((item)=>{
            return(
                item.id !== id
            )
        })
        setUserData(newUserData);
    }

    return (
            <table className="table table-zebra">
                <thead className="text-sm text-grey-700 uppercase border-y-gray-600">
                <tr>
                    <td className="py-3 py-6 text-gray-300">1</td>
                    <td className="py-3 py-6 text-gray-300">Name</td>
                    <td className="py-3 py-6 text-gray-300">Email</td>
                    <td className="py-3 py-6 text-gray-300">Created At</td>
                    <td className="py-3 py-6 text-gray-300">Actions</td>
                </tr>
                </thead>
                <tbody>
                {userData.map((rs, index) => (
                    <tr key={rs.id} className="bg-gray-800 border-b-blue-200">
                        <td className="py-3 px-6 text-gray-300 font-medium">{index + 1}</td>
                        <td className="py-3 px-6 text-gray-300">{rs.name}</td>
                        <td className="py-3 px-6 text-gray-300">{rs.email}</td>
                        <td className="py-3 px-6 text-gray-300">{rs.created_at}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <Link href={`/user/view/${rs.id}`} className="btn btn-info">
                                View
                            </Link>
                            <Link href={`/user/edit/${rs.id}`} className="btn btn-info">
                                Edit
                            </Link>
                            <button onClick={()=>handleDelete(rs.id)} className="btn bg-red-600 text-gray-50">Delete</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
    )
}
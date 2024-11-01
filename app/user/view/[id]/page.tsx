"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ViewUserPage() {
    const {id} = useParams()
    const [user, setUser] = useState([])
    useEffect(() => {
        fetchUser();
    }, [id]);

    const fetchUser = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/users/"+id);
            setUser(result.data.users);
        } catch (err) {
            console.log("Something Wrong")
        }
    }
    return (
        <div className="max-w-2xl mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">View User</h1>
            <table className="table table-zebra">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th>S No.</th>
                    <th>Full Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="text-gray-50">{user.id}</th>
                    <th className="text-gray-50">{user.name}</th>
                    <th className="text-gray-50">{user.email}</th>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
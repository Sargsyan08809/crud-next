"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ViewUserPage(){
    const {id} = useParams();
    const [userField, setUserField] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        fetchUser();
    }, [id]);

    const fetchUser = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/users/" + id);
            setUserField(result.data.users);
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/usersupdate/"+id, {...userField});
            // window.location.href = '/';
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Edit Form</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-400">ID:</label>
                    <input type="text" id="id" name="id" value={id} disabled={true}  className="input input-bordered input-primary w-full max-w-xs mt-2"/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-400">Full Name:</label>
                    <input type="text" id="name" name="name" value={userField.name} className="input input-bordered input-primary w-full max-w-xs mt-2"
                           onChange={e => changeUserFieldHandler(e)}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-400">Email:</label>
                    <input type="email" id="email" name="email" value={userField.email} className="input input-bordered input-primary w-full max-w-xs mt-2"
                           onChange={e => changeUserFieldHandler(e)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Update</button>
            </form>
        </div>
    );
}
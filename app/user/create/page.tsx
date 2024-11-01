"use client";

import {useState} from "react";
import axios from "axios";

const CreateUserPage = () => {
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: "",
    });

    const changeUserFieldHandle = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/addnew", userField);
            console.log(response)
            window.location.href = '/';
        } catch (err){
            console.log("Something Wrong")
        }
    }

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Add New User</h1>
            <div>
                <form>
                    <div className="mb-5">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                        <input
                            className="input input-bordered input-primary w-full max-w-xs mt-2"
                            placeholder="Full Name..."
                            type="text"
                            name="name"
                            id="name"
                            onChange={e => changeUserFieldHandle(e)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                        <input
                            className="input input-bordered input-primary w-full max-w-xs mt-2"
                            placeholder="Email Address"
                            type="email"
                            name="email"
                            id="email"
                            onChange={e => changeUserFieldHandle(e)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            className="input input-bordered input-primary w-full max-w-xs mt-2"
                            placeholder="password..."
                            type="password"
                            name="password"
                            id="password"
                            onChange={e => changeUserFieldHandle(e)}
                        />
                    </div>
                    <button
                        onClick={e => onSubmitChange(e)}
                        type="submit" className="btn btn-primary">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUserPage;
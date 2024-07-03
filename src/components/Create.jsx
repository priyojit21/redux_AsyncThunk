import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

export default function Create() {

    const [users, setUsers] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const getUserData = (e) => {
        //eke bare hoye jabe
        setUsers({ ...users, [e.target.name]: e.target.value })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
        dispatch(createUser(users));
        setUsers({});
        navigate("/read");
    }

    return (
        <div>
            <h2 className="my-2">Fill the data</h2>
            <form className="w-50 mx-auto my-5" >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={getUserData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={getUserData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        onChange={getUserData}
                    />
                </div>


                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        type="radio"
                        value="Male"
                        onChange={getUserData}
                    />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        type="radio"
                        value="Female"
                        onChange={getUserData}
                    />
                    <label className="form-check-label">Female</label>
                </div>


                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>

            </form>
        </div>
    )
}







        
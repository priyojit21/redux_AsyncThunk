import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/userDetailSlice';

export default function Update() {

    const[updateData,setUpdateData] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //edit link hit korle id ta capture korar jonne useParams() use korlam amra 
    const{id} = useParams();

    const {users,loading} = useSelector((state) => state.app);
    
    //jokn page ta 1 bar load hobe tokon e oi edit er part ta run hobe
    useEffect(() => {
            if(id)
            {
                const singleUser = users.filter((ele) => ele.id === id); 
                //retriving previous data, jetar moddhe pore edit hobe
                setUpdateData(singleUser[0]);
            }
    },[])
    console.log(updateData);

    const newData = (e) => {
        //ager ja data chilo ta ano, r ja notun change korbe ta add korte thako
        setUpdateData({...updateData, [e.target.name] : e.target.value})
    }

    function handleSubmit (e)
    {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read");
    }

  return (
    <div>
            <h2 className="my-2">Edit the data</h2>
            <form className="w-50 mx-auto my-5" >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={updateData && updateData.name}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={updateData && updateData.email}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        value={updateData && updateData.age}
                        onChange={newData}
                    />
                </div>


                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        type="radio"
                        value="Male"
                        checked = {updateData && updateData.gender === 'Male'}
                        onChange={newData}
                    />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        name="gender"
                        type="radio"
                        value="Female"
                        checked = {updateData && updateData.gender === 'Female'}
                        onChange={newData}
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

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';


export default function Read() {

    const dispatch = useDispatch();

    const[id,setId] = useState();
    const[showPopup,setShowPopup] = useState(false);

    // app hocche store er naam or moddhe users r loading ache jegulo ami destructure kore nilam
    const { users, loading ,searchData} = useSelector((state) => state.app);

    //for api calling
    useEffect(() => {
        dispatch(showUser());
    }, []);

    //jodi loading true thake
    if (loading) {
        return (<h2>Loading</h2>)
    }

    return (
        <div>
            { showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}/> }
            <h1>All Data</h1>

            <div>
                {users && 
                
                users.filter((ele) => {
                    //jodi searchbar faka thake tale sob dekhao
                    if(searchData.length === 0){
                        return ele
                    }
                    //else ja type korche search bar a tai dekhao
                    else
                    {
                        //amra name er respect er korchi search
                        //jodi email r gender kori then 
                        // return ele.name ||ele.email || ele.gender as line 50
                        return ele.name
                        .toLowerCase()
                        .includes(searchData.toLowerCase()) 
                        // || ele.gender
                        // .toLowerCase()
                        // .includes(searchData.toLowerCase())
                    }
                })
                .map((ele,id) => (
                  
                  <div key = {id} className="card w-80 mx-aut my-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{ele.name}</h5>
                        <h6 className="card-title mb-2">{ele.email}</h6>
                        <p className="card-text">{ele.gender}</p>
                        {/* ektai onclick a 2 usestate ei bhabe update korbo */}
                        <button className="btn btn-primary mx-2" onClick={() => [setId(ele.id),setShowPopup(true)]}>
                            View
                        </button>

                        <Link to={`/edit/${ele.id}`} className="btn btn-primary mx-2">
                            Edit
                        </Link>

                        <button className="btn btn-primary mx-2" onClick={() => dispatch(deleteUser(ele.id))}>
                            Delete
                        </button>
                    </div>
                    </div>
                  
                ))}
                
            </div>
        </div>
    )
}

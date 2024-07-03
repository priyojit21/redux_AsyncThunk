import React from 'react'
import './CustomModal.css'
import { useSelector } from 'react-redux'

export default function CustomModal({id,showPopup,setShowPopup}) {



    //allUsers is full array of objects okn theke just state.app.users ta select korlm(users array select korlam)
    //allusers a khali users ache
    const allUsers = useSelector((state) => state.app.users);

    //kon user er name dekhabo modal a ota filter lagacchi
    const singleUser = allUsers.filter((ele) => ele.id === id); 
    console.log(singleUser);

  return (
    <div className='modalBackground'>
        <div className="modalContainer">
            <div>
                <h1>Your Data</h1>
                <h2>{singleUser[0].name}</h2>
                <h2>{singleUser[0].email}</h2>
                <h2>{singleUser[0].age}</h2>
                <h2>{singleUser[0].gender}</h2>
            </div>
            <div>
                <button onClick={() => setShowPopup(false)}>X</button>
            </div>
        </div>
        
    </div>
  )
}

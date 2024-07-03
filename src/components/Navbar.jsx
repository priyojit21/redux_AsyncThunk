import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../features/userDetailSlice';

export default function Navbar() {

    const[searchItem,setSearchItem] = useState("");

    const dispatch = useDispatch();
    const{users} = useSelector((state) => state.app);

    //search functionality
    useEffect(() =>{
        dispatch(searchUser(searchItem));
    },[searchItem])

    return (
        <nav className="navbar w- 100 navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h4 className="navbar-brand" >RTK</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
                        <li className="nav-item mx-2">
                            <Link to="/" className="nav-link active" aria-current="page" >Create Post</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/read" className="nav-link" >All Post ({users.length})</Link>
                           
                        </li>
                    </ul>
                    <form className="d-flex mx-2">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchItem(e.target.value)} />
                        
                    </form>
                </div>
            </div>
        </nav>
    )
}

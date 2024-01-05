import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import cartContext from '../context/cartlist/cartContext'

export default function Navbar() {
    const prop = useContext(cartContext);
    const [text, setText] = useState();
    const searchItem = () => {
        fetch(`https://dummyjson.com/products/search?q=${text}`)
            .then(res => res.json())
            .then(res =>{
                console.log(res)
                prop.setSearch(res.products);
                console.log(prop.search)
            });
    }

    const searchText = (e) =>{
        e.preventDefault();
        setText(e.target.value)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">KARTIT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">cart</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={searchItem}>Search</button>
                        </form> */}
                        <form className="d-flex">
                            <input className="form-control me-2" onChange={searchText} placeholder="Search"/>
                            <Link to='/search' className="btn btn-outline-success" onClick={searchItem}>Search</Link>
                        </form> 
                    </div>
                </div>
            </nav>
        </>
    )
}

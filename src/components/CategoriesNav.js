import React from 'react'
import { Link } from "react-router-dom";

export default function CategoriesNav() {
    return (
        <div>
            <ul className="nav nav-tabs">
                {/* <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Active</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/smartphones">smartphones</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/laptops">laptops</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/fragrances">fragrances</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/skincare">skincare</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/groceries">groceries</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home-decoration">home-decoration</Link>
                </li>
            </ul>
        </div>
    )
}

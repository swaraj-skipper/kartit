import React from 'react'
import { Link } from "react-router-dom";

export default function Items(props) {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={props.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <a href='https://tenor.com/en-IN/view/hum-pe-to-hai-hi-no-arpit-bala-gif-15558392109608424062' target='_blank' style={{color:"black",textDecoration:"none"}}><h5 className="card-title">{props.description}</h5></a>
                <p className="card-text">{props.title}</p>
                <span className="badge text-bg-success">{props.rating} &#9733;</span>
                <div className='line'>
                    <h5 className="card-title">Rs {props.price}</h5>
                    <p className="card-text">{props.discountPercentage} off</p>
                </div>
                <p className="card-text">{props.stock} left </p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}

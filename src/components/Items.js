import React, { useContext} from 'react'
// import {Link} from 'react-router-dom';
// import Cart from './Cart';
import cartContext from '../context/cartlist/cartContext';
import { Link } from 'react-router-dom';

export default function Items(props) {
    const prop = useContext(cartContext);

    const addToCart =()=>{
        let item = {
            thumbnail: props.thumbnail,
            title: props.title,
            price: props.price,
            quantity: 1,
            id: props.id
        }

        const existingItem = prop.cartlist.find(eitem => eitem.id === item.id);

        if(existingItem)
        {
            existingItem.quantity += item.quantity
        }
        else{
            const newList = [...prop.cartlist, item];
            prop.setCartlist(newList);
        }
    }

    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={props.thumbnail} className="card-img-top img" alt="..." />
            <div className="card-body">
                <a href='https://tenor.com/en-IN/view/hum-pe-to-hai-hi-no-arpit-bala-gif-15558392109608424062' rel="noopener noreferrer" target='_blank' style={{color:"black",textDecoration:"none"}}><h5 className="card-title">{props.description.slice(0,45)}...</h5></a>
                <p className="card-text">{props.title}</p>
                <span className="badge text-bg-success">{props.rating} &#9733;</span>
                <div className='line'>
                    <h5 className="card-title">Rs {props.price}&nbsp;</h5>
                    <p className="card-text" style={{color:'green'}}>{props.discountPercentage} off</p>
                </div>
                <p className="card-text" style={{color:'red'}}>{props.stock<=10?`Hurry only ${props.stock} left!`:""}</p>
                {/* <Link to="/cart" onClick={addToCart} className="btn btn-primary">Add to Cart</Link> */}
                <Link to="/cart" onClick={addToCart} className="btn btn-primary">Add to Cart</Link>
            </div>
        </div>
    )
}   

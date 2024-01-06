import React, { useState, useContext } from 'react';
import cartContext from '../context/cartlist/cartContext';

export default function CartItem(props) {
    const [total, setTotal] = useState(props.price);
    const prop = useContext(cartContext);

    const item = prop.cartlist.find(elem => elem.id === props.id);
    const increase = () => {
        item.quantity += 1;
        setTotal(item.quantity * props.price);
    }

    // const decrease = () => {
    //     item.quantity -= 1;
    //     setTotal(item.quantity * props.price);
    //     console.log(prop.cartlist)   
    //     if (item.quantity === 0) {
    //         prop.cartlist = prop.cartlist.filter(elem => elem.id !== props.id)
    //     }
    // }

    const decrease = () => {
        item.quantity -= 1;
        setTotal(item.quantity * props.price);
        
        if (item.quantity === 0) {
            prop.setCartlist(pCartlist => pCartlist.filter(elem => elem.id !== props.id));
        } else {
            prop.setCartlist(pCartlist => pCartlist.map(elem => (elem.id === props.id ? item : elem)));
        }

        console.log(prop.cartlist)
    };

    const remove = () => {
        prop.setCartlist(pCartlist => pCartlist.filter(elem => elem.id !== props.id));
    }
    
    return (
        <>
            {
                <div className="cart-item">
                    <img className='simg column' src={props.thumbnail} alt='img'></img>
                    <div className="column">{props.title}</div>
                    <div className="column">{props.price}</div>
                    <div className="column"><button onClick={decrease}>-</button>&nbsp;{item.quantity}&nbsp;<button onClick={increase}>+</button></div>
                    <div className="column">{total}</div>
                    <div className="column">
                        <button className="remove-btn" onClick={remove}>Remove</button>
                    </div>
                </div>
            }

        </>
    )
}

import React, { useContext } from 'react'
import CartItem from './CartItem'
import cartContext from '../context/cartlist/cartContext'

export default function Cart() {
    const prop = useContext(cartContext)

    return (
        <div>
            {!prop.cartlist.length ? <div className='msg'>It's Empty here! Add something</div> :
                <div className="cart-container">
                    <div className="cart-header">
                        <div className="column">Product</div>
                        <div className="column">Name</div>
                        <div className="column">Price</div>
                        <div className="column">Quantity</div>
                        <div className="column">Total</div>
                        <div className="column">Remove</div>
                    </div>
                    {
                        prop.cartlist.map((elem) => {
                            return (
                                <div className='cart-container' key={elem.thumbnail}>
                                    <CartItem id={elem.id} thumbnail={elem.thumbnail} title={elem.title} price={elem.price} quantity={elem.quantity} />
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

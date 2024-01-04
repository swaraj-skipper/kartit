import React, { useContext } from 'react'
import CartItem from './CartItem'
import cartContext from '../context/cartlist/cartContext'

export default function Cart() {
    const prop = useContext(cartContext)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    prop.cartlist.map((elem) => {
                        return (
                            <tbody key={elem.thumbnail}>
                                <CartItem thumbnail={elem.thumbnail} title={elem.title} price={elem.price} quantity={elem.quantity} />

                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}

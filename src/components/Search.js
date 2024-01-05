import React, { useContext } from 'react'
import cartContext from '../context/cartlist/cartContext'
import Items from './Items';

export default function Search() {
    const prop = useContext(cartContext);
    return (
        <div className='row'>
            {
                prop.search.map((elem) => {
                    return (
                        <div key={elem.id} className='col-md-3'>
                            <Items title={elem.title} description={elem.description} discountPercentage={elem.discountPercentage} thumbnail={elem.thumbnail} rating={elem.rating} price={elem.price} stock={elem.stock} />
                        </div>
                    )
                })
            }
        </div>
    )
}

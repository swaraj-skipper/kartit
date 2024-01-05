import React, { useEffect, useState } from 'react'
import Items from './Items'

export default function Category(props) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `https://dummyjson.com/products${props.type}`;
                // let url = `https://dummyjson.com/products`;
                let data = await fetch(url);
                let response = await data.json();
                setItem(response.products)
            } catch (error) {
                console.log(error)
            }

        }
        // fetch('')
        //     .then(res => res.json())
        //     .then((res) => {
        //         setItem(res.products)
        //     })
        fetchData();
    }, [props])


    return (
        <>
            <div className='row'>
                {
                    item.map((elem) => {
                        return (
                            <div key={elem.id} className='col-md-3'>
                                <Items title={elem.title} description={elem.description} discountPercentage={elem.discountPercentage} thumbnail={elem.thumbnail} rating={elem.rating} price={elem.price} stock={elem.stock} />
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

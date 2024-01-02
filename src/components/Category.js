import React from 'react'
import Items from './Items'

export default function Category() {

    let item = [
        {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
                'https://i.dummyjson.com/data/products/1/1.jpg',
                'https://i.dummyjson.com/data/products/1/2.jpg',
                'https://i.dummyjson.com/data/products/1/3.jpg',
                'https://i.dummyjson.com/data/products/1/4.jpg',
                'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            title: "iPhone 9"
        },
        {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 2,
            images: [
                'https://i.dummyjson.com/data/products/1/1.jpg',
                'https://i.dummyjson.com/data/products/1/2.jpg',
                'https://i.dummyjson.com/data/products/1/3.jpg',
                'https://i.dummyjson.com/data/products/1/4.jpg',
                'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            title: "iPhone 9"
        },
        {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 3,
            images: [
                'https://i.dummyjson.com/data/products/1/1.jpg',
                'https://i.dummyjson.com/data/products/1/2.jpg',
                'https://i.dummyjson.com/data/products/1/3.jpg',
                'https://i.dummyjson.com/data/products/1/4.jpg',
                'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            title: "iPhone 9"
        },
        {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 3,
            images: [
                'https://i.dummyjson.com/data/products/1/1.jpg',
                'https://i.dummyjson.com/data/products/1/2.jpg',
                'https://i.dummyjson.com/data/products/1/3.jpg',
                'https://i.dummyjson.com/data/products/1/4.jpg',
                'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            title: "iPhone 9"
        },
        {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 3,
            images: [
                'https://i.dummyjson.com/data/products/1/1.jpg',
                'https://i.dummyjson.com/data/products/1/2.jpg',
                'https://i.dummyjson.com/data/products/1/3.jpg',
                'https://i.dummyjson.com/data/products/1/4.jpg',
                'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            title: "iPhone 9"
        },
        {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 3,
            images: [
                'https://i.dummyjson.com/data/products/1/1.jpg',
                'https://i.dummyjson.com/data/products/1/2.jpg',
                'https://i.dummyjson.com/data/products/1/3.jpg',
                'https://i.dummyjson.com/data/products/1/4.jpg',
                'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            title: "iPhone 9"
        },

    ]

    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((res) => {
            console.log(res)
        })


    return (
        <>
            <div className='row'>
                {
                    item.map((elem)=>{
                        return (
                        <div key={elem.id} className='col-md-3'>
                            <Items title = {elem.title} description = {elem.description} discountPercentage = {elem.discountPercentage} thumbnail = {elem.thumbnail} rating = {elem.rating} price = {elem.price} stock = {elem.stock} />
                        </div>
                    )})
                }
               
            </div>
        </>
    )
}

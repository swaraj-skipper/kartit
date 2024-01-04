import React from 'react'

export default function CartItem(props) {
    return (

            <tr>
                <th scope="row"><img src={props.thumbnail} alt='img'></img></th>
                <td>{props.title}</td>
                <td>{props.quantity}</td>
                <td>{props.price}</td>
                <td>del</td>
            </tr>
    
    )
}

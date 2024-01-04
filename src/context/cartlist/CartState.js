
import cartContext from './cartContext';
import { useState } from "react";

const CartState = (props) => {
    const [cartlist,setCartlist] = useState([]);
    
    return (
        <cartContext.Provider value = {{cartlist,setCartlist}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartState;


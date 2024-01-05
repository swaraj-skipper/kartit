
import cartContext from './cartContext';
import { useState } from "react";

const CartState = (props) => {
    const [cartlist,setCartlist] = useState([]);
    const [search,setSearch] = useState([]);
    
    return (
        <cartContext.Provider value = {{cartlist,setCartlist,search,setSearch}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartState;


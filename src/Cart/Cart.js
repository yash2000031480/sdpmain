import { useState, useEffect } from "react";
import Header from "../Header/Header"

const Cart = (props) => {
    // console.log(props,"cart props")
    const [cartItems, setCartItems] = useState(props.location.state.selected)

    useEffect(() => {
        // let cartArr=[];
        // cartArr.push(props.location.state.selected)
        // setCartItems(prevState =>[...prevState,props.location.state.selected])
        // // setCartItems(prevState =>{
        // //     return {
        // //         ...prevState,
        // //             id: props.location.state.selected.id
        // //     }
        // // })
    }, [props.location.state.selected])

    console.log(cartItems, "cart items")
    return (
        <>
            <Header />
            <p>in cart</p>
            {cartItems.map(item => (
                <div>
                    <p>{item.name}</p>
                    <img className="bat-images" src ={item.imgSrc} alt="img" />
                </div>
            ))}

        </>
    )
}

export default Cart
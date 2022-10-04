import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,


    SAVE_SHIPPING_ADDRESS,

    
    PAYMENT_METHOD

} from '../ReducerConstants/CartConstants'

//getState allows us to access any part of the state

export const addToCart = (id, qty) => async (dispatch, getState) => {
   
    
        const {data } =  await axios.get(`http://127.0.0.1:8000/api/products/${id}`)

        dispatch({
            type: CART_ADD_ITEM, 
            payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }})

        //adding the cart items inside of local storage

        localStorage.setItem('cartItems', JSON.stringify(getState().Cart.cartItems))
}

export const filteredCart = (id) => async(dispatch, getState) => {
   
        dispatch({type: CART_REMOVE_ITEM, payload: id})

        localStorage.setItem('cartItems', JSON.stringify(getState().Cart.cartItems))

    
}

export const saveShipping = (data) => async(dispatch) => {
   
    dispatch({type: SAVE_SHIPPING_ADDRESS
        , payload: data})

    localStorage.setItem('Address', JSON.stringify(data))

}


export const savePayment = (data) => async(dispatch) => {
   
    dispatch({type: PAYMENT_METHOD
        , payload: data})

    localStorage.setItem('Payment', JSON.stringify(data))
}

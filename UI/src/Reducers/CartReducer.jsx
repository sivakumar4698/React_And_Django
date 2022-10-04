import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,

    SAVE_SHIPPING_ADDRESS,

    PAYMENT_METHOD
} from '../ReducerConstants/CartConstants'


export const CartReducer = (state = {cartItems:[], Address: {}, Payment:{}}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)

            if (existItem) {
                //If the item already exists in the cart, then dont return it.
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:

        return{
            ...state,
            cartItems : state.cartItems.filter((x)=> x.product !== action.payload)
        }

        case SAVE_SHIPPING_ADDRESS:
        return{
            ...state,
            Address: action.payload
        }

        case PAYMENT_METHOD:
            return{
                ...state,
                Payment: action.payload
            }

        default:
            return state
        }
        
}
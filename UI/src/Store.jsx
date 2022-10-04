import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {ProductReducer} from './Reducers/ProductReducer'
import {SingleProductReducer} from './Reducers/ProductReducer'
import {CartReducer} from './Reducers/CartReducer'
import {UserLoginReducer, UserRegisterReducer, userProfileReducer, profileUpdateReducer} from './Reducers/UserReducer'

const reducer = combineReducers({
    productList : ProductReducer,
    ProductDetails: SingleProductReducer,
    Cart: CartReducer,
    User: UserLoginReducer,
    Register : UserRegisterReducer,
    Profile : userProfileReducer,
    UpdateProfile : profileUpdateReducer
})

const AddCartItemsFromLocalStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []

const UserFromLocalStorage = localStorage.getItem('User') ? 
    JSON.parse(localStorage.getItem('User')) :null

const AddressFromLocalStorage = localStorage.getItem('Address') ? 
    JSON.parse(localStorage.getItem('Address')) :{}

const PaymentFromLocalStorage = localStorage.getItem('Payment') ? 
    JSON.parse(localStorage.getItem('Payment')) :{}

const initialState = {
    Cart: {cartItems: AddCartItemsFromLocalStorage, Address:AddressFromLocalStorage, Payment:PaymentFromLocalStorage},
    User: {user: UserFromLocalStorage}
   
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
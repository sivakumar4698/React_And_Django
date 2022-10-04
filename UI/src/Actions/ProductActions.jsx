import axios from 'axios'
import {
    ALL_PRODUCTS_SUCESS,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_REJECTED,
    PRODUCT_SUCESS,
    PRODUCT_REQUEST,
    PRODUCT_REJECTED

    

} from '../ReducerConstants/ProductConstants'

//get all products

export const getProducts = () => async(dispatch) => {
    try{
        dispatch({type: ALL_PRODUCTS_REQUEST})
        const {data } =  await axios.get('http://127.0.0.1:8000/api/products/')

        dispatch({type: ALL_PRODUCTS_SUCESS, payload: data})

    }
    catch(error){

        dispatch({type: ALL_PRODUCTS_REJECTED, 
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        
        })

    }
}

//get product details

export const getProduct = (id) => async(dispatch) => {
    try{
        dispatch({type: PRODUCT_REQUEST})
        const {data } =  await axios.get(`http://127.0.0.1:8000/api/products/${id}`)

        dispatch({type: PRODUCT_SUCESS, payload: data})

    }
    catch(error){

        dispatch({type: PRODUCT_REJECTED, 
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}
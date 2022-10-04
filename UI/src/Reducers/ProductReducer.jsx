import {
    ALL_PRODUCTS_SUCESS,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_REJECTED,
    PRODUCT_REQUEST,
PRODUCT_SUCESS,
PRODUCT_REJECTED

} from '../ReducerConstants/ProductConstants'

export const ProductReducer = (state={products:[]}, action) => {

    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{loading:true, products:[]}

        case ALL_PRODUCTS_SUCESS:
            return{loading:false, products: action.payload}

        case ALL_PRODUCTS_REJECTED:
            return{loading:false, error: action.payload}
        
        default:
            return state
    }

}

export const SingleProductReducer = (state={product:{reviews:[ ]}}, action) => {

    switch(action.type){
        case PRODUCT_REQUEST:
            return{loading:true, ...state}

        case PRODUCT_SUCESS:
            return{loading:false, product: action.payload}

        case PRODUCT_REJECTED:
            return{loading:false, error: action.payload}
        
        default:
            return state
    }

}
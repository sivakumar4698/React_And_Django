import {
   LOGIN_REQUEST,
   LOGIN_SUCESS,
LOGIN_REJECTED,

 USER_LOGOUT,

 REGISTER_REQUEST,
   REGISTER_SUCESS,
REGISTER_REJECTED,

USERPROFILE_REQUEST,
USERPROFILE_SUCCESS,
USERPROFILE_REJECTED,
USERPROFILE_RESET,


UPDATE_PROFILE_REQUEST,
UPDATE_PROFILE_SUCCESS,
UPDATE_PROFILE_REJECTED,
UPDATE_PROFILE_RESET

} from '../ReducerConstants/UserConstants'

export const UserLoginReducer = (state={}, action) => {

    switch(action.type){
        case LOGIN_REQUEST:
            return{loading:true}

        case LOGIN_SUCESS:
            return{loading:false, user: action.payload}

        case LOGIN_REJECTED:
            return{loading:false, error: action.payload}

        case USER_LOGOUT:
            return{}
        
        default:
            return state
    }

}

export const UserRegisterReducer = (state={}, action) => {

    switch(action.type){
        case REGISTER_REQUEST:
            return{loading:true}

        case REGISTER_SUCESS:
            return{loading:false, user: action.payload}

        case REGISTER_REJECTED:
            return{loading:false, error: action.payload}

        case USER_LOGOUT:
            return{}
        
        default:
            return state
    }

}


export const userProfileReducer = (state={profile: {}}, action) => {

    switch(action.type){
        case USERPROFILE_REQUEST:
            return{...state, loading:true}

        case USERPROFILE_SUCCESS:
            return{loading:false, profile: action.payload}

        case USERPROFILE_REJECTED:
            return{loading:false, error: action.payload}
        
        case USERPROFILE_RESET:
            return{profile:{}}

        default:
            return state
    }

}

export const profileUpdateReducer = (state={}, action) => {

    switch(action.type){
        case UPDATE_PROFILE_REQUEST:
            return{loading:true}

        case UPDATE_PROFILE_SUCCESS:
            return{loading:false, success: true,  user: action.payload}

        case UPDATE_PROFILE_REJECTED:
            return{loading:false, error: action.payload}

        case UPDATE_PROFILE_RESET:
            return{}

        default:
            return state
    }
}
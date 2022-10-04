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
import axios from 'axios'


export const userLoggin = (username, password) => async(dispatch) => {
    try{
        dispatch({type: LOGIN_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} =  await axios.post('http://127.0.0.1:8000/api/token/user/login/',
        {'username': username, 'password': password},
        config
        )

        dispatch({type: LOGIN_SUCESS, payload: data})

        localStorage.setItem('User', JSON.stringify(data))

    }
    catch(error){
        dispatch({type: LOGIN_REJECTED, 
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}


export const UserLogout = () => (dispatch)=> {
    localStorage.removeItem('User')
    dispatch({type: USER_LOGOUT})
    dispatch({type: USERPROFILE_RESET})
}


export const userRegister = (username, password, email, name) => async(dispatch) => {
    try{
        dispatch({type: REGISTER_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} =  await axios.post('http://127.0.0.1:8000/api/user/register/',
        {'username': username, 'password': password, 'email': email, 'name':name},
        config
        )

        dispatch({type: REGISTER_SUCESS, payload: data})

        dispatch({type: LOGIN_SUCESS, payload: data})


        localStorage.setItem('User', JSON.stringify(data))

    }
    catch(error){
        dispatch({type: REGISTER_REJECTED, 
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}


export const userProfile = (id) => async(dispatch, getState) => {
    try{
        dispatch({type: USERPROFILE_REQUEST})

        const{
            User: {user}
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${user.token}`
            }
        }
        const {data} =  await axios.get(`http://127.0.0.1:8000/api/user/${id}/`, config)

        dispatch({type: USERPROFILE_SUCCESS, payload: data})


        localStorage.setItem('User', JSON.stringify(data))
    }

    catch(error){
        dispatch({type: USERPROFILE_REJECTED, 
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}


export const userUpdateProfile = (userdetails) => async(dispatch, getState) => {
    try{
        dispatch({type: UPDATE_PROFILE_REQUEST})

        const{
            User: {user}
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${user.token}`
            }
        }
        const {data} =  await axios.put(`http://127.0.0.1:8000/api/user/profile/update/`, userdetails, config)

        dispatch({type: UPDATE_PROFILE_SUCCESS, payload: data})

        dispatch({type: LOGIN_SUCESS, payload: data})

        localStorage.setItem('User', JSON.stringify(data))
    }

    catch(error){
        dispatch({type: UPDATE_PROFILE_REJECTED, 
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}
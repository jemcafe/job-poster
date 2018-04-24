import axios from 'axios';

// Action types
export const LOGIN = 'LOGIN',
             REGISTER = 'REGISTER',
             LOGOUT = 'LOGOUT',
             GET_USER = 'GET_USER';

// Action creators
export const login = (body, history) => {
    return {
        type: LOGIN,
        payload: axios.post('/login', body).then( user => {
            history.push('/');
            return user.data
        })
    }
}

export const register = (body, history) => {
    return {
        type: REGISTER,
        payload: axios.post('/register', body).then( user => {
            history.push('/');
            return user.data
        })
    }
}

export const logout = (history) => {
    return {
        type: LOGOUT,
        payload: axios.post('/logout').then( () => history.push('/') )
    }
}

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('/user').then( user => user.data )
    }
}
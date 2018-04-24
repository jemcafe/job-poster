import { LOGIN, REGISTER, LOGOUT, GET_USER } from './actions';

const initialState = { };

// Reducer
export default (state = initialState, action) => {
    let { type, payload } = action;
    
    switch (type) {
        case LOGIN + '_FULFILLED': 
            return {...state, user: payload}
        case REGISTER + '_FULFILLED': 
            return {...state, user: payload}
        case LOGOUT + '_FULFILLED': 
            return {...state, user: {} }
        case GET_USER + '_FULFILLED': 
            return {...state, user: payload }
        default:
            return state;
    }
}
import {SIGN_UP, SIGN_IN,GOOGLE_AUTH} from "./Auth.type"


const INITIAL_STATE = {};

const AuthReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case SIGN_IN:
            return {
                ...state,
            };
        case SIGN_UP:
            return {
                ...state,
            };
        case GOOGLE_AUTH:
            return {
                ...state,
            };
            default:
                return {...state};
    }
}

export default AuthReducer;



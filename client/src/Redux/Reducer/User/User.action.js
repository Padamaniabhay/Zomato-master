import axios from "axios"

//redux types
import { GET_USER,SELF } from "./User.type";

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/${_id}`,
        });

        return dispatch({type:GET_USER, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};



export const getMySelf = () => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/`,
        });

        localStorage.setItem("zomato")

        return dispatch({ type: SELF, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}
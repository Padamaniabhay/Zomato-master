import axios from "axios"

//redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./Restaurant.type";

export const getRestaurant = () => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "get",
            url: "http://localhost:4000/restaurant?city=Rajkot",
        });

        return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};
export const getSpecificRestaurant = (_id) => async (dispatch) => {
    try {
        const restaurant = await axios({
            method: "get",
            url: `http://localhost:4000/restaurant/${_id}`,
        });

        return dispatch({ type: GET_SPECIFIC_RESTAURANT, payload: restaurant.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};
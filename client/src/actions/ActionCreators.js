import { GET_ITEMS , ADD_ITEMS ,LOAD_ITEMS } from "./types";
import axios from 'axios';


export const getItems = () => dispatch => {
    dispatch(setItemsLoading());

    axios.get('/4Sale')             //dOUBT ---> what is this '/4Sale' here  exactly  ?
    .then(res => dispatch({
        type:GET_ITEMS,
        payload: res.data
    }))
};


export const addItem = (item) => dispatch => {
    axios.post('/sell' , item)
    .then(res => dispatch({
        type: ADD_ITEMS,
        payload: res.data
    }))
};




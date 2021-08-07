import { GET_ITEMS , ADD_ITEMS ,LOAD_ITEMS } from "../actions/types";

const initialState = {
    items:[
        {
            title: "Football",
            description:"This is a football",
            price: 2000,
            category: "Sports"

        },
        {
            title: "Basketball",
            description:"Thid is a basketball",
            price: 3000
        }
    ],
    loading : false
}

const productReducers = (state = initialState , action) => {
    switch(action.type){
        case GET_ITEMS :
            return {
                ...state,
                items:action.payload,
                loading:false
            };



        case ADD_ITEMS :
            return {
                ...state,
                items:[action.payload , ...state.items]
            }
        
        default : return state;
    }

}

export default productReducers;
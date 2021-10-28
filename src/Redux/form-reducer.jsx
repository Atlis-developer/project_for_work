import { formAPI } from "../Api/api";

export const setPosition = (position) =>({ type: 'userSeach-reducer/SET-POSITION', position: position})


const SET_POSITION = 'userSeach-reducer/SET-POSITION'


let defaultState = {
    position: [ ]
}

export const formReducer = (state = defaultState, action) => {
   
    switch (action.type) {
        case SET_POSITION: {
            return {
                ...state,
                position: [...state.position, ...action.position]
            }
        };
        default:
            return state;
    }
};

export const formThunkCreator = () => async (dispatch) =>{
    let response = await formAPI.getPosition()

        dispatch(setPosition(response.data.positions));
}

import { usersAPI } from "../Api/api";

export const setUsers = (users) =>({ type: 'userSeach-reducer/SET-USERS', users: users})

export const totalPage = (pages) =>({type: 'userSeach-reducer/ALL-PAGES', pages:pages})

export const addToken = (token) =>({ type: 'userSeach-reducer/ADD-TOKEN', token: token})

const SET_USERS = 'userSeach-reducer/SET-USERS';
const ALL_PAGES = 'userSeach-reducer/ALL-PAGES';
const ADD_TOKEN = 'userSeach-reducer/ADD-TOKEN';


let defaultState = {
    users: [ ],
    pageSize: 9,
    allPages: null,
    token: null
}

export const usersReducer = (state = defaultState, action) => {
   
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        };
        case ALL_PAGES: {
            return {
                ...state,
                allPages: action.pages
            }
        };
        case ADD_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        };
        default:
            return state;
    }
};

export const userThunkCreator = (numberPage, pageSize) => async (dispatch) =>{
    let response1 = await usersAPI.getUsers(numberPage, pageSize)
        dispatch(setUsers(response1.data.users));
        dispatch(totalPage(response1.data.total_pages));
    let response2 = await usersAPI.getToken();
        dispatch(addToken(response2.data.token));
}

export const addUsers = (numberPage, pageSize) => async (dispatch) =>{
    let response = await usersAPI.getUsers(numberPage, pageSize)
        dispatch(setUsers(response.data.users));
    let response2 = await usersAPI.getToken();
        dispatch(addToken(response2.data.token));
}



export const setUserThunk = (user) => async (dispatch, getState) =>{


    let response2 = await usersAPI.getToken();
    debugger
    let response = await usersAPI.setUser(user, response2.data.token);
    debugger    
    
}
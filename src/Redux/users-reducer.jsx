import { usersAPI } from "../Api/api";

export const setUsers = (users) =>({ type: 'userSeach-reducer/SET-USERS', users: users})

export const totalPage = (pages) =>({type: 'userSeach-reducer/ALL-PAGES', pages:pages})

const SET_USERS = 'userSeach-reducer/SET-USERS';
const ALL_PAGES = 'userSeach-reducer/ALL-PAGES'


let defaultState = {
    users: [ ],
    pageSize: 9,
    allPages: null
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
        default:
            return state;
    }
};

export const userThunkCreator = (numberPage, pageSize) => async (dispatch) =>{
    let response = await usersAPI.getUsers(numberPage, pageSize)
        dispatch(setUsers(response.data.users));
        dispatch(totalPage(response.data.total_pages));
}

export const addUsers = (numberPage, pageSize) => async (dispatch) =>{
    let response = await usersAPI.getUsers(numberPage, pageSize)
        dispatch(setUsers(response.data.users));
}
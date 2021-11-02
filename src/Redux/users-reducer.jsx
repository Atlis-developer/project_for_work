import { usersAPI } from "../Api/api";

export const setUsers = (users) =>({ type: 'userSeach-reducer/SET-USERS', users: users})

export const totalPage = (pages) =>({type: 'userSeach-reducer/ALL-PAGES', pages:pages})

export const addToken = (token) =>({ type: 'userSeach-reducer/ADD-TOKEN', token: token})

export const addError = (message) =>({ type: 'userSeach-reducer/ADD-ERROR', message: message})

export const addModal = (modal) =>({ type: 'userSeach-reducer/ADD-MODAL', modal: modal})

const SET_USERS = 'userSeach-reducer/SET-USERS';
const ALL_PAGES = 'userSeach-reducer/ALL-PAGES';
const ADD_TOKEN = 'userSeach-reducer/ADD-TOKEN';
const ADD_ERROR = 'userSeach-reducer/ADD-ERROR';
const ADD_MODAL = 'userSeach-reducer/ADD-MODAL';

let defaultState = {
    users: [ ],
    pageSize: 9,
    allPages: null,
    token: null,
    messageError: '',
    modal: false,
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
        case ADD_ERROR: {
            return {
                ...state,
                messageError: action.message
            }
        };
        case ADD_MODAL: {
            return {
                ...state,
                modal: action.modal
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
}

export const addUsers = (numberPage, pageSize) => async (dispatch) =>{
    let response = await usersAPI.getUsers(numberPage, pageSize)
        dispatch(setUsers(response.data.users));
    let response2 = await usersAPI.getToken();
        dispatch(addToken(response2.data.token));
}

export const setUserThunk = (user) => async (dispatch) =>{
    let response2 = await usersAPI.getToken();
    let response = await usersAPI.setUser(user, response2.data.token);
    if(response.data.success == true){
        dispatch(addModal(true));
        dispatch(setUsers(response.data.users));
        dispatch(totalPage(response.data.total_pages));
    }else if(response.data.success == false){
        dispatch(addError(response.data.message));
    }   
}

export const changeModal = (modal) => (dispatch) =>{
    dispatch(addModal(modal));
}
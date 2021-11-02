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
    token: '',
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
    // if(response.data.success == true){
    //     dispatch(addModal(true));
    //     dispatch(setUsers(response.data.users));
    //     dispatch(totalPage(response.data.total_pages));
    // }else if(response.data.success == false){
    //     dispatch(addError(response.data.message));
    // }   
}

export const changeModal = (modal) => (dispatch) =>{
    dispatch(addModal(modal));
}

/*"eyJpdiI6Im91bDVjMUxVUk1kNkM5dXpZS05jclE9PSIsInZhbHVlIjoiVVFjbGdNS0Q1MXFVZHZ2aUFqVGZYbDVac3hxeCswQnpJaE51OTdKWU9LYWt6bHlNdEZubERWVG9pc3dXb1JLXC9JSWNsQlp6eUZZNTlHbFdVZkY5RkpBPT0iLCJtYWMiOiIyMGNlMDk0MTY3MjM1MzQwNGUyMjk4ODk3NzM5ODlhZDEwMWEyMjdhNTFjMDQ5NjVmMmFhNTBlNzRmMDU5NGU5In0="*/
/*"eyJpdiI6InRQaGtCSGV2VzkwYkxFRVZjSk44bGc9PSIsInZhbHVlIjoiRlBpMVhJZ0VsaFFYTWVMWVFTN1J2V1daZ1VROWJJMGlSM2swTzhzenRrNldocXA1dDB0NVJsa1B3WFFlVnRTZnlHNktqVFo1R0xqRmFxeEozckwxR0E9PSIsIm1hYyI6IjY2NDc0MWNlNTVkZGZlMzVkZTE5OTkyMWRiMGRkN2U5NjQzNDAxNWE3MTU3NmNmYWY0ODNkOGU5OTUwNWI0OTQifQ=="*/

/*eyJpdiI6InFMVmExZkRqOERVN3NaK2x6YVp4aEE9PSIsInZhbHVlIjoibm1oZ2RjT2tRc0kyNk9vdEc3NkdZaFBUSE1UQUp5bzNYd3FtUlRjeWJFZ3dBZ0VjQ3JzbFg2ZG9JMWtPNkFIQ0NTNGlDYU9JaDFScEJRV0JVUXpFRnc9PSIsIm1hYyI6IjI1MDAyMjJhNmMxNTVhMTYxZDU3NjViN2QxNGE2OTgyMzdjZjMxOTYxYTYwMDYwMGNkZjJhODlmYzlkYzYwZWMifQ*/
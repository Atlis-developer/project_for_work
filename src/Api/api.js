import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
})

export const usersAPI = {

    getUsers(numberPage, pageSize) {
        return instanse.get(`users?page=${numberPage}&count=${pageSize}`).
            then(response => {
                return response
            })
    }
}

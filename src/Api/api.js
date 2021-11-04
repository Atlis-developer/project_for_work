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
    },
    getToken() {
        return instanse.get(`token`).
            then(response => {

                return response
            })
    },
    setUser(name, email, phone, position_id, photo, token) {

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('position_id', position_id);
        formData.append('photo', photo);
 
        return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data;',
                "Token": token
            },
        })
            .then((res) => res.json())
            .then((result) => {
                return result
            })

    }
}

export const formAPI = {
    getPosition() {
        return instanse.get(`positions`).
            then(response => {
                return response
            })
    },
}

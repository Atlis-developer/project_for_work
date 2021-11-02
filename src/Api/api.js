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
    getToken(){
        return instanse.get(`token`).
            then(response => {

                return response
            })
    },
    setUser(user, token){
        
        const formData = new FormData();
        formData.append('position_id', user.position);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('phone', user.phone);
        formData.append('photo', user.photo);
        debugger
        return axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, 
        {
            headers: {
                'Token': token
            },
            body: formData  
        }).then(response => {
            debugger
                return response
            })
    },
}

export const formAPI = {
    getPosition(){
        return instanse.get(`positions`).
            then(response => {
                return response
            })
    },
}
/*const formData = new FormData();
        formData.append('position_id', user.position);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('phone', user.phone);
        formData.append('photo', user.photo)
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': token,}})
        .then(function(response) { return response.json() }) 
        .then(function(data) { console.log(data)})*/

/*```js var formData = new FormData(); 
// file from input type='file' var fileField = document.querySelector('input[type="file"]'); 
formData.append('position_id', 2); 
formData.append('name', 'Jhon'); 
formData.append('email', 'Jhon@gmail.com'); 
formData.append('phone', '+380955388485'); 
formData.append('photo', fileField.files[0]);

fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': token, }, }) 
.then(function(response) { return response.json(); }) 
.then(function(data) { console.log(data); 
if(data.success) { // process success response } 
else { // proccess server errors } }) 
.catch(function(error) { // proccess network errors })```*/

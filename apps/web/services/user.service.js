import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    getAll
};

function login(username, password) {
    return fetchWrapper.post(`/api/users/authenticate`, { username, password })
        .then(user => {
            //publish user with basic auth credentials to subscribers and store in 
            //local storage to stay logged in between page refreshes
            user.authdata = window.btoa(username + ':' + password);
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            console.log("Fetched user: ", user)
            return user;
        }).catch(err=>console.log("Fetch error: ",err));
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}

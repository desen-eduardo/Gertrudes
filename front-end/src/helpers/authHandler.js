import Cookies from 'js-cookie';
import Cookie from 'js-cookie';

export const isLogged = () => {
    let token = Cookie.get('token');
    return (token) ? true : false;
}

export const doLogin = (token) => {
    Cookie.set('token',token);
}

export const doLogout = () => {
    Cookie.remove('token');
}
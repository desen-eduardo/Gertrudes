import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = 'http://localhost:8000/api';

const apiFetchPost = async (endpoint,body) => {

    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+endpoint,{
        method:'POST',
        headers:{
            'Accept':'Application/json',
            'Content-Type':'Application/json'
        },
        body:JSON.stringify(body)
    });

    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/login';
        return;
    }

    return json;
}

const apiFetchGet = async (endpoint,body = []) => {

    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/login';
        return;
    }

    return json;
}

const gertrudesAPI = {
    login:async(email,password) => {
        const json = await apiFetchPost(
            '/auth/login',
            {email,password}
        );
        return json;
    },

    register:async(name,email,phone,address_complement,password) => {
        const json = await apiFetchPost(
            '/auth/register',
            {name,email,phone,address_complement,password}
        );
        return json;
    },

    getListProducts:async() => {
        const json = await apiFetchGet(
            '/products'
        );
        return json.products;
    },

    getLastSale:async() => {
        const json = await apiFetchGet(
            '/last-sale'
        );
        return json.sales;
    },

    getPaySale:async() => {
        const json = await apiFetchGet(
            '/last-sale'
        );
        return json.pay;
    },
}

export default () => gertrudesAPI;
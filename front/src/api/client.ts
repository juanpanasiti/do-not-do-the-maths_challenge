import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://www.dolarito.ar/api/frontend/quotations',
    // maxRedirects: 5,
    // headers: {
    //     Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
    // }
    
});

export const test = axios.create({
    baseURL: 'https://www.dolarsi.com/api'
})
// User-Agent: PostmanRuntime/7.32.2
// Postman-Token: 637de7da-21ab-47c5-bc22-64f4c6cfaa0c
// Host: www.dolarito.ar
// Accept-Encoding: gzip, deflate, br
// Connection: keep-alive
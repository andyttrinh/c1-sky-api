import axios from 'axios';

const KEY = '3d567031a5msh63b6ab0aa325352p110a5cjsndb7594b4107e'

export default axios.create({
    baseURL: 'https://partners.api.skyscanner.net/apiservices/token/v2/',
    
})
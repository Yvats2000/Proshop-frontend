import axios from 'axios';
import { getItemFromCookie } from './utility';

const httpClient = axios.create({
    baseURL: 'http://core-dev.urbanmoney.com',
    timeout: 20000, // indicates, 1000ms ie. 1 second
    headers: {
        "Content-Type": "application/json",
        'Cache-Control': 'no-cache',
        'utm-campaign':'COMMON_LOAN',
        'utm-source':'URBAN_MONEY_WEBSITE',
        'page-type':'Home-UM',
        'utm-medium':'web_desktop'
    }
});



httpClient.interceptors.request.use(function (config) {
    let accesstoken = getItemFromCookie('accessToken')
    accesstoken ? config.headers.accessToken= accesstoken : ''
    
    return config;
});

const setAxiosHeaders = function(keyName, value) {
    console.log(keyName, value);
    httpClient.defaults.headers.common[keyName] = value;
    return true;
}

const resetAxiosHeaders = function(keyName) {
    delete axios.defaults.headers.common[keyName];
    return true;
}

const accessToken = getItemFromCookie('accessToken')
const roleType = getItemFromCookie('roleType')

if (accessToken && roleType) {
    setAxiosHeaders('accessToken', accessToken)
    setAxiosHeaders('roleType', roleType)
} else {
    resetAxiosHeaders('accessToken')
    resetAxiosHeaders('refreshToken')
}


export { httpClient, setAxiosHeaders, resetAxiosHeaders };
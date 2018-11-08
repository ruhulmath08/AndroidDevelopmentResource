import { hashMap} from 'mori';

export const PUBLIC_IP = 'http://192.168.223.34'; // Server Socket Ip
export const LOGIN = 'LOGIN';
export const api = PUBLIC_IP.concat(':3000'); //Server IP
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const INITIAL_STATE =hashMap();
export const TOKEN_GENERATE = 'TOKEN_GENERATE';
export const CLIENT_LIST = 'CLIENT_LIST';
export const TOKEN_GENERATE_SUCCESS = 'TOKEN_GENERATE_SUCCESS';
export const TOKEN_GENERATE_FAILURE = 'TOKEN_GENERATE_FAILURE';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';
export const REMOVE_CLIENT_SUCCESS = 'REMOVE_CLIENT_SUCCESS';
export const REMOVE_CLIENT_FAILURE = 'REMOVE_CLIENT_FAILURE'
export const LOGOUT = 'LOGOUT';
export const LOGOUT_DATA = 'LOGOUT_DATA';
export const SERVER_SOCKET = PUBLIC_IP.concat(':3003');
export const SECRET_KEY_SOCKET = ['ODDUU', 'RAKIN','AFSER','2017'];
export const SOCKET_PORT = '3003';
export const LICENSE_INFO= 'LICENSE_INFO';
export const ADD_LICENSE = 'ADD_LICENSE';
export const ADD_LICENSE_SUCCESS = 'ADD_LICENSE_SUCCESS';
export const ADD_LICENSE_FAILURE = 'ADD_LICENSE_FAILURE';

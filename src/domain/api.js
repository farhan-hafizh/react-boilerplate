import axios from "axios";
import {
	errorInterceptor,
	requestInterceptor,
	responseInterceptor,
} from "../Utils/apiHelper";

const API = axios.create({ baseURL: process.env.REACT_APP_ENDPOINT });

API.interceptors.request.use((req) => {
	req = requestInterceptor(req);
	return req;
});
API.interceptors.response.use(
	(res) => {
		res = responseInterceptor(res);
		return res;
	},
	async (error) => {
		error = await errorInterceptor(error);
		return Promise.reject(error);
	}
);

export const login = (payload) => API.post('/login', payload); 
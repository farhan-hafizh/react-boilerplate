import { setAccessTokenAction } from "../containers/App/actions";

export const requestInterceptor = (req) => {
    if (store.getState().app.isAuthenticated){
        const accessToken = store.getState().app.accessToken;
        req.headers = getTokenHeader(accessToken);
    }
    req.headers.origin = process.env.REACT_APP_ORIGIN;
    return req;
}
export const responseInterceptor = (res) => {
    const { dispatch } = store;
    res = res.data;
    if (res.accessToken){
        const { accessToken } = res;
        dispatch(setAccessTokenAction(accessToken));
    }
    return res;
}
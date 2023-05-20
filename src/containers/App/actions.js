import { SET_ACCESS_TOKEN } from "./constants";

export function setAccessTokenAction(accessToken) {
    return {
        type: SET_ACCESS_TOKEN,
        accessToken
    }
};
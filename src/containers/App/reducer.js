import { produce } from 'immer';
import { SET_ACCESS_TOKEN } from './constants';

export const initialState = {
    isLoading: false,
    accessToken: null,
    popup: {
        isOpen: false,
        title: null,
        message: null,
        action: [],
    }
}

export const storedKey = ["accessToken"];

const appReducer = (state = initialState, action) => 
    produce(state, (draft) => {
        switch (action.type) {
            case SET_ACCESS_TOKEN:
                draft.accessToken = action.accessToken;
                break;
        }
    });

export default appReducer;

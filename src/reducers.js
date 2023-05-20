import { combineReducers } from "@reduxjs/toolkit";
import appReducer, { storedKey as storedApp } from "./containers/App/reducer";
import { mapWithPersistor } from "./persistance";
import { enableMapSet } from "immer";

// * reducers that will stored to localStorage
const storedReducers = {
	app: { reducer: appReducer, whitelist: storedApp },
};

const temporaryReducers = {

};

export default function createRecuer(injectedReducer = {}) {
	enableMapSet()
	return combineReducers({
		...mapWithPersistor(storedReducers),
		...temporaryReducers,
		...injectedReducer,
	});
}

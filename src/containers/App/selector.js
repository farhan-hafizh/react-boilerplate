import { createSelector } from "reselect";

import { initialState } from "./reducer";

const selectApp = (state) => state.app || initialState

const selectIsLoading = createSelector(selectApp, (appState) => appState.loading)
const selectPopup = createSelector(selectApp, (appState) => appState.popup)

export {
    selectIsLoading,
    selectPopup
}
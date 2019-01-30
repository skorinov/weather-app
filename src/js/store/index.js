import { createStore} from "redux";
import rootReducer from "./reducers.js";
import {loadState, saveState} from "./localStorage.js"

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
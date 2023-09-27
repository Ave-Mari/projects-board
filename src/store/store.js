import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { projectsList } from "../reducers/projectsListReducer";

const rootReducers = combineReducers({
  projectsList,
});

export const store = createStore(rootReducers);

import { combineReducers, createStore } from "redux";
import { projectsList } from "../reducers/projectsListReducer";

const rootReducers = combineReducers({
  projectsList,
});

export const store = createStore(rootReducers);

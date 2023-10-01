import { combineReducers } from "redux";
import { projectsList } from "../reducers/projectsListReducer";

export const rootReducer = combineReducers({
  projectsList: projectsList,
});


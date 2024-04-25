import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import userReducer from "../../Users/reducer";

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
  };
  userReducer: {
    currentUser: any;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    userReducer,
  },
});

export default store;

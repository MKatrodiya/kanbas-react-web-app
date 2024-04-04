import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: <any>[],
  assignment: {
    course: "",
    title: "New Assignment",
    description: "New Description",
    dueDate: new Date().toISOString(),
    points: 100,
    availableFromDate: new Date().toISOString(),
    availableUntilDate: new Date().toISOString(),
  },
};

const assignmentsReducer = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];
      state.assignment = initialState.assignment;
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment: any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
      state.assignment = initialState.assignment;
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} = assignmentsReducer.actions;
export default assignmentsReducer.reducer;

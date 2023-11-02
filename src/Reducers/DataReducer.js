import { createReducer } from "@reduxjs/toolkit";

// Define the DataReducer
export const DataReducer = createReducer(
  {},
  {
    // Handle the action when data request is initiated
    DATA_REQUEST: (state) => {
      state.loading = true; // Set loading to true to indicate that data is being loaded
    },
    // Handle the action when data retrieval is successful
    DATA_SUCCESS: (state, action) => {
      state.loading = false; // Set loading to false since data retrieval is complete
      state.allTickets = action.payload.tickets; // Store the retrieved tickets data
      state.allUser = action.payload.users; // Store the retrieved user data
    },
    // Handle the action when data retrieval fails
    DATA_FAILURE: (state) => {
      state.loading = false; // Set loading to false to indicate the failure
      state.allTickets = []; // Clear the tickets data
      state.allUser = []; // Clear the user data
    },
  }
);

// Define the SelectDataReducer
export const SelectDataReducer = createReducer(
  {},
  {
    // Handle the action when selected data request is initiated
    SELECT_DATA_REQUEST: (state) => {
      state.loading = true; // Set loading to true to indicate that selected data is being loaded
      state.selectedData = []; // Clear the selected data
    },
    // Handle the action when selected data retrieval is successful
    SELECT_DATA_SUCCESS: (state, action) => {
      state.loading = false; // Set loading to false since data retrieval is complete
      state.selectedData = action.payload.selectedData; // Store the retrieved selected data
      state.user = action.payload.user; // Store the retrieved user data
    },
    // Handle the action when selected data retrieval fails
    SELECT_DATA_FAILURE: (state, action) => {
      state.loading = false; // Set loading to false to indicate the failure
      state.selectedData = []; // Clear the selected data
      state.message = action.payload.message; // Store the error message
    },
  }
);

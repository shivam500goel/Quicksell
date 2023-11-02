// Import the configureStore function from the '@reduxjs/toolkit' package
import { configureStore } from "@reduxjs/toolkit";

// Import the DataReducer and SelectDataReducer from './Reducers/DataReducer'
import { DataReducer, SelectDataReducer } from "./Reducers/DataReducer";

// Create a Redux store using the configureStore function
const store = configureStore({
  // Specify the reducers for the store. Reducers are functions that specify how the state should change in response to actions.
  reducer: {
    // Add the DataReducer to handle data-related state
    DataReducer,

    // Add the SelectDataReducer to handle selected data-related state
    SelectDataReducer,
  },
});

// Export the configured Redux store
export default store;

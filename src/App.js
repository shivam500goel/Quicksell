// Import necessary modules and components
import React, { useEffect } from "react";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import DashView from "./components/DashBoard/DashView";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./Actions/DataAction";

// Define the main App component
const App = () => {
  // Access the dispatch function and selected data from the Redux store
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    dispatch(fetchAllData()); // Dispatch the action to fetch all data
  }, [dispatch]); // Depend on the dispatch function

  // Render the appropriate content based on the presence of 'allTickets' data
  return allTickets ? ( // If 'allTickets' data is available
    <div>
      <TopNav /> {/* Render the TopNav component */}
      <DashView /> {/* Render the DashView component */}
    </div>
  ) : (
    <>QuickSell</>
  );
};

export default App;

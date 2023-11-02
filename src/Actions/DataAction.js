import axios from "axios";

// Action creator to fetch all data
export const fetchAllData = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_REQUEST" });

    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment/"
    );

    dispatch({ type: "DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE" });
  }
};

// Action creator to select and organize data based on different criteria
export const selectData =
  (group, allTickets, orderValue) => async (dispatch) => {
    try {
      dispatch({ type: "SELECT_DATA_REQUEST" });

      let user = false;
      let uniqueValuesSet = new Set();
      let arr = [];
      let selectedData = [];

      if (group === "status") {
        allTickets.forEach((elem) => {
          uniqueValuesSet.add(elem.status);
        });

        arr = [...uniqueValuesSet];

        arr.forEach((elem, index) => {
          let filteredData = allTickets.filter((fElem) => {
            return elem === fElem.status;
          });

          selectedData.push({
            [index]: {
              title: elem,
              value: filteredData,
            },
          });
        });
      } else if (group === "user") {
        user = true;
        allTickets?.allUser?.forEach((elem, index) => {
          arr = allTickets?.allTickets?.filter((Felem) => {
            return elem.id === Felem.userId;
          });

          selectedData.push({
            [index]: {
              title: elem.name,
              value: arr,
            },
          });
        });
      } else {
        let priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];

        priorityList.forEach((elem, index) => {
          arr = allTickets.filter((fElem) => {
            return index === fElem.priority;
          });

          selectedData.push({
            [index]: {
              title: elem,
              value: arr,
            },
          });
        });
      }

      if (orderValue === "title") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      }

      if (orderValue === "priority") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }

      dispatch({
        type: "SELECT_DATA_SUCCESS",
        payload: { selectedData, user },
      });
    } catch (error) {
      dispatch({ type: "SELECT_DATA_FAILURE", payload: error.message });
    }
  };

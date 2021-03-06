import React, { useState, useReducer } from "react";
import LinearSearch from "./LinearSearch";
import BinarySearch from "./BinarySearch";
import UpdateArray from "./UpdateArray";
import "../styles/SearchAlgos.css";
import { arrayReducer, searchReducer } from "../store/reducer";

export const ArrayContext = React.createContext();

// Global default array and element to be searched
export const ArrayInit = ["2", "3", "7", "14", "18", "19", "21"];
export const searchInit = "14";

const SearchAlgos = () => {
  const [arr, dispatch] = useReducer(arrayReducer, ArrayInit);
  const [search, searchDispatch] = useReducer(searchReducer, searchInit);

  // If true, display line search else show binary search
  const [showLinearSearch, setShowLinearSearch] = useState(false);

  return (
    <div className="search-algos">
      <div className="disp-div">
        <form className="disp-form">
          <label className="disp-inp">
            <input
              type="radio"
              value={!showLinearSearch}
              checked={!showLinearSearch}
              onChange={() => setShowLinearSearch(!showLinearSearch)}
            />
            Binary Search
          </label>
          <label className="disp-inp">
            <input
              type="radio"
              value={showLinearSearch}
              checked={showLinearSearch}
              onChange={() => setShowLinearSearch(!showLinearSearch)}
            />
            Linear Search
          </label>
        </form>
      </div>

      <div className="array-methods">
        <ArrayContext.Provider
          value={{
            Array: arr,
            Search: search,
            ArrayDispatch: dispatch,
            SearchDispatch: searchDispatch,
          }}
        >
          {showLinearSearch ? <LinearSearch /> : <BinarySearch />}
          <UpdateArray sorted={!showLinearSearch} />
        </ArrayContext.Provider>
      </div>
    </div>
  );
};

export default SearchAlgos;

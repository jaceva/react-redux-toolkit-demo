import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
  setSearchTerm,
  clearSearchTerm,
  selectSearchTerm
} from './searchSlice';

const Search = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  return (
    <>
    <input type="text" value={searchTerm} onChange={(e) => dispatch(setSearchTerm(e.target.value))} />
    <button onClick={() => dispatch(clearSearchTerm())}>X</button>
  </>
  )};

export default Search;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addThing,
  selectFilteredAllThings,
} from "./allThingsSlice";

const AllThings = () => {
  const things = useSelector(selectFilteredAllThings);
  const dispatch = useDispatch();

  return things.map((thing) => (
    <button key={thing.name} onClick={() => dispatch(addThing(thing))}>
      {thing.name}
    </button>
  ))};

export default AllThings;

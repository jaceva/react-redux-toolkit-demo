import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
  removeThing,
  selectFilteredMyThings
} from './myThingsSlice'

const MyThings = () => {
  const things = useSelector(selectFilteredMyThings);
  const dispatch = useDispatch();

  return things.map((thing) => (
    <button key={thing.name} onClick={() => dispatch(removeThing(thing))}>
      {thing.name}
    </button>
  ))};

export default MyThings;

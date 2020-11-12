import { selectSearchTerm } from "../search/searchSlice";

const initialMyThingsState = [];

const myThingsReducer = (state=initialMyThingsState, action) => {
    switch (action.type) {
      case 'myThings/addThing':
        const newThing = action.payload;
        return [...state, newThing]
      case 'myThings/removeThing':
        const thingToRemove = action.payload.name;
        return state.filter(thing => thing.name !== thingToRemove)
      default:
        return state;
    }
}

export const addThing = (thing) => ({
  type: 'myThings/addThing',
  payload: thing
});

export const removeThing = (thing) => ({
    type: 'myThings/removeThing',
    payload: thing
});

export const selectMyThings = (state) => state.myThings;

export const selectFilteredMyThings = (state) => {
  const myThings = selectMyThings(state);
  const searchTerm = selectSearchTerm(state);

  return myThings.filter((thing) =>
    thing.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default myThingsReducer;

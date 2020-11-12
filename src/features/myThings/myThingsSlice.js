import { selectSearchTerm } from "../search/searchSlice";

const initialState = [];

const myThingsReducer = (state=initialState, action) => {
    switch (action.type) {
      case 'myThings/addThing':
        const newThing = action.payload;
        return [...state, newThing]
      case 'myThings/removeThing':
        const thingToRelease = action.payload.name;
        return state.filter(thing => thing.name !== thingToRelease)
      default:
        return state;
    }
}
  
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

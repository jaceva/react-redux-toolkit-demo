const initialState = ''

const searchReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'search/setSearch':
      return action.payload;
    case 'search/clearSearch':
      return '';
    default:
      return state;
  }
}

export const setSearchTerm = (term) => {
  return {
    type: 'search/setSearch',
    payload: term
  }
}

export const clearSearchTerm = () => {
  return {
    type: 'search/clearSearch'
  }
}

export const selectSearchTerm = (state) => state.search;

export default searchReducer;

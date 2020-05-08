import React, { useReducer, createContext } from 'react';

export const SearchContext = createContext();

const defaultState = {
  search: '*',
  number: 10,
  moveOffset: '',
  sessionId: '',
  query: '',
  includeIngredients: [],
  includeCuisines: [],
  excludeIngredients: [],
  excludeCuisines: []
};

// Actions
const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_DROPDOWN_QUERY = 'UPDATE_QUERY';
const SELECT = 'SELECT';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case UPDATE_DROPDOWN_QUERY: {
      return {
        ...state,
        query: action.payload
      };
    }
    case SELECT: {
      return {
        ...state,
        selectedOptions: action.payload
      };
    }
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const updateSearch = (input) => {
    dispatch({
      UPDATE_SEARCH,
      payload: {
        ...input
      }
    });
  };

  const updateQuery = (input) => {
    dispatch({
      UPDATE_DROPDOWN_QUERY,
      payload: {
        ...input
      }
    });
  };
  const value = {
    state,
    updateQuery,
    updateSearch
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

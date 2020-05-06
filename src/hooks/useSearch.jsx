import React, { createContext, useEffect, useState, useContext } from 'react';
import { apiUtils } from '../utils/apiUtils';

const searchContext = createContext();

export const useSearch = () => {
  return useContext(searchContext);
};

const useProvideSearch = () => {
  const emptyQuery = {
    search: '*',
    number: 10,
    moveOffset: '',
    sessionId: ''
  };
  const [query, setQuery] = useState(emptyQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [generalResult, setGenerelResult] = useState(null);

  useEffect(() => {
    search(query);
  }, [query]);

  const search = async (query) => {
    const options = apiUtils.makeOptions('POST', {
      name: query.search,
      number: 10,
      moveOffset: query.moveOffset
    });
    try {
      setIsLoading(true);
      const res = await apiUtils.fetchData('/recipe/search', options);
      setSearchResult(res.results);
      setGenerelResult({
        offset: res.offset,
        number: res.number,
        totalResults: res.totalResults
      });
    } catch (error) {
      if (error.status) {
        error.fullError.then((e) => alert(e.message));
      } else {
        alert(
          'Oh owh! You broke the internet. Please contact the dev team to fix it..'
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    query,
    setQuery,
    isLoading,
    searchResult,
    generalResult
  };
};

const ProvideSearch = ({ children }) => {
  const search = useProvideSearch();
  return (
    <searchContext.Provider value={search}>{children}</searchContext.Provider>
  );
};

export default ProvideSearch;

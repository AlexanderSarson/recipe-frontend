import React, { createContext, useEffect, useState, useContext } from 'react';
import { apiUtils } from '../utils/apiUtils';
import * as response from '../utils/response.json';

const searchContext = createContext();

export const useSearch = () => {
  return useContext(searchContext);
};

const useProvideSearch = () => {
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    search(query);
  }, [query]);

  const search = async (query) => {
    // const options = apiUtils.makeOptions('GET');
    setIsLoading(true);
    setInterval(() => {
      setSearchResult(response.results);
      setIsLoading(false);
    }, 5000);
    // try {
    //   setIsLoading(true);
    //   const res = await apiUtils.fetchData('/recipe/search', options);
    //   setSearchResult(res.results);
    //   console.log(query);
    // } catch (error) {
    //   if (error.status) {
    //     error.fullError.then((e) => alert(e.message));
    //   } else {
    //     console.log('Network error');
    //   }
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return {
    query,
    setQuery,
    isLoading,
    searchResult
  };
};

const ProvideSearch = ({ children }) => {
  const search = useProvideSearch();
  return (
    <searchContext.Provider value={search}>{children}</searchContext.Provider>
  );
};

export default ProvideSearch;

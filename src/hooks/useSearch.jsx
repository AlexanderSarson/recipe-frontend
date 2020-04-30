import React, { createContext, useEffect, useState, useContext } from 'react';
import { apiUtils } from '../utils/apiUtils';

const searchContext = createContext();

export const useSearch = () => {
  return useContext(searchContext);
};

const useProvideSearch = () => {
  const [query, setQuery] = useState('*');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    search(query);
  }, [query]);

  const search = async (query) => {
    const options = apiUtils.makeOptions('POST', { name: query, number: 10 });
    try {
      setIsLoading(true);
      const res = await apiUtils.fetchData('/recipe/search', options);
      setSearchResult(res.results);
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

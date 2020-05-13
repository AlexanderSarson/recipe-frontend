import React, { useState, useContext, createContext, useEffect } from 'react';
import { apiUtils } from '../utils/apiUtils';
import { getUserAndRoles } from '../utils/JwtTokenParser';

const userContext = createContext();

const useProvideUser = () => {
  const [favourites, setFavourites] = useState([]);
  const [username, setUsername] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      const { username } = getUserAndRoles(jwtToken);
      setUsername(username);
    }
    const getFavourites = async () => {
      const opts = apiUtils.makeOptions('GET');
      try {
        setIsLoading(true);
        const res = await apiUtils.fetchData(
          `/user/favourites/${username}`,
          opts
        );
        setFavourites(res.favouriteRecipes);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error.status) {
          error.fullError.then((e) => alert(e.message));
        } else {
          console.log('Network error');
        }
      }
    };
    getFavourites();
  }, [username]);

  const addRemoveFavourite = async (recipe, _action) => {
    const opts = apiUtils.makeOptions('POST', {
      username: username,
      action: _action,
      recipe: {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        readyInMinutes: recipe.readyInMinutes,
        servings: recipe.servings
      }
    });
    try {
      const res = await apiUtils.fetchData('/user/favourites', opts);
      setFavourites(res.favouriteRecipes);
    } catch (error) {
      if (error.status) {
        error.fullError.then((e) => alert(e.message));
      } else {
        console.log('Network error');
      }
    }
  };

  const isFavourite = (id) => {
    if (username) {
      return favourites.some((favourite) => favourite.id === id);
    }
    return false;
  };

  return {
    isLoading,
    addRemoveFavourite,
    isFavourite,
    favourites
  };
};

export const useUser = () => {
  return useContext(userContext);
};

const ProvideUser = ({ children }) => {
  const user = useProvideUser();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default ProvideUser;

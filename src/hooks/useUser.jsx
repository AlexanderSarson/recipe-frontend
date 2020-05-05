import React, { useState, useContext, createContext, useEffect } from 'react';
import { apiUtils } from '../utils/apiUtils';
import { getUserAndRoles } from '../utils/JwtTokenParser';

const userContext = createContext();

const useProvideUser = () => {
  const [favourites, setFavourites] = useState([]);
  const [username, setUsername] = useState();

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      const { username } = getUserAndRoles(jwtToken);
      setUsername(username);
      getFavourites(username);
    }
  }, []);

  const getFavourites = async (name) => {
    const opts = apiUtils.makeOptions('GET');
    try {
      const res = await apiUtils.fetchData(`/user/favourites/${name}`, opts);
      setFavourites(res.favouriteRecipes);
    } catch (error) {
      if (error.status) {
        error.fullError.then((e) => alert(e.message));
      } else {
        console.log('Network error');
      }
    }
  };

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
    getFavourites,
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

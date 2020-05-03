import React, { useState, useContext, useEffect, createContext } from 'react';
import { apiUtils } from '../utils/apiUtils';
import { useAuth } from '../hooks/useAuth.jsx';

const userContext = createContext();

const useProvideUser = () => {
  const [favourites, setFavourites] = useState([]);
  const {
    user: { name }
  } = useAuth();

  useEffect(() => {
    getFavourites(name);
  }, [name]);

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

  const addRemoveFavourite = (recipe, _action) => {
    const opts = apiUtils.makeOptions('POST', {
      username: name,
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
      const res = apiUtils.fetchData('/user/favourite', opts);
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
    return favourites.filter((favourite) => favourite.id === id) > 0;
  };

  return {
    getFavourites,
    addRemoveFavourite,
    isFavourite
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

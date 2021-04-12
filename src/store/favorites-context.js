import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavoriets: 0,
  addFavoriet: (favorietsMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

//  We make a component that we uses to wrap the app whit to
//  generate and save our favorites.
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  // adds to favorites, this garantees that we get the latest added.
  function addFavoritesHandler(favoritesMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritesMeetup);
    });
  }
  // remove a favorite, we filter out all id we have, and drop..
  // remove all the id "favorites" we dont need anymore.
  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  // is a favorites or not add to favorites if id is there.
  function itemFavoritesHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemFavoritesHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;

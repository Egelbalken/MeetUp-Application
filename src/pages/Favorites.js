import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';
// Favorites page
function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p align="center">You dont have any favorites yet! Start adding some?</p>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h3>My Favorites</h3>
      {content}
    </section>
  );
}

export default FavoritesPage;

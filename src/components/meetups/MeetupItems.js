import Card from '../ui/Card';
import './MeetupItems.modules.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

// Check if we have a favorite item.
function MeetupItem(props) {
  // From the FavoritesContext we look for all favorites properties
  const favoritesCtx = useContext(FavoritesContext);
  // We uses the function in store/favorites-context to pull props.id
  // We get back tru or false from that state.
  const itemIsFavorites = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorites) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className="actions">
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorites ? 'Remove from Favorites' : 'Add to favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

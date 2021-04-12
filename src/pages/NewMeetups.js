import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';
// Using google firebase realtime database. http + map +json
function NewMeetupsPage() {
  // add history package to remember
  const history = useHistory();
  //
  function addMeetupHandler(meetUpData) {
    // fetching the data and convert it to json, then render it on '/'
    fetch(
      'https://react-getting-started-9a575-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetUpData),
        headers: {
          'Content-Type': 'application/json',
        },
      } // then the data is converted send it to AllMeetupspage
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h2>Add new Meetup</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;

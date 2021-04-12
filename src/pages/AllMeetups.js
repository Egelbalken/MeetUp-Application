import MeetupList from '../components/meetups/MeetupList';
import { useState } from 'react';
import { useEffect } from 'react';

// We want to render tha page when enter it! So we do
// fetch data behore returning the section
function AllMeetupsPage() {
  const [isLoadingState, setLoadingState] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadingState(true);

    // We are fetching the data from Firebase "DB" as a ibuilt GET arg.
    fetch(
      'https://react-getting-started-9a575-default-rtdb.firebaseio.com/meetups.json'
    )
      // Then response is converted to json.
      .then((response) => {
        return response.json();
      }) //Then data is sorted in to a array to pick out the id.
      .then((data) => {
        const meetups = [];

        // For all objekts in database set id as keys
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setLoadingState(false);
        setLoadedMeetups(meetups);
      });
    // Indepencys array sense we have no external independencies
  }, []);

  // Check so that the database have been loaded.
  if (isLoadingState) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  // We render the webpage to the view
  return (
    <section>
      <h2>All Meetups</h2>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

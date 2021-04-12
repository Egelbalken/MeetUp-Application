import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
// use ref, package for listning on referense info enterd in Dom
import { useRef } from 'react';

// eventlistner, prevent to refresh the site..
// use event.preventDefault.
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    // Save the current value of new title added
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // Sage all reference data to a object
    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetUpData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;

import { useState } from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');


  const enteredNameIsValid = enteredName.trim() !== '';

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  console.log(`Typed name: ${enteredName}`);
  console.log(`Typed email: ${enteredEmail}`);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = event => {
    
  };


  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    };

    console.log(`Submitted value is ${enteredName}.`);

    setEnteredName('');

    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className='form-control'>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='text' 
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        {/* <button disabled={!formIsValid}>Submit</button> */}
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

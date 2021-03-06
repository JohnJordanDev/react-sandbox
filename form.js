/* eslint-disable indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* global React, ReactDOM, PropTypes */

const Input = (props) => {
  const { firstName, inFocus, updateTempStore } = props;
  const [state, setState] = React.useState({ firstName, inFocus });
  const changeHandler = (e) => {
    setState((prev) => ({ ...prev, ...{ firstName: e.target.value } }));
    updateTempStore("firstName", "value", e.target.value);
  };
  const blurHandler = () => {
    setState((prev) => ({ ...prev, ...{ inFocus: false } }));
  };
  const focusHandler = () => { setState((prev) => ({ ...prev, ...{ inFocus: true } })); };
  return (
    <>
      <label htmlFor="first_name">First Name:</label>
      <input
        name="first-name"
        id="first_name"
        type="text"
        value={state.firstName}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
      />
      <div style={{ visibility: state.inFocus ? "visible" : "hidden" }}>In focus!</div>
    </>
  );
};

Input.propTypes = {
  firstName: PropTypes.string.isRequired,
  inFocus: PropTypes.bool.isRequired,
  updateTempStore: PropTypes.func.isRequired
};

// eslint-disable-next-line no-lone-blocks
{ /* <label htmlFor="write_stuff">Write stuff:</label>
      <textarea name="textarea" id="write_stuff" cols="30" rows="5" onBlur={blurHandler} value={state.textarea} />
      <label htmlFor="fruit">Favorite fruit:</label>
      <select name="select" id="fruit" onBlur={blurHandler} value={state.select}>
        <option value="apple">Apple</option>
        <option value="orange">Orange</option>
        <option value="banana">Banana</option>
      </select>
    */ }

const SubmitMessage = ({ submitValue, resetForm }) => (
  <div>
    Submitted! with data:
    { ` ${submitValue}` }
    <button type="button" onClick={resetForm}> reset form </button>
  </div>
);
SubmitMessage.propTypes = {
    submitValue: PropTypes.string.isRequired,
    resetForm: PropTypes.func.isRequired
};

const Form = (props) => {
    const { cssClass, children, submitHandler } = props;
    return (
      <form onSubmit={submitHandler} className={cssClass}>
        {children}
        <button type="submit">Submit</button>
      </form>
    );
  };

Form.propTypes = {
    cssClass: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    submitHandler: PropTypes.func.isRequired
};

const FormHandler = () => {
  const [state, setState] = React.useState({
    firstName: {
      value: "",
      error: false
    },
    submitted: false
  });

  const tempStore = JSON.parse(JSON.stringify(state));

  const updateTempStore = (storeProp, key, value) => {
    tempStore[storeProp][key] = value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (tempStore.firstName.value) {
      setState((prev) => ({ ...prev, ...tempStore, submitted: true }));
    }
  };

  const blurHandler = (e) => {
    const { target } = e;
    setState((prev) => ({ ...prev, ...{ [target.name]: target.value } }));
  };

  const resetForm = () => {
    setState((prev) => ({ ...prev, submitted: false }));
  };

  return (
    <>
      { state.submitted
        ? (
          <SubmitMessage submitValue={state.firstName.value} resetForm={resetForm} />
        )
        : (
          <Form submitHandler={submitHandler} cssClass="form">
            <Input firstName={state.firstName.value} inFocus={false} onBlur={blurHandler} updateTempStore={updateTempStore} />
          </Form>
        )}
    </>

  );
};

ReactDOM.render(<FormHandler />, document.getElementById("target_form"));

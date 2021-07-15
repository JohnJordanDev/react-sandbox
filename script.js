/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

const Clock = (props) => {
  const { date } = props;
  const [currentDate, updateDate] = React.useState(date.toLocaleString());
  React.useEffect(() => {
    window.setTimeout(() => {
      updateDate(window.Date().toLocaleString());
    }, 1000);
  });
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        It is now:
        {currentDate}
      </p>
    </div>
  );
};

const Counter = (props) => {
  const { initialCount } = props;
  const [count, setCount] = React.useState(initialCount);
  // React.useEffect(() => {
  //   const timerId = setInterval(() => {
  //     //console.log(`logging, from when a count of ${count}`);
  //   }, 2000);

  //   // run cleanup
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // });
  return (
    <div className="counter">
      <p>
        Count:
        {count}
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
};

const List = (props) => {
  const { maxNum } = props;
  const list = Array.from(Array(maxNum).keys());
  const listItems = list.map((e, i) => (
    <li key={e}>
      Item #
      {i}
    </li>
  ));
  return (
    <ul className="list">{listItems}</ul>
  );
};

const Input = () => {
  const [state, setState] = React.useState({ name: "", focus: false });
  const changeHandler = (e) => {
    const { target } = e;
    setState((prev) => ({ ...prev, ...{ name: target.value } }));
  };
  const focusHandler = () => {
    setState((prev) => ({ ...prev, ...{ focus: true } }));
  };
  const blurHandler = () => {
    setState((prev) => ({ ...prev, ...{ focus: false } }));
  };
  console.log("input rendering with value of: ", state);
  return (
    <>
      <label htmlFor="first_name">First Name:</label>
      <input name="first-name" id="first_name" type="text" onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} value={state.name} />
      <div style={{ display: state.focus ? "block" : "none" }}>In focus!</div>
    </>
  );
};

const Form = () => {
  const [state, setState] = React.useState({
    textarea: "",
    select: "orange"
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("state on submission is: ", state);
  };

  const changeHandler = (e) => {
    const { target } = e;
    setState((prev) => ({ ...prev, ...{ [target.name]: target.value } }));
  };
  console.log("rendering the Form component...");
  return (
    <form onSubmit={submitHandler} className="form">
      <Input />
      <label htmlFor="write_stuff">Write stuff:</label>
      <textarea name="textarea" id="write_stuff" cols="30" rows="5" onChange={changeHandler} value={state.textarea} />
      <label htmlFor="fruit">Favorite fruit:</label>
      <select name="select" id="fruit" onChange={changeHandler} value={state.select}>
        <option value="apple">Apple</option>
        <option value="orange">Orange</option>
        <option value="banana">Banana</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

const App = () => (
  <>
    <Clock date={Date()} />
    <Counter initialCount={2} />
    <List maxNum={5} />
    <Form />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* global React, ReactDOM */

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

const App = () => (
  <>
    <Clock date={Date()} />
    <Counter initialCount={2} />
    <List maxNum={5} />
    <div id="target_form" />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

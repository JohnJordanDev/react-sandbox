const Clock  = (props) => {
	const {date} = props; 
	const [currentDate, updateDate] = React.useState(date.toLocaleString());
	React.useEffect(() => {
		window.setTimeout(()=>{
			updateDate(window.Date().toLocaleString());
		},1000);
	});
	return (
		<div>
			<h1>Hello World</h1>
			<p>It is now: {currentDate}</p>
		</div>
	);
}

const Counter = (props) => {
	const {initialCount} = props;
	const [count, setCount] = React.useState(initialCount);
	React.useEffect(()=>{
		const timerId = setInterval(()=>{
			console.log(`logging, from when a count of ${count}`);
		}, 2000);

		//run cleanup
		return () => {
			clearInterval(timerId);
		};
	});
	return (
		<div className="counter">
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment count</button>
		</div>
	);
};

const List = (props) => {
	const maxNum = props.maxNum;
	const list = Array.from(Array(maxNum).keys());
	const listItems = list.map((e,i)=> <li key={e}>Item #{i}</li>);
	return (
			<ul className="list">{listItems}</ul>
	);
};


const Form = (props) => {

	const initialState = {
		"first-name": "",
		textarea: "",
		select: ""
	};
	const [state, setState] = React.useState(initialState);
	
	const submitHandler = (e) => {
		e.preventDefault();
		console.log('state on submission is: ', state);
	}
	const changeHandler = (e) => {

	};
	return (
		<form onSubmit={submitHandler} className="form">
			<label htmlFor="first_name">First Name:</label>
			<input name="first-name" id="first_name" type="text" onChange={changeHandler}/>
			<label htmlFor="write_stuff">Write stuff:</label>
			<textarea name="textarea" id="write_stuff" cols="30" rows="5"/>
			<label htmlFor="fruit">Favorite fruit:</label>
			<select name="select" id="fruit">
				<option value="apple">Apple</option>
				<option value="orange">Orange</option>
			</select>
			<input type="submit" value="Submit"/>
		</form>);
};

const App = () => {
	return (<>
		<Clock date={Date()}/>
		<Counter initialCount={2}/>
		<List maxNum={5}/>
		<Form />
	</>);
};

ReactDOM.render(<App/>, document.getElementById("root"));

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
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment count</button>
		</div>
	);
};

const App = () => {
	return (<>
		<Clock date={Date()}/>
		<Counter initialCount={2}/>
	</>);
};

ReactDOM.render(<App/>, document.getElementById("root"));

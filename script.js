const Clock  = (props) => {
	const {date} = props; 
	//const [currentDate, updateDate] = React.useState(date.toLocaleString());
	return (<div>
		<h1>Hello World</h1>
		<p>It is now: {date.toLocaleString()}</p>
	</div>);
}

const Counter = (props) => {
	const [count, setCount] = React.useState(0);
	return (<div>
		<p>Count: {count}</p>
		<button onClick={() => setCount(count + 1)}>Increment count</button>
	</div>);
};

const App = () => {
	return (<>
		<div id="clock"></div>
		<Counter/>
	</>);
};

function tick(){
	ReactDOM.render(<Clock date={new Date()}/>, document.getElementById("clock"));
}

setInterval(tick, 1000);

ReactDOM.render(<App/>, document.getElementById("root"));

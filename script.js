const Clock  = (props) => {
	const {date} = props; 
	//const [currentDate, updateDate] = React.useState(date.toLocaleString());
	return <div>
		<h1>Hello World</h1>
		<p>It is now: {date.toLocaleString()}</p>
	</div>;
}

const App = () => {
	return (<>
		<div id="clock"></div>
		<div id="counter"></div>
	</>);
};

function tick(){
	ReactDOM.render(<Clock date={new Date()}/>, document.getElementById("clock"));
}

setInterval(tick, 1000);

ReactDOM.render(<App/>, document.getElementById("root"));

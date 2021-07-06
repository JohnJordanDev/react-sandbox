const Clock  = (props) => {
	const {date} = props; 
	return <div>
		<h1>Hello World</h1>
		<p>It is now: {date.toLocaleString()}</p>
	</div>;
}

function tick(){
	ReactDOM.render(<Clock date={new Date()}/>, document.getElementById("root"));
}

setInterval(tick, 1000);


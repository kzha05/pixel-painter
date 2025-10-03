import './App.css';

function App() {

	const red = () => {
		console.log('clicked red');
	};

	const blue = () => {
		console.log('clicked blue');
	};

	const purple = () => {
		console.log('clicked purple');
	};

	const green = () => {
		console.log('clicked green');
	};

	const yellow = () => {
		console.log('clicked yellow');
	};

	const clickRed = () => {
		const element = document.getElementById("pixelCanvas");
		element.classList.remove("white");
		element.classList.remove("blue");
		element.classList.remove("purple");
		element.classList.remove("green");
		element.classList.remove("yellow");
		element.classList.add("red");
	};

	const clickBlue = () => {
		const element = document.getElementById("pixelCanvas");
		element.classList.remove("white");
		element.classList.remove("red");
		element.classList.remove("purple");
		element.classList.remove("green");
		element.classList.remove("yellow");
		element.classList.add("blue");
	};

	const clickPurple = () => {
		const element = document.getElementById("pixelCanvas");
		element.classList.remove("white");
		element.classList.remove("red");
		element.classList.remove("blue");
		element.classList.remove("green");
		element.classList.remove("yellow");
		element.classList.add("purple");
	};

	const clickGreen = () => {
		const element = document.getElementById("pixelCanvas");
		element.classList.remove("white");
		element.classList.remove("red");
		element.classList.remove("blue");
		element.classList.remove("purple");
		element.classList.remove("yellow");
		element.classList.add("green");
	};

	const clickYellow = () => {
		const element = document.getElementById("pixelCanvas");
		element.classList.remove("white");
		element.classList.remove("red");
		element.classList.remove("blue");
		element.classList.remove("purple");
		element.classList.remove("green");
		element.classList.add("yellow");
	};

	return (
		<>
			<button style={{background: "red"}} onClick={ clickRed } id="pixelCanvasColour"></button>
			<button style={{background: "blue"}} onClick={ clickBlue } id="pixelCanvasColour"></button>
			<button style={{background: "purple"}} onClick={ clickPurple } id="pixelCanvasColour"></button>
			<button style={{background: "green"}} onClick={ clickGreen } id="pixelCanvasColour"></button>
			<button style={{background: "yellow"}} onClick={ clickYellow } id="pixelCanvasColour"></button>

			<div id="pixelCanvas" className="white="></div>
		</>
	);
}

export default App;

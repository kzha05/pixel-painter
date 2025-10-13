import './App.css';
import { useState } from 'react';

function App() {

	const [color,setColor] = useState<string>("white");

	const [currentColor,setCurrentColor] = useState<string>("white");

	return (
		<>
			<button style={ { background: "red" } } onClick={ () => setColor("red") } id="pixelCanvasColour"></button>
			<button style={ { background: "blue" } } onClick={ () => setColor("blue") } id="pixelCanvasColour"></button>
			<button style={ { background: "purple" } } onClick={ () => setColor("purple") } id="pixelCanvasColour"></button>
			<button style={ { background: "green" } } onClick={ () => setColor("green") } id="pixelCanvasColour"></button>
			<button style={ { background: "yellow" } } onClick={ () => setColor("yellow") } id="pixelCanvasColour"></button>

			<div id="pixelCanvas" className={currentColor} onClick={ () => setCurrentColor(color) }></div>
			<div id="pixelCanvas" className={currentColor} onClick={ () => setCurrentColor(color) }></div>
			<div id="pixelCanvas" className={currentColor} onClick={ () => setCurrentColor(color) }></div>
			<div id="pixelCanvas" className={currentColor} onClick={ () => setCurrentColor(color) }></div>
			<div id="pixelCanvas" className={currentColor} onClick={ () => setCurrentColor(color) }></div>
			<div id="pixelCanvas" className={currentColor} onClick={ () => setCurrentColor(color) }></div>
		</>
	);
}

export default App;

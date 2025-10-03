import { useState } from 'react';
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

	return (
		<>
			<button style={{background: "red"}} onClick={ red } id="pixelCanvas"></button>
			<button style={{background: "blue"}} onClick={ blue } id="pixelCanvas"></button>
			<button style={{background: "purple"}} onClick={ purple } id="pixelCanvas"></button>
			<button style={{background: "green"}} onClick={ green } id="pixelCanvas"></button>
			<button style={{background: "yellow"}} onClick={ yellow } id="pixelCanvas"></button>
		</>
	);
}

export default App;

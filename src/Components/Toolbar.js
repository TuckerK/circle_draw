import React from 'react';
// import { useState } from 'react';
import './Toolbar.css';

const Toolbar = ({ width, height }) => {

    //function that gives the clear button functionality

    const clearCanvas = () => {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    //function that gives the color buttons functionality
    const colorRed = () => {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
    };

    const colorBlack = () => {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
    };

    const colorGreen = () => {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";
    };
    const colorBlue = () => {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "blue";
    };

    //function that adds the rotation to the canvas with css
    const startRotation = () => {
        
        //add the rotating-canvas css id to the canvas
        const canvas = document.querySelector("canvas");
        canvas.id = "rotating-canvas";


    };
    //function that stops rotating the canvas with css
    const stopRotation = () => {
        //add the stop-rotating-canvas css id to the canvas
        const canvas = document.querySelector("canvas");
        canvas.id = "stop-rotating-canvas";

    };
    const slowRotation = () => {

        const canvas = document.querySelector("canvas");
        canvas.id = "slow-rotating-canvas";
    };
    const fastRotation = () => {

        const canvas = document.querySelector("canvas");
        canvas.id = "fast-rotating-canvas";
    };
    //function that gives the small button functionality
    const smallBrush = () => {
         
    };
    const mediumBrush = () => {

        
        
    };
    const largeBrush = () => {
        
    };
    const darkMode = () => {
        const mode = document.querySelector(".canvas-container");
        const tb = document.querySelector(".toolbar");
        tb.id = "dark-mode-tb";
        mode.id = "dark-mode";
    };
    const lightMode = () => {
        const mode = document.querySelector(".canvas-container");
        const tb = document.querySelector(".toolbar");
        tb.id = "light-mode-tb";
        mode.id = "light-mode";
    };

return(
    <div class="toolbar">
        <div>
            <button class="button-30" onClick={clearCanvas}>Clear</button>
        </div>
        <div>
            <button class="button-30" onClick={colorBlack}>Black</button>
            <button class="button-30" onClick={colorRed}>Red</button>
            <button class="button-30" onClick={colorBlue}>Blue</button>
            <button class="button-30" onClick={colorGreen}>Green</button>
        </div>
        <div>
            <button class="button-30" onClick={smallBrush}>Small</button>
            <button class="button-30" onClick={mediumBrush}>Medium</button>
            <button class="button-30" onClick={largeBrush}>Large</button>
        </div>
        <div>
            <button class="button-30" onClick={startRotation}>Start</button>
            <button class="button-30" onClick={stopRotation}>Stop</button>
        </div>
        <div>
            <button class="button-30" onClick={slowRotation}>Slow</button>
            <button class="button-30" onClick={startRotation}>Medium</button>
            <button class="button-30" onClick={fastRotation}>Fast</button>
        </div>
        <div>
            <button class="button-30" onClick={darkMode}>Dark Mode</button>
            <button class="button-30" onClick={lightMode}>Light Mode</button>
        </div>
    </div>

);

}

export default Toolbar;
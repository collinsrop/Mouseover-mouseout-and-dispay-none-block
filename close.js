"use strict";
//positionings and styles
document.querySelector("#lorem").style.position="absolute";
document.querySelector("#lorem").style.top="20%";
document.querySelector("#lorem").style.left="50%";
document.querySelector("#box").style.position = "absolute";
document.querySelector("#box").style.top = "40%";
document.querySelector("#box").style.left = "40%";
document.querySelector("#box").style.width="300px";
document.querySelector("#box").style.height="fitContent";
document.querySelector("#box").style.borderRadius = "10px";
document.querySelector("#box").style.borderTop = "3px solid black";
document.querySelector("#box").style.borderRight = "5px solid black";
document.querySelector("#box").style.borderBottom= "1px solid black";
document.querySelector("#box").style.borderLeft = "1px solid black";
document.querySelector("#box").style.padding = "20px";
document.querySelector("span").style.float="right";
document.querySelector("span").style.fontSize="30px";
document.querySelector("span").style.backgroundColor="blue";
document.querySelector("span").style.borderRadius="50%";
document.querySelector("span").style.height="40px";
document.querySelector("span").style.width="40px";
document.querySelector("span").style.color="white";
document.querySelector("span").style.textAlign="center";

//functionality
document.addEventListener("DOMContentLoaded", () => {
	//div apperance
	document.querySelector("#lorem").addEventListener("click", () => {
		document.querySelector("#box").style.display="block";
	});
	//div disappearance
	document.querySelector("span").addEventListener("click", () => {
		document.querySelector("#box").style.display="none";
	});
	//hovering functionality
	document.querySelector("span").addEventListener("mouseover", () => {//mouseover event
		document.querySelector("span").style.backgroundColor="red";
	});
	document.querySelector("span").addEventListener("mouseout", ()=>{//mouseout event
       document.querySelector("span").style.backgroundColor="blue";
	});

});
var errNumber = 2;
var qaLine = "HELLOW WORLD";

console.log("GREA! JAVASCRIPT PAGE IS READY");
console.error("ERROR MESSAGE NUMBER #", errNumber);

(function(){
var text = "Hello World :)";
var button = document.getElementById("switch");
console.log("button is:", button);
var title = document.getElementById("hello");

button.onclick = function(){
	title.innerText = text;
}
} )();

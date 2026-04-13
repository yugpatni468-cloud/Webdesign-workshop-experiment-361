function changeHeading() {
let text = document.getElementById("inputText").value;
document.getElementById("heading").innerText = text;
}
function changeBackground() {
let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = color;
}
function increaseFont() {
let para = document.getElementById("para");
let size = window.getComputedStyle(para).fontSize;
para.style.fontSize = (parseInt(size) + 2) + "px";
}
function togglePara() {
let para = document.getElementById("para");
if (para.style.display === "none") {
para.style.display = "block";
} else {
para.style.display = "none";
}
}
function resetAll() {
document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
document.body.style.backgroundColor = "white";
document.getElementById("para").style.fontSize = "16px";
document.getElementById("para").style.display = "block";
document.getElementById("inputText").value = "";
}
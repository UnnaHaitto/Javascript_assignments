const div = document.getElementById("target");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

const t = document.createTextNode("First item");
const t2 = document.createTextNode("Second item");
const t3 = document.createTextNode("Third item");

li1.appendChild(t);
li2.appendChild(t2);
li3.appendChild(t3);

div.appendChild(li1);
div.appendChild(li2);
div.appendChild(li3);

const second = document.querySelectorAll("li")[1];
second.classList.add("my-item");

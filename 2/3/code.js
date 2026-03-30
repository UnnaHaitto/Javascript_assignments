//document.querySelector("#list").innerHTML = "<li>" + name + "</li>"

const dog_names = [];

for (i = 0; i < 6; i++){
    let name = prompt("Give the name of the dog");
    dog_names.push(name);
}

dog_names.sort();
dog_names.reverse();

for (let name of dog_names){
    document.querySelector("#list").innerHTML += "<li>" + name + "</li>";
}
//document.querySelector("#list").innerHTML = ""

let amount = +prompt("Give the number of participants");

const participant_list = [];

for (let i = amount; i > 0; i--){
    let name = prompt("Give the name of the participant");
    participant_list.push(name);
}

console.log(participant_list);

for (let name of participant_list){
    document.querySelector("#list").innerHTML += "<li>" + name + "</li>";
}
const number_list = [];

let number;
do{
    number = +prompt("Give a number. 0 stops");
    if(number !== 0) {
        number_list.push(number);
    }
} while (number !== 0);

number_list.sort();
number_list.reverse();

console.log(number_list);
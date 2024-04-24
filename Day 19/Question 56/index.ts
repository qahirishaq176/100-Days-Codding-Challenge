let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

let stringsArray = mixedArray.filter(item => typeof item === "string");

console.log(stringsArray); 

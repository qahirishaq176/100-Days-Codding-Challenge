function makeAdder(valueToAdd: number): (number: any) => number {

    return function(number: number): number {
        return number + valueToAdd;
    };
}

let addFive = makeAdder(5);
console.log(addFive(10)); 

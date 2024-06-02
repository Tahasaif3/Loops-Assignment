var numberArray = [];
for (var i = 0; i <= 10; i++) {
    numberArray.push(i);
}
console.log(numberArray);
for (var i = 0; i < numberArray.length; i++) {
    console.log("Index: ".concat(i, ", value : ").concat(numberArray[i]));
}
for (var value in numberArray) {
    console.log(value);
}

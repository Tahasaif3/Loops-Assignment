var myObject = {
    item1: "iphone 14 pro max",
    item2: "samsung S24 Ultra",
    item3: "Oppo Reno 8 pro",
};
for (var value in myObject) {
    console.log("value: ".concat(value, ",").concat(myObject[value]));
}

var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 1 ? true : false,
    };
    myWork.push(lesson);
}
console.log(myWork);

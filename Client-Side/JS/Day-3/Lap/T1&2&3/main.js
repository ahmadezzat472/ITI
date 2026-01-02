// 1 -------------------
function task1() {
  var input;
  do {
    input = prompt("Enter your Text");
    if (input === null) {
      input = "";
      break;
    }
  } while (input === "" || !isNaN(input));
  if (input) {
    for (var i = 1; i <= 6; i++) {
      document.write("<h" + i + ">" + input + "</h" + i + ">");
    }
  }
}

// 2 -------------------
function task2() {
  var sum = 0;
  do {
    var input = prompt("Enter yr Text");
    if (typeof +input === "number" && !isNaN(+input)) {
      sum += +input;
      console.log(sum);
    }
  } while (input !== "0" && sum < 100);
}

// 3 -------------------
function task3() {
  var name;
  do {
    name = prompt("Enter yr Name");
    if (name === "" || !isNaN(name)) {
      continue;
    }
    console.log(name);

    var age;
    do {
      age = prompt("Enter yr Age");
      if (typeof +age === "number" && !isNaN(+age)) {
        var calcAge = 2026 - +age;
      }
    } while (age > 2010 || isNaN(age));
  } while (name === "" || !isNaN(name));

  document.write(
    "<h1>My name is " +
      name +
      " and I am " +
      calcAge +
      " years old. I was born in " +
      age +
      ".</h1>"
  );
}

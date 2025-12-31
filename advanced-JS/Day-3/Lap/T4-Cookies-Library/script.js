var submit = document.getElementById("registerForm");

submit.onsubmit = function (e) {
  e.preventDefault();
  var name = document.querySelector('input[name="name"]').value;
  var age = document.querySelector('input[name="age"]').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var color = document.querySelector('input[name="color"]').value;

  setCookie("name", name, new Date("12/31/2025"));
  setCookie("age", age, new Date("12/31/2025"));
  setCookie("gender", gender, new Date("12/31/2025"));
  setCookie("color", color, new Date("12/31/2025"));

  // var visits = getCookie("visits");
  // visits = visits ? Number(visits) + 1 : 1;
  // setCookie("visits", visits, new Date("12/31/2025"));

  location.href = "/profile/profile.html";
};

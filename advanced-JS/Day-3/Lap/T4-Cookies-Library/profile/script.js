if (!hasCookie("name")) {
  location.href = "/";
}

console.log(getCookie("visits"));

var username = getCookie("name") || "User";
var gender = getCookie("gender") || "male";
var visits = getCookie("visits") || 0;
var color = getCookie("color") || "#2196f3";
console.log(visits);

var imgSrc =
  gender === "male"
    ? `<div id="maleIcon">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="#2196f3">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4 22c0-4 4-6 8-6s8 2 8 6"></path>
              </svg>
            </div>`
    : ` <div id="femaleIcon">
      <svg width="120" height="120" viewBox="0 0 24 24" fill="#e91e63">
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M6 21c0-4 3-6 6-6s6 2 6 6"></path>
      </svg>
    </div>`;

document.getElementById("profile").innerHTML = `
      <h2 style="color:${color}">
        Welcome back, ${username}!
      </h2>
      <p>Number of visits: <strong style="color:${color}">${visits}</strong></p>
      ${imgSrc}
      <a href="/" class="back-link">Edit Profile / Register Again</a>
    `;

setCookie("visits", Number(visits) + 1, new Date("12/31/2025"));

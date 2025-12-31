/** select elements */
var main = document.querySelector(".main");
var loading = document.querySelector(".loading");
var cardsContainer = document.querySelector(".cards");
var usersList = document.querySelector(".list");

/** global data */
var allPosts = [];
var allUsers = [];

/** toggle loading and main */
function showLoading() {
  loading.style.display = "block";
  main.style.display = "none";
  main;
}

function hideLoading() {
  loading.style.display = "none";
  main.style.display = "flex";
}

/** map the data */
function renderPosts(posts) {
  cardsContainer.innerHTML = "";

  posts.forEach(function (post) {
    cardsContainer.innerHTML += `
            <div class="card">
          <h3 class="title">${post.title}</h3>
          <p class="body">
            ${post.body}
          </p>
        </div>
        `;
  });
}

/** render users */
function renderUsers() {
  usersList.innerHTML = "";

  allUsers.forEach(function (user) {
    var li = document.createElement("li");
    li.className = "list__item";
    li.textContent = user.name;

    li.addEventListener("click", function () {
      li.classList.toggle("active");
      var filteredPosts = allPosts.filter(function (post) {
        return post.userId === user.id;
      });

      renderPosts(filteredPosts);
    });

    usersList.appendChild(li);
  });
}

/** fetch users */
function fetchUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      allUsers = JSON.parse(xhr.responseText);
      renderUsers();
    }
  };
}

/** fetch posts  */
function fetchPosts() {
  var xhr = new XMLHttpRequest();
  showLoading();

  xhr.open("get", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();

  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === 4) {
      hideLoading();
      if (xhr.status === 200) {
        allPosts = JSON.parse(xhr.response);
        renderPosts(allPosts.slice(0, 10));
      } else {
        cardsContainer.innerHTML = "<p>Error loading data</p>";
      }
    }
  });
}

/** init */
fetchUsers();
fetchPosts();

const usersTabs = document.getElementById("users-tabs");
const postsList = document.getElementById("posts-list");

/* ========== a) Fetch Users using Promises (then / catch) ========== */
fetch("https://dummyjson.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  })
  .then((data) => {
    displayUsers(data.users);
  })
  .catch((error) => {
    console.error(error);
  });

function displayUsers(users) {
  users.forEach((user) => {
    const tab = document.createElement("div");
    tab.className = "user-tab";
    tab.textContent = user.username;

    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".user-tab")
        .forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");
      getUserPosts(user.id);
    });

    usersTabs.appendChild(tab);
  });
}

/* ========== b) Fetch Posts using async / await ========== */
async function getUserPosts(userId) {
  postsList.innerHTML = "<li>Loading...</li>";

  try {
    const response = await fetch(
      `https://dummyjson.com/posts/user/${userId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    displayPosts(data.posts);
  } catch (error) {
    console.error(error);
  }
}

function displayPosts(posts) {
  postsList.innerHTML = "";

  if (posts.length === 0) {
    postsList.innerHTML = "<li>No posts for this user</li>";
    return;
  }

  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    postsList.appendChild(li);
  });
}


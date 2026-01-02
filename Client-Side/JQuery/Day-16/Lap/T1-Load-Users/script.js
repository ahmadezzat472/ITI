$(document).ready(function () {
  $("#load-all").click(function () {
    $.ajax({
      url: "https://dummyjson.com/posts/?limit=0",
      method: "GET",
      success: function (data) {
        $("#post-count").text(data.posts.length);
        $("#posts-container").empty();
        data.posts.forEach(function (post) {
          $("#posts-container").append(
            `
                            <div class="post-card">
                                <p class="post-title">${post.title}</p>
                                <p class="post-body">${post.body}</p>
                                <p class="post-meta">${post.tags}</p>
                            </div>
                        `
          );
        });
      },
    });
  });
  $("#load-user1").click(function () {
    $.get("https://dummyjson.com/posts/?limit=5", function (data) {
      $("#post-count").text(data.posts.length);
      $("#posts-container").empty();
      data.posts.forEach(function (post) {
        $("#posts-container").append(
          `
                            <div class="post-card">
                                <p class="post-title">${post.title}</p>
                                <p class="post-body">${post.body}</p>
                                <p class="post-meta">${post.tags}</p>
                            </div>
                        `
        );
      });
    });
  });
  $("#load-user2").click(function () {
    $.getJSON("https://dummyjson.com/posts/?limit=10", function (data) {
      $("#post-count").text(data.posts.length);
      $("#posts-container").empty();
      data.posts.forEach(function (post) {
        $("#posts-container").append(
          `
                            <div class="post-card">
                                <p class="post-title">${post.title}</p>
                                <p class="post-body">${post.body}</p>
                                <p class="post-meta">${post.tags}</p>
                            </div>
                        `
        );
      });
    });
  });
});

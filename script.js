fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    var container = document.getElementById("cards");

    for (var i = 0; i < 20; i++) {
      var post = posts[i];

      var card = document.createElement("div");
      card.className = "card";

      var idEl = document.createElement("p");
      idEl.className = "card-id";
      idEl.textContent = "#" + post.id;

      var titleEl = document.createElement("h2");
      titleEl.className = "card-title";
      titleEl.textContent = post.title;

      var bodyEl = document.createElement("p");
      bodyEl.className = "card-body";
      bodyEl.textContent = post.body.slice(0, 50) + "...";

      card.appendChild(idEl);
      card.appendChild(titleEl);
      card.appendChild(bodyEl);

      container.appendChild(card);
    }
  });

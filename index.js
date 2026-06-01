fetch("posts.json")
  .then(r => r.json())
  .then(posts => {

    const container = document.getElementById("posts");

    posts.forEach(post => {

      const div = document.createElement("div");

      div.innerHTML = `
        <a href="${post.slug}.html">
          <h2>${post.title}</h2>
        </a>
      `;

      container.appendChild(div);

    });

  });

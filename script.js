console.log("JS toimii");

div.className = "post-card";

fetch("posts.json")
  .then(r => {
    console.log("STATUS:", r.status);
    return r.json();
  })
  .then(posts => {

    console.log("POSTS:", posts);

    const container = document.getElementById("posts");

    if (!container) {
      console.error("EI LÖYDY #posts HTML:stä");
      return;
    }

    posts.forEach(post => {

      const div = document.createElement("div");

      div.innerHTML = `
        <a href="${post.slug}.html">
          <h2>${post.title}</h2>
        </a>
      `;

      container.appendChild(div);
    });

  })
  .catch(err => console.error("FETCH ERROR:", err));

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

fetch("posts.json")
  .then(r => r.json())
  .then(posts => {

    const post = posts.find(p => p.slug === slug);

    if (!post) {
      document.body.innerHTML = "<h1>Postia ei löydy</h1>";
      return;
    }

    document.getElementById("title").innerText = post.title;
    document.getElementById("content").innerText = post.content;

  });

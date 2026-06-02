async function loadPosts() {
    const postsContainer = document.getElementById("posts");

    if (!postsContainer) {
        return;
    }

    try {
        /*
            Jos tiedostosi nimi on posts.json, pidä tämä näin.
            Jos tiedostosi nimi on postaus.json, vaihda riviksi:

            const response = await fetch("./postaus.json?v=1000");
        */
        const response = await fetch("./posts.json?v=1000");

        if (!response.ok) {
            throw new Error("posts.json ei latautunut");
        }

        const posts = await response.json();

        postsContainer.innerHTML = "";

        posts.forEach(function(post) {
            const article = document.createElement("article");
            article.className = "post-preview";

            const title = post.title || "Nimetön postaus";
            const url = post.url || "#";
            const excerpt = post.excerpt || "";
            const date = post.date || "";

            let dateHtml = "";

            if (date.trim() !== "") {
                dateHtml = `<time class="preview-date">${date}</time>`;
            }

            article.innerHTML = `
                <h2>
                    <a href="${url}">${title}</a>
                </h2>

                ${dateHtml}

                <p>${excerpt}</p>

                <a href="${url}" class="read-more">Lue lisää →</a>
            `;

            postsContainer.appendChild(article);
        });

    } catch (error) {
        postsContainer.innerHTML = `
            <article class="post-preview">
                <h2>Postauksia ei saatu ladattua</h2>
                <p>Tarkista, että posts.json löytyy samasta kansiosta kuin index.html.</p>
            </article>
        `;

        console.error(error);
    }
}

loadPosts();

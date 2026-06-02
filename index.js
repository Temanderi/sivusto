const posts = [
    {
        title: "Postaus 1",
        date: "",
        excerpt: "Tämä on ensimmäinen postaus.",
        url: "./postaus1.html"
    },
    {
        title: "Postaus 2",
        date: "",
        excerpt: "Tämä on toinen postaus.",
        url: "./postaus2.html"
    },
    {
        title: "Jorma",
        date: "",
        excerpt: "Lyhyt kuvaus postauksesta.",
        url: "./jorma.html"
    },
    {
        title: "NIMEKSI JOTAIN",
        date: "",
        excerpt: "Lyhyt kuvaus postauksesta.",
        url: "./nimeksi-jotain.html"
    }
];

const postsContainer = document.getElementById("posts");

posts.forEach(function(post) {
    const article = document.createElement("article");
    article.className = "post-preview";

    let dateHtml = "";

    if (post.date && post.date.trim() !== "") {
        dateHtml = `<time class="preview-date">${post.date}</time>`;
    }

    article.innerHTML = `
        <h2>
            <a href="${post.url}">${post.title}</a>
        </h2>

        ${dateHtml}

        <p>${post.excerpt}</p>

        <a href="${post.url}" class="read-more">Lue lisää →</a>
    `;

    postsContainer.appendChild(article);
});

fetch("posts.json")
    .then(response => response.json())
    .then(posts => {

        posts.sort((a, b) => {
            if (!a.date) return 1;
            if (!b.date) return -1;

            return new Date(b.date) - new Date(a.date);
        });

        const container = document.getElementById("posts");

        posts.forEach(post => {

            const div = document.createElement("div");
            div.className = "post";

            div.innerHTML = `
                <div class="post-title">${post.title}</div>

                ${
                    post.date
                        ? `<div class="post-date">${post.date}</div>`
                        : ""
                }

                <div class="post-content">
                    ${post.content}
                </div>
            `;

            container.appendChild(div);
        });
    });
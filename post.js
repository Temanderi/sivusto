<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <title>Postaus</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

    <a href="index.html">← Takaisin</a>

    <h1 id="title"></h1>
    <p id="content"></p>

    <!-- Kommentit otsikko -->
    <div class="comment-header">Kommentit</div>

    <!-- Disqus -->
    <div id="disqus_thread"></div>

</div>

<!-- Disqus script -->
<script id="dsq-count-scr" src="//taikatemppu-link.disqus.com/count.js" async></script>

<script>
var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = window.location.href;
};

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://taikatemppu-link.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
</script>

<script src="post.js"></script>

</body>
</html>

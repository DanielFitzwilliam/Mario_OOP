---
toc: true
comments: false
layout: post
title: JS Testing
description: Practicing with JavaScript to prepare for Tri 2
courses: { plans: {week: 12} }
type: hacks
blog: true
---

<style>
#window { border: 1px solid white;};
</style>

<body>
    <h1>Canvas</h1>
    <div>
    <canvas id="window" width=500 height=300></canvas>
    <script src="/Mario_OOP/js/canvas.js" type="module">
    </script>
    </div>
    <div id="radios">
        <input type="radio" id="Calvin" name="Dogs" value="Calvin">
        <label for="Calvin">Calvin</label><br>
        <input type="radio" id="Freckles" name="Dogs" value="Freckles" checked>
        <label for="Freckles">Freckles</label><br>
    </div>
    <div id="button">
        <input type="button" id="play" name="play" value="Play Game"><br>
        <script src="/Mario_OOP/js/gameLoop.js" type="module">
    </div>
</body>
document.body.innerHTML = `
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: #121212;
            color: white;
        }
        .game-button {
            display: block;
            width: 200px;
            padding: 10px;
            margin: 10px auto;
            background: #800080;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
.game-button:hover {
    background-color: #EE82EE;
}
    </style>
    <h1>Nebula-X light</h1>
    <p>Nebula-X light is a mini version in js of the origional. currently only containing games. eventually we hope to add more!</p>
<h3> Games </h3>
    <button class="game-button" id="1v1lolBtn">1v1.LOL</button>
    <button class="game-button" id="eaglecraftBtn">Eaglecraft</button>
    <button class="game-button" id="basketRandomBtn">Basket Random</button>
    <button class="game-button" id="crossyroadBtn">Crossy Road</button>
    <button class="game-button" id="driftbossBtn">Drift Boss</button>
    <button class="game-button" id="eggycarBtn">Eggy Car</button>
    <button class="game-button" id="flappybirdBtn">Flappy Bird</button>
    <button class="game-button" id="kahootBtn">KahootFlooder</Flooder></button>
    <button class="game-button" id="mario64Btn">Mario 64</button>
`;

const games = {
    "1v1lolBtn": "https://artedu1808.github.io/g77/1v1-lol-3/",
    "eaglecraftBtn": "https://eaglercraft-.glitch.me/",
    "basketRandomBtn": "https://professorlouie.github.io/gamehub/basketrandom/",
    "crossyroadBtn": "https://unsignedarduino.github.io/Crossy-Roads-2/",
    "driftbossBtn": "https://webglmath.github.io/drift-boss/",
    "eggycarBtn": "https://webglmath.github.io/eggy-car/",
    "flappybirdBtn": "https://professorlouie.github.io/gamehub/flappybird/",
    "kahootBtn": "https://kahoot.club",
    "mario64Btn": "https://professorlouie.github.io/mario/index.html"
};

Object.keys(games).forEach(id => {
    document.getElementById(id).addEventListener("click", () => {
        var newTab = window.open('about:blank', '_blank');
        newTab.document.write(`
            <iframe id="innerFrame" name="innerFrame" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads" frameborder="0" allowfullscreen="" src="${games[id]}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
        `);
    });
});
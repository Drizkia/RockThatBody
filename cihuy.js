        const lyrics = [
            ["I", 330],
            ["WANNA", 330],
            ["da-", 330],
            ["I", 330],
            ["WANNA", 350],
            ["DANCE", 330],
            ["IN", 330],
            ["THE", 330],
            ["LIGHTS", 1200, "white"],

            ["I", 330],
            ["WANNA", 350],
            ["RO-", 330],
            ["I", 330],
            ["WANNA", 330],
            ["ROCK", 600, "white"],
            ["YOUR", 800],
            ["BODY", 900, "white"],

            ["I", 330],
            ["WANNA", 330],
            ["GO", 330],
            ["I", 330],
            ["WANNA", 330],
            ["GO", 330],
            ["FOR", 330],
            ["A", 330],
            ["RIDE", 1000],

            ["HOP", 330],
            ["IN", 330],
            ["THE", 330],
            ["MUSIC", 330],
            ["AND", 330],
            ["ROCK", 600, "white"],
            ["YOUR", 800],
            ["BODY", 900, "white"],

            ["ROCK", 330],
            ["THAT", 330],
            ["BODY", 330],

            ["COME ON", 330],
            ["COME ON <br> <br> COME ON", 500, "white"],

            ["ROCK", 330],
            ["THAT", 330],
            ["BODY", 330],
            ["ROCK THAT BODY", 700],

            ["ROCK", 330],
            ["THAT", 330],
            ["BODY", 330],

            ["COME ON", 330],
            ["COME ON <br> <br> COME ON", 500, "white"],

            ["ROCK", 600],
            ["THAT", 800],
            ["BODY", 900],
        ];

        let currentIndex = 0;
        let timeoutId = null;

        const lyricsDisplay = document.getElementById('lyricsDisplay');
        const startBtn = document.getElementById('startBtn');

        function displayLine() {
            if (currentIndex < lyrics.length) {
                const [line, delay, bgChange] = lyrics[currentIndex];

                if (bgChange == "white") {
                    document.body.style.backgroundColor = "white";
                    lyricsDisplay.style.color = "black";
                    lyricsDisplay.style.textShadow = "4px 4px 0px #fff, 8px 8px 0px rgba(255,255,255,0.3)";
                } else {
                    document.body.style.backgroundColor = "black";
                    lyricsDisplay.style.color = "white";
                    lyricsDisplay.style.textShadow = "4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)";
                }

                lyricsDisplay.innerHTML = `<span class="line">${line || '♪'}</span>`;
                currentIndex++;
                
                timeoutId = setTimeout(displayLine, delay);
            } else {
                lyricsDisplay.innerHTML = '<span class="lines">END</span>';
                startBtn.textContent = 'RESTART';
                startBtn.style.display = 'block';
            }
        }

        function start() {
            currentIndex = 0;
            startBtn.style.display = 'none';
            displayLine();
        }

        startBtn.addEventListener('click', start);
    </sc

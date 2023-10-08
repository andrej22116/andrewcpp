const App = {
    initPreloader() {
        this.__preloaderAnimationTime = 0
        document
            .querySelectorAll('.preloader .lines .line')
            .forEach(e => {
                if ( this.__preloaderAnimationTime < +e.dataset.delay ) {
                    this.__preloaderAnimationTime = +e.dataset.delay
                }

                e.style.transition = +e.dataset.delay * 1.5 + 's';
                e.classList.add((Math.round(Math.random() * 10000) % 2) ? 'down' : 'up');
            });
    },

    initAllMagicText() {
        const magicTextList = document
            .querySelectorAll('.magic-text')
            .forEach(element => this.makeTextMagical(element));
    },

    initHeroTitle() {
        const memeEmoji = ['🤡', '💩', '🐒', '🦐', '🚳'];
        const getRandomEmoji = () => memeEmoji[Math.round(Math.random() * 10000) % memeEmoji.length];
        document
            .querySelectorAll('.hero .magic-text span')
            .forEach(element => {
                const text = element.innerText;
                if ( text === ' ' ) {
                    return;
                }

                element.addEventListener('click', _ => element.innerText = element.innerText !== text ? text : getRandomEmoji());
            });
    },

    /**
     * @param {HTMLElement} element
     */
    makeTextMagical( element ) {
        const newText = element.innerText
            .split('')
            .map(letter => letter !== ' ' ? `<span>${letter}</span>` : '\u00A0')
            .join('');
        element.innerHTML = newText;

        this.makeTextLettersMagical(element);
    },

    /**
     * @param {HTMLElement} element
     */
    makeTextLettersMagical( element ) {
        const timeout = 1000 + Math.random() * 1000;
        const effectTimeout = 100;

        setInterval(() => {
            const letters = element.querySelectorAll('span');
            const pickLettersCount = Math.floor(letters.length * 0.33);
            const pickedLetters = new Set();
            for ( let i = 0; i < pickLettersCount; i++ ) {
                const letterIndex = Math.round(Math.random() * 10000) % letters.length;
                const letterElement = letters[letterIndex];
                pickedLetters.add(letterElement);
            }

            pickedLetters.forEach(l => l.classList.add('magic-1'));
            setTimeout(() => pickedLetters.forEach(l => l.classList.remove('magic-1') || l.classList.add('magic-2')), effectTimeout);
            setTimeout(() => pickedLetters.forEach(l => l.classList.remove('magic-2') || l.classList.add('magic-3')), effectTimeout * 2);
            setTimeout(() => pickedLetters.forEach(l => l.classList.remove('magic-3')), effectTimeout * 3);
        }, timeout);
    },

    hidePreloader() {
        const preloader = document.querySelector('.preloader');
        if ( !preloader ) {
            return;
        }

        preloader.classList.add('hiding');
        setTimeout(() => preloader.classList.remove('hidding') || preloader.classList.add('hidden'), this.__preloaderAnimationTime * 1000)
    },

    run() {
        this.initPreloader();
        this.initAllMagicText();

        this.initHeroTitle();

        this.hidePreloader();
    },
};

window.addEventListener('load', () => {
    App.run();
});
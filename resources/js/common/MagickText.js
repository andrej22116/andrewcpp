export default class MagickText {
    /**
     * @param {HTMLElement} root Location for search
     * @param {boolean} forceMagick
     */
    constructor(root = document, forceMagick = true) {
        this.magickTextList = [...root.querySelectorAll('.magic-text')];
    }

    /**
     * Add magic effects to each text
     */
    makeTextMagical() {
        this.magickTextList.forEach(element => this.makeElementTextMagical(element))
    }

    /**
     * Remove magic effect from each text
     */
    makeTextDefault() {
        this.magickTextList.forEach(element => {
            element.innerHtml = [...element.children].map(letterElement => letterElement.innerText).join('');
        });
    }

    /**
     * @param {HTMLElement} element
     */
    makeElementTextMagical( element ) {
        element.innerHTML = element.innerText
            .split('')
            .map(letter => letter !== ' ' ? `<span>${letter}</span>` : '\u00A0')
            .join('');

        this.makeTextLettersMagical(element);
    }

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
    }
}

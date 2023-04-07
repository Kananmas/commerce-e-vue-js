export function toPascalCase(string = '') {
    const words = string.split('-');
    if(words.length < 2) {
        let newWord = words[0][0].toUpperCase() + words[0].slice(1);
        return newWord;
    }
    const newWords = words.map((word) => {
        let newWord = '';
        newWord = word[0].toUpperCase() + word.slice(1);
        return newWord;
    })
    let newString = newWords[0] + " " + newWords[1];
    return newString;
}
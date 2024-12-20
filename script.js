
function tryWord(base, word) {
	// TODO: fix jeu sensible à la casse.
    base = base.toLowerCase()
    word = word.toLowerCase()

	if (word === base) {
		return {
            wellPlaced: base.split(''),
            missplaced: [],
            notInWord: [] 
        }
    } else {
    return { 
        wellPlaced: goodLetters(base,word) , 
        missplaced: badLetters(base, word), 
        notInWord: notLetters(base,word)
        }
    }
}
// console.log(tryWord(word, base))


// vérifier les lettres bien placée
function goodLetters(base,word) {
    if (typeof(word) !== "string" || word === "") {
        return "il faut des mots"
    }

    let arrayBase = base.split('');
    let arrayWord = word.split('');
    let wellPlaced = []
    
    for (let i = 0; i < arrayBase.length; i++) {
        if (arrayBase[i] === arrayWord[i]) {
            wellPlaced.push(arrayWord[i]);
        } 
    }
    // console.log(wellPlaced)
    return wellPlaced
}
// console.log(goodLetters("hello","hello"))
module.exports = { goodLetters }

// vérifier les lettres mal placée
function badLetters(base, word) {
    let arrayBase = base.split('');
    let arrayWord = word.split('');
    let missplaced = [];
    for (let i = 0; i < arrayBase.length; i++) {
        if (arrayBase[i] !== arrayWord[i]) {
            missplaced.push(arrayWord[i])
        } else {
            notLetters(base,word)
        }
    }
    // console.log(missplaced)
    return missplaced
}
// console.log(badLetters("hello","holle"))

// verifier les lettres absentes
function notLetters(base,word) {
    let arrayBase = base.split('');
    let arrayWord = word.split('');
    let notInWord = [];
    for (const char of arrayWord) {
        if (arrayBase.includes(char) === false) {
        notInWord.push(char)
        }
    }
    // console.log(notInWord)
    return notInWord
}
// console.log(notLetters("dictionnaire","dictipnnaires"))

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(base, word)
    console.log(result)
    document.getElementById("word").value = ''
    document.getElementById("try").innerText = word
    document.getElementById("well").innerText = `Bien placé: ${(result.wellPlaced || []).join(', ')}`
    document.getElementById("miss").innerText = `Mal placé: ${(result.missplaced || []).join(', ')}`
    document.getElementById("not").innerText = `Pas dans le mot: ${(result.notInWord || []).join(', ')}`
    if(result.wellPlaced.length == base.length) {
        console.log(result.wellPlaced)
        document.getElementById("win").innerText = `Vous avez gagné`
        
    }
}

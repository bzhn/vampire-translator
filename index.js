const dict = {
    "f": "а",
    ",": "б",
    "d": "в",
    "u": "г",
    "l": "д",
    "t": "е",
    "`": "ё",
    ";": "ж",
    "p": "з",
    "b": "и",
    "q": "й",
    "r": "к",
    "k": "л",
    "v": "м",
    "y": "н",
    "j": "о",
    "g": "п",
    "h": "р",
    "c": "с",
    "n": "т",
    "e": "у",
    "a": "ф",
    "[": "х",
    "w": "ц",
    "x": "ч",
    "i": "ш",
    "o": "щ",
    "]": "ъ",
    "s": "ы",
    "m": "ь",
    "'": "э",
    ".": "ю",
    "z": "я",

    "F": "А",
    "<": "Б",
    "D": "В",
    "U": "Г",
    "L": "Д",
    "T": "Е",
    "~": "Ё",
    ":": "Ж",
    "P": "З",
    "B": "И",
    "Q": "Й",
    "R": "К",
    "K": "Л",
    "V": "М",
    "Y": "Н",
    "J": "О",
    "G": "П",
    "H": "Р",
    "C": "С",
    "N": "Т",
    "E": "У",
    "A": "Ф",
    "{": "Х",
    "W": "Ц",
    "X": "Ч",
    "I": "Ш",
    "O": "Щ",
    "}": "Ъ",
    "S": "Ы",
    "M": "Ь",
    "\"": "Э",
    ">": "Ю",
    "Z": "Я",

    "/": ".",
    "?": ",",
    "|": "/",
    "^": ":",
    "$": ";",
    "#": "№",
    "@": "\"",
    "&": "?"
}

var possible = Object.keys(dict);
 

function decryption() {
    rawText = document.getElementById("raw").value;
    toChange = rawText.split('');
    var toChangeLength = toChange.length;
    var result = '';
    for (let i = 0; i < toChangeLength; i++) {
        if (possible.indexOf(toChange[i]) != -1){
            result += dict[toChange[i]];
            console.log(dict[toChange[i]]);
        }
        else {
            result += toChange[i];
        }
    }
    document.getElementById("modified").value = result; // = toChange;
    return(result);
}

function duckIt () {
    text = decryption();
    window.open("https://duckduckgo.com/?q=" + encodeURIComponent(text));
}

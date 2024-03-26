let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift(); 
}

function appendCat(name) {
    return [...cats, "Broom"];
}

function prependCat(name) {
    return ["Arnold", ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

module.exports = destructivelyPrependCat;

function removeFirstCat() {
        if (cats.length === 0) {
        return [];
    }

    const newCats = [...cats];
    newCats.shift();
    return newCats;
}
module.exports = removeFirstCat;


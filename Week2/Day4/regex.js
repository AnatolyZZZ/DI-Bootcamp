let pattern = /\d|W|\s/g

let word = "jhytij_hb"

console.log(word.match(pattern));

console.log(pattern.test(word));
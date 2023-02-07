function mergeWords(string) {
    return function(nextString) {
      if (nextString === undefined) {
        return string;
      } else {
        return mergeWords(string + ' ' + nextString);
      }
    }
   }
// const mergeWords = word => nextWord => !nextWord ? word : mergeWords(word + ' ' + nextWord)
const M  = x => y  => !y ? x : M(y + " " + x);

console.log(M("good")("day")());

// M() 
// console.log(M("Hello")("world")("what")("a")("nice")("day")());

// M("hello") : y => hello + " " + M(y) // M()
const findNeedle = function(words, word) {
    // Schrijf hier de functie...
        words.reduce((value, index) => {
           if (value === word) {
               return index;
           }
       })
  };
  
  module.exports = findNeedle;

  findNeedle(["house", "train", "slide", "needle", "book"],"needle");
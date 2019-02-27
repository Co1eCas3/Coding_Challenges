// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const alpha_score = {};
  alpha.split("").forEach((letter, i) => (alpha_score[letter] = i + 1));
  let scored;

  if (x.length) {
    scored = x
      .split(" ")
      .map(word => word.split(""))
      .sort((a, b) => {
        return (
          a
            .map(letter => alpha_score[letter])
            .reduce((a, b) => {
              return a + b;
            }, 0) -
          b
            .map(letter => alpha_score[letter])
            .reduce((a, b) => {
              return a + b;
            }, 0)
        );
      });
  }

  return scored.pop().join("");
}

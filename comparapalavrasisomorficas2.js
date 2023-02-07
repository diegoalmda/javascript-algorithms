/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function findEqualLetters(word, letter) {
  const indexList = word.split("").reduce((final, actualLetter, index) => {
    if(actualLetter === letter) {
      final.push(index);
    }
    return final;
  }, []);
  return indexList;
}

const equalsCheck = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
}

var isIsomorphic = function(s, t) {
  let result = true;

  for(let i = 0; i < s.length; i++) {
    if(!equalsCheck(findEqualLetters(s, s[i]), findEqualLetters(t, t[i]))) {
      result = false;
    }
  }

  return result;
};

console.log(isIsomorphic('car', 'iso'));
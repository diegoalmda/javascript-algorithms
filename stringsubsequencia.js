/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// s subsequencia de t
var isSubsequence = function(s, t) {
  let mountedString = '';
  let j = 0;

  for(let i = 0; i < t.length; i++) {
    if(s[j] === t[i]) {
      mountedString += s[j];
      j++;
    }
  }

  return mountedString === s;
};

console.log(isSubsequence('abc', 'afgtc'));
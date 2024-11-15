/**
 * Function to check whether two strings are an anagram of each other.
 * @param {string} str1 - First string to compare.
 * @param {string} str2 - Second string to compare.
 * @returns {boolean} - Returns true if the strings are anagrams, otherwise returns false.
 */

function areAnagrams(str1, str2) {
  //Rule out strings of different lengths
  if (str1.length !== str2.length) {
    return false;
  }
  //Sort each strings character and compare the result
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Test suite for the areAnagrams function
function testAreAnagrams() {
  // Positive Cases (Anagrams)
  console.assert(
    areAnagrams("angel", "glean"),
    "'listen' and 'silent' should be anagrams"
  );
  console.assert(
    areAnagrams("silent", "listen"),
    "'triangle' and 'integral' should be anagrams"
  );

  // Negative Cases (Not Anagrams)
  console.assert(
    !areAnagrams("hello", "world"),
    "'hello' and 'world' should not be anagrams"
  );
  console.assert(
    !areAnagrams("abcd", "abce"),
    "'abcd' and 'abce' should not be anagrams"
  );

  // Edge Cases
  console.assert(areAnagrams("", ""), "Empty strings should be anagrams");
  console.assert(
    !areAnagrams("a", "b"),
    "Single different characters should not be anagrams"
  );
}

// Run the tests
testAreAnagrams();

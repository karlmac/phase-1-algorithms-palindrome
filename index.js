//Palindrome check function
function isPalindrome(word){
  //console.log(Array(...word).reverse().toString());
  //console.log(word.split("").reverse());
  //console.log(Array.from(word).toString() === Array.from(word).reverse().toString())
  console.log(word);
  
  if(word === null || typeof(word) != "string" || word.trim().length === 0 )
  {
    console.log(`Input Error => ${typeof(word)}: ${word}`);
    return false;
  }
  return Array.from(word).toString() === Array.from(word).reverse().toString();
  
}
//isPalindrome("yo 😎😜🙃𝟙𝟚𝟛");

/* 
Add your pseudocode here
*/

/*
Add written explanation of your solution here  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("         "));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome());
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

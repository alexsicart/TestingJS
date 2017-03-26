function AlphabetSoup(str) {

  // code goes here
 var arr = str.split("");
 var sorted = arr.sort();

  return sorted.join("");

}

// keep this function call here
AlphabetSoup(readline());

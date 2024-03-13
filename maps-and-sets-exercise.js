// Question 1
{1,2,3,4}

// Question 2
"ref"

// Question 3
{Array(3) => true}
{Array(3) => false}

// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

// vowelCount
function vowelCheck(char){
    const vowels = "aeiou"
    return vowels.includes(char);
  }
  
  function vowelCount(str){
    const newMap = new Map();
    for(let char of str){
      if(vowelCheck(char)){
        if(newMap.has(char)){
          newMap.set(char, newMap.get(char) + 1);
        } else {
          newMap.set(char, 1);
        }
      }
    }
    return newMap;
  }
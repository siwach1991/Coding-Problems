const longestsubstring = (str) => {
    let start = 0;
    let end = 0;
    let maxlength = 0;
    let substr = new Set();
    while (end < str.length) {
        if (!substr.has(str[end])) {
            substr.add(str[end]);
            maxlength = Math.max(maxlength, substr.size)
            end++;

        } else {
            substr.delete(str[start]);
            start++;
        

        }


    }
return maxlength;

}

console.log(longestsubstring('geeksforgeeks'));
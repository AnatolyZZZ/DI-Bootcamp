const checkForAnagram = (str1, str2) => {
    arr1 = str1.toUpperCase().split("");
    arr2 = str2.toUpperCase().split("");
    isAnn = true;
    const delSpace = (arr) => arr.filter(elt => elt != " " && elt !="\xa0");
    arr1 = delSpace(arr1).sort();
    arr2 = delSpace(arr2).sort();
    console.log(arr1)
    
    // debugger;
    if (arr1.length != arr2.length) {isAnn = false} else {
        for (let i = 0; i<arr1.length; i++) {
            if (arr1[i] != arr2[i]) {isAnn = false};
        }
    }
    return isAnn;
}

console.log(checkForAnagram("Astronomer", "Moon starer"));
console.log(checkForAnagram("School    master", "The classroom"));
console.log(checkForAnagram("The MorseCode", "Here come dots"));

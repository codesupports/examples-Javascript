const name = "Raj Kumar";
// First Way

name.split('').reverse().join('');
// output 'ramuK jaR'

---------------------------------
// Second Way

const reverseString =(str)=> {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
    
}
reverseString(name);
// output 'ramuK jaR'


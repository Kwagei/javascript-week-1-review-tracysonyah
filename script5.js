//A word is given write a punction to tell if the word is a Palindrome.

function palindrumOrNot(word) {
    palindrum = '';
    for(let i = word.length - 1; i >= 0; i--) {
        palindrum += word[i];
    }
    if(word === palindrum) {
        console.log('yea, palindrum');
    }
    else{
    console.log('no, far from palindrum');
    }
    console.log(palindrum)
}
palindrumOrNot('come');
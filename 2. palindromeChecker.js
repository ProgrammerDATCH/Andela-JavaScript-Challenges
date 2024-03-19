function isPalindrome(txt){
    txt = txt.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isTxtPalindrome =  (txt == txt.split('').reverse().join(''))
    return (isTxtPalindrome ? `${txt} - is a palindrome.`: `${txt} - is NOT a palindrome.`)
}

console.log(isPalindrome("eye"))
console.log(isPalindrome("This"))
console.log(isPalindrome("Ey@e-"))
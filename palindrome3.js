
Palindrome = (text) => {
    string = text.toLocaleLowerCase();
    let removespace = string.replace(/\s+/g, '');
    let hasil = Array.from(removespace).toString() === Array.from(removespace).reverse().toString();
    console.log(text);
    console.log("Palindrome? " +hasil);
}

Palindrome("makam");
Palindrome("nurses run");
Palindrome("nurse");
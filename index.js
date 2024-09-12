const passwordBox = document.getElementById("password");
const vari = document.querySelector("#variable");
let length;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = '!@#$%^&*()-_+=}{":;?/><.,|`~';
const allChar = upperCase + lowerCase + symbol;

function createPassword() {
    let password = "";
    if(vari.value!=0){
        length=vari.value;
    }
    else{
        length=5;
    }
    

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}
function copyText() {
    const textToCopy = passwordBox.value;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Text copied: " + textToCopy);
    })
}

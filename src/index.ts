import { sha256 } from 'js-sha256';


const generateBtn = document.querySelector('#genBtn') as HTMLFormElement
generateBtn.addEventListener('click', buttonHandler, false)

function buttonHandler() {
    console.log('hi')
    const pwElement = document.querySelector("#password") as HTMLFormElement;
    const saltElement = document.querySelector("#salt") as HTMLFormElement;
    const lengthElement = document.querySelector("#length") as HTMLFormElement;
    const includeElement = document.querySelector("#notinclude") as HTMLFormElement;
    const newPwElement = document.querySelector("#newpw") as HTMLFormElement;

    const pw = pwElement.value;
    const salt = saltElement.value;
    const length = lengthElement.value;
    var include = "True";

    if (includeElement.checked) {
        include = "False";
    }

    var hash = sha256.create();
    hash.update(pw + salt)
    console.log('===========hash========')
    console.log(hash)
    var newpw = hash.hex()
    // var newpw = SHA256(pw, salt, include);
    if (length > 0) {
        newpw = newpw.slice(-1 * length);
    }
    newPwElement.value = newpw;
}



function textshow(from: string) {
    console.log("test")
    const element = document.querySelector("#"+from) as HTMLFormElement;
    if (element.type == 'password') {
        element.type = 'text';
    } else {
        element.type = 'password';
    }
}

function copytoCB() {
    const newPwElement = document.querySelector("#newpw") as HTMLFormElement;
    var copiedText = document.createElement('textarea');
    copiedText.value = newPwElement.value;
    document.body.appendChild(copiedText);

    copiedText.select();
    document.execCommand("copy");
    document.body.removeChild(copiedText);

    alert("New password has been copied!");
}

const BASE_INCLUDE_SPECIALCHAR = '$%^zyxwvutsrqponmkjihgfedcba123456789ABCDEFGHJKLMNPQRSTUVWXYZ!@#';
const BASE_NOTINCLUDE_SPECIALCHAR = 'zyxwvutsrqponmlkjihgfedcba0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZaA';

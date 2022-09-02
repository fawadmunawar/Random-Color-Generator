let colorText = "123456789abcdef";
let colorCode = '';
let colorButton = document.getElementById("button");
let body = document.getElementById("body");



colorButton.addEventListener("click", generate);
function generate() {
    colorCode = '';
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random()*15);
        let randomCharacter = colorText.charAt(randomNumber);
        
        colorCode += randomCharacter;
    }
    
    let code = '#' + `${colorCode}`;
    body.style.backgroundColor = `${code}`;
    // console.log(code);
    colorButton.innerText = code;
}
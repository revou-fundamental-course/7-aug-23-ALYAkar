/* Input Validation */

const inputAlas = document.getElementById("Alas")

inputAlas.addEventListener('input', function(){
    const inputValue = inputField.value
    
    if (inputValidation(inputValue)) {
        console.log("Success")
    
    } else {
        console.log("Fail")
        alert("Not Falid")
    }
})

function inputValidation (input){
    const intergerRegex =/^-?\d+$/;
    return intergerRegex.test (input)
}

window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    resetErrorMessages();
    isTxtPresent("first-name", "First Name is required");
    isTxtPresent("last-name", "Last Name is required");

    // Validate date
    let dobBox = <HTMLInputElement> document.getElementById("dob");
    let dob = dobBox.value;

    if (!isValidDate (dob) ){
        dobBox.nextElementSibling.innerHTML = "Invalid Format (mm/dd/yyyy)";
    }
}

function isValidDate(input:string):boolean{
    // Validating mm/dd/yyyy and m/d/yyyy
    // \d{1, 2}\/\d{1, 2}\/\d{4}

    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");

    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }

        else{
               currSpan.innerText = ""; 
            }
            
        }
    }


/**
 * Returns true if the textbox with the given id has some text inside it
 * @param id The id of the <input type= "text"> to validate
 * @param errMsg The message to displat in the sibling span of the textbox
 */

function isTxtPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errorSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
        return true;
}

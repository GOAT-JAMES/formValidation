window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    isTxtPresent("first-name", "First Name is required");
    isTxtPresent("last-name", "Last Name is required");
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

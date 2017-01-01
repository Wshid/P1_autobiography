function input_check(){
    if(document.myForm.name.value==""){
        alert("Please input name");
        document.myForm.name.focus();
        return;
    }
}
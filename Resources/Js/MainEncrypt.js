/*-----------------------Variables-----------------------*/
const txtInput = document.getElementById("inputText");
const txtOutput = document.getElementById("outputText");
const btnCopy = document.getElementById("copyButton");
const lbOne = document.getElementById("labelOne");
var validate = new Boolean(false);
/*-----------------------Funciones Generales-----------------------*/
function character(event)
{
    let key = (document.all) ? event.keyCode : event.which;
    if (key == 8 || key == 13 || key == 9 || key == 32) {
        return true;
    }
    let letter = /[A-Za-z0-9]/;
    let keyPress = String.fromCharCode(key);
    return letter.test(keyPress);
}
function validation(xContnr, xTitle, xText, xColor, xColorBtn = "green"){
    if (xContnr.value == '')
    {
        Swal.fire({
            heightAuto: false,
            icon: "warning",
            title: xTitle,
            text: xText,
            color: xColor,
            confirmButtonColor: xColorBtn
          })
          validate=false;
    }
    else
    {
        validate=true;
    }
}
function show(xContnr, xButton, xLabel)
{
    xContnr.style.opacity = "100%";
    xContnr.style.background = "#000"
    xButton.style.visibility = "visible";
    xLabel.style.visibility = "hidden";
}
function occult(xContnr, xButton)
{
    xContnr.style.opacity = "80%";
    xButton.style.visibility = "hidden";
}
function copy(xContnr)
{
    xContnr.select();
    document.execCommand("copy");
    Swal.fire({
        heightAuto: false,
        position: 'top-end',
        icon: 'success',
        title: 'Texto copiado!',
        color:"#FFF",
        showConfirmButton: false,
        timer: 1500
    })
}
function encrypt(text)
{
    let array = [["a", "ai"],["e","enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];
    text = text.toLowerCase();
    for(let i = (array.length-1);i >= 0 ;i--)
    {
        if (text.includes(array[i][0]))
        {
            text = text.replaceAll(array[i][0], array[i][1]);
        }
    }
    return text;
}
function decrypt(text)
{
    let array = [["a", "ai"],["e","enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];
    text = text.toLowerCase();
    for(let i = 0;i < array.length;i++)
    {
        if (text.includes(array[i][1]))
        {
            text = text.replaceAll(array[i][1], array[i][0]);
        }
    }
    return text;
}
/*-----------------------Funciones Puntuales-----------------------*/
function copyOutput()
{
    copy(txtOutput);
    occult(txtOutput, btnCopy);
}
function txtEncrypt()
{
    validation(txtInput, "Cuidado....!", "Escribe un texto para descifrarlo o encriptarlo", "#FFF", "grey");
    if (validate === true)
    {
        show(txtOutput, btnCopy, lbOne);
        txtOutput.value = encrypt(txtInput.value);
    }
}
function txtDecrypt()
{
    validation(txtInput, "Cuidado....!", "Escribe un texto para descifrarlo o encriptarlo", "#FFF", "grey");
    if (validate === true)
    {
        show(txtOutput, btnCopy, lbOne);
        txtOutput.value = decrypt(txtInput.value);
    }
}
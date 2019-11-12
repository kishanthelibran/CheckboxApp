function myFunction() {
    var myid = document.getElementById("myid");
    var name = document.getElementById("inp1");
    var br = document.createElement("br");
    var chkbox = document.createElement("INPUT");
    chkbox.setAttribute("type", "checkbox");
    chkbox.checked = true;
    myid.appendChild(chkbox);
    var pTag = document.createElement("span");
    pTag.innerHTML = name.value;
    myid.appendChild(pTag);
    var button = document.createElement("button");
    button.innerHTML = "X";
    myid.appendChild(button);
    button.addEventListener("click", function () {
        if (chkbox.checked)
            DeleteFunct(chkbox, button, pTag);
    });
    myid.appendChild(br);
}
function DeleteFunct(chkbox, btn, pTag) {
    alert("it will be deleted");
    chkbox.parentElement.removeChild(chkbox);
    btn.parentElement.removeChild(btn);
    pTag.parentElement.removeChild(pTag);
}
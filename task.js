let element = document.getElementsByClassName('modal_active');

element[0].onclick = function () {
    element[0].className = "modal";
    //console.log(element[0]);
   // console.log(element);
}

let element1 = document.getElementById('modal_success');

element1.onclick = function () {
    element1.className = "modal_active";
   
}

const showSuccess = document.getElementsByClassName("show-success");

showSuccess.onclick = function () {
    showSuccess.className = "modal_active";
   
}


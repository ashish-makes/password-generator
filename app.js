const pass = document.querySelector(".text")
const generate = document.querySelector(".gen-btn")
const copy = document.querySelector(".copy-btn")
const drk = document.querySelector("#light-dark-mode")
const toastNotif = document.querySelector("#snackbar")
const toastNoInput = document.querySelector(".no-input")

function genpass(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=[]{}\|;:,.<>/?';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   pass.value = result;
}

const CopyText = () => {
   let text = pass.value;
   let Copytext = text;
   navigator.clipboard.writeText(Copytext).then(function () {
       if (Copytext === "") {
        toastNoInput.className = "show"
           setTimeout(function(){ toastNoInput.className = toastNoInput.className.replace("show", ""); }, 3000);
       } else {
        toastNotif.className = "show"
           setTimeout(function(){ toastNotif.className = toastNotif.className.replace("show", ""); }, 3000);
    }
   });
}

// function darkmode() {
//    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
//    localStorage.setItem('darkmode', !wasDarkmode);
//    drk.classList.toggle("bx-sun");
//    const element = document.body;
//    element.classList.toggle('dark-mode', !wasDarkmode);
//  }
 
//  function onload() {
//    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
//  }

// console.log(makeid(16));

// generate.addEventListener("click", genpass(16));
copy.addEventListener("click", CopyText);
// drk.addEventListener("click", darkmode);
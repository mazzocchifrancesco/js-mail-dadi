const send = document.getElementById("send");
const autorized = ["gino@gmail.com", "ugo@yahoo.it", "markblock@aruba.it", "123@ciao.it"];
let valid=""
let notvalid=""


send.addEventListener("click", function () {

    const userMail = document.getElementById("userMail").value;

    for (let i = 0; i < autorized.length; i++) {

        if (userMail == autorized[i]) {
            valid=1
        }

        else {
            notvalid=1
        }
    }

    if (notvalid==1 && valid==0) {
        document.getElementById("message").innerHTML="Non sei autorizzato ad accedere";
    }
    else if (notvalid==1 && valid==1) {
        document.getElementById("message").innerHTML="Sei autorizzato ad accedere";
    }
})

//............................... LOGIN

// variabili
const send = document.getElementById("send");
const message = document.getElementById("message")
const autorized = ["gino@gmail.com", "ugo@yahoo.it", "markblock@aruba.it", "123@ciao.it"];
let valid = ""
let notvalid = ""

// attivazione pulsante
send.addEventListener("click", function () {

    const userMail = document.getElementById("userMail").value;

    // ciclo controllo
    for (let i = 0; i < autorized.length; i++) {

        if (userMail == autorized[i]) {
            valid = 1
        }

        else {
            notvalid = 1
        }
    }

    // check per stampa messaggio utente
    if (notvalid == 1 && valid == 0) {
        message.innerHTML = "Non sei autorizzato ad accedere";
        message.classList.add("text-danger");
    }
    else if (notvalid == 1 && valid == 1) {
        message.innerHTML = "Sei autorizzato ad accedere";
        message.classList.add("text-success");
    }
})


//............................................. DADI


const start = document.getElementById("start");
const myDiceMessage = document.getElementById("myDice")
const pcDiceMessage = document.getElementById("pcDice")
const messageDice = document.getElementById("messageDice")



start.addEventListener("click", function () {

    const myDice=Math.floor(Math.random() * 6)+1;
    const pcDice=Math.floor(Math.random() * 6)+1;

    myDiceMessage.innerHTML= "il tuo numero è: "+myDice
    pcDiceMessage.innerHTML= "il numero del computer è: "+pcDice

    // reset colore
    messageDice.className = 'fw-bold'

    if (myDice > pcDice) {
        messageDice.innerHTML="Hai vinto"
        messageDice.classList.add("text-success");

    }
    else if (myDice<pcDice) {
        messageDice.innerHTML="Hai perso"
        messageDice.classList.add("text-danger");

    }
    else {
        messageDice.innerHTML="Avete pareggiato"
        messageDice.classList.add("text-primary");

    }

})
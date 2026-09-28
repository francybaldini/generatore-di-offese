const offese = [
    "Sei un coglionazzo",
    "Sei scemo",
    "Sei un testa di minchia",
    "Vai a fare in culo",
    "Sei un fottuto di merda",
    "vattela a pigliare nel culo",
    "figlio di un canaccio",
    "Ti spiezzo in due",
    "vattene a fanculandia con un tappo in culo",
    "stronzo di merda signfica due volte stronzo",
    "Dhe, sembri pescato dal secchi dell'umido"
];


const bottone = document.querySelector("#btn");
bottone.addEventListener("click", function(){
    const indexCasuale = Math.floor(Math.random() * offese.length);
    const offeseCasuali = offese[indexCasuale];

    alert(offeseCasuali);
});

const bottone2 = document.querySelector("#btnOffese");
bottone2.addEventListener("click", function(){
    const nuoveOffese = prompt("Inserisci un'offesa personalizzata:", "");
    const testoPulito = nuoveOffese.trim().toLocaleLowerCase();
    const esisteGia = offese.some(
        function(offesa) {
            return offesa.trim().toLowerCase() === testoPulito;
        }
    );

    if(esisteGia){
        alert("Questa offesa esiste già");
    } else {
        offese.push(nuoveOffese.trim());
    }
});

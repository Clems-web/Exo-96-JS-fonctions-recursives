let creaDiv = document.createElement("div");
let valeur = 0;

function test() {
    if (valeur < 10) {
        valeur += 2;
        let creaDiv = document.createElement("div");
        creaDiv.innerHTML += valeur + "<br>";
        document.body.append(creaDiv);
        test();
    }
}

test();
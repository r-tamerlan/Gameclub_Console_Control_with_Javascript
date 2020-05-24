let sayi = document.getElementById("sayi");
let consolx = document.getElementById("console");
let btn = document.getElementById("btn");
let altpanel = document.getElementById("altpanel");
let cihazLogo;
let masaNomresi = 1;

let logoIC = document.getElementById("logoIC");
let nomre = document.getElementById("nomre");

btn.addEventListener("click", elaveEt);

function elaveEt()

{
    if (consolx.value == "0") {
        alert("⚠️ Oyun Konsolun Seçin");
        return;
    };

    for (let i = 1; i <= sayi.value; i++) {
        if (consolx.value == "1") { cihazLogo = "img/ps3.png" };
        if (consolx.value == "2") { cihazLogo = "img/ps4.png" };
        if (consolx.value == "3") { cihazLogo = "img/bl.png" };


        let div = document.createElement("div");
        div.id = "a";

        let img = document.createElement("img");
        img.id = "logoIC";
        img.src = cihazLogo;
        img.width = "50";
        img.height = "60";
        let br = document.createElement("br");
        let h6 = document.createElement("h6");
        h6.innerHTML = "Masa No:" + masaNomresi;
        let button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-dark btn-sm";
        button.innerHTML = "Hesab ac";

        div.appendChild(img);
        div.appendChild(h6);
        div.appendChild(br);
        div.appendChild(button);
        altpanel.appendChild(div);

        // altpanel.innerHTML += `<div id="a">
        // <img id="logoIC" src="${cihazLogo}" width="50" height="60"><br>
        // <h6>Masa No: ${masaNomresi}</h6>
        // <button type="button" class="btn btn-outline-dark btn-sm">Hesab ac</button>
        // </div>`;

        masaNomresi++;
    }


};
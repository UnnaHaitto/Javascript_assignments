const button = document.getElementById("button");
const input = document.getElementById("input");
const text_box = document.getElementById("text_here");

button.addEventListener("click", function(){
    async function hae_ja_tulosta_vitsi()
    {
        const text = "https://api.chucknorris.io/jokes/search?query=" + input.value;
        const response = await fetch(text); // lupaus siitä, että joskus saadaa vastaus
        const jsonData = await response.json(); // odotetaan, että saadaan lopulta vastaus sieltä

        //nyt meillä on fetchin palauttama vastaus
        for (let line of jsonData.result){
            text_box.innerHTML += "<p>" + line.value + "</p>"
        }

    }

    hae_ja_tulosta_vitsi();
})

async function hae_ja_tulosta_vitsi()
{
    const response = await fetch("https://api.chucknorris.io/jokes/random"); // lupaus siitä, että joskus saadaa vastaus
    const jsonData = await response.json(); // odotetaan, että saadaan lopulta vastaus sieltä

    //nyt meillä on fetchin palauttama vastaus
    console.log(jsonData.value);

}

hae_ja_tulosta_vitsi();
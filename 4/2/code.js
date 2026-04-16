const button = document.getElementById("button");

button.addEventListener("click", function(){
    const input = document.getElementById("print");
    async function hae_ja_tulosta_konsoliin(){
        const url = "https://api.tvmaze.com/search/shows?q=" + input.value;
        const response = await fetch(url);

        const jsonData = await response.json();

        console.log(jsonData);
    }

    hae_ja_tulosta_konsoliin();

})

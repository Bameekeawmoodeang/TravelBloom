const data = ["Beach - Maldives", "Temple - Wat Pho", "Temple - Angkor Wat", "Japan - Tokyo", "Beach - Bali", "Japan - Kyoto"];
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

if(input){
  input.addEventListener("input", function(){
    const query = input.value.toLowerCase();
    const matches = data.filter(item => item.toLowerCase().includes(query));
    results.innerHTML = matches.length ? matches.join("<br>") : "No results found";
  });
}

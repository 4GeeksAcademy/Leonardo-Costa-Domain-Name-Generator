/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

function generateDomainName() {
  const keywords = [
    "tower",
    "action",
    "knight",
    "purpose",
    "candle",
    "time",
    "energy"
  ]; // Add your own keywords

  const endings = [".com", ".gov", ".us", ".ca", ".net", ".org", "io", ".biz"]; // endings
  const begginning = ["www."]; //beginning

  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
  const randomEnding = endings[Math.floor(Math.random() * endings.length)];

  return begginning + randomKeyword + randomEnding;
}

//output 5 different names
for (var i = 0; i < 5; i++) {
  console.log(generateDomainName());
}

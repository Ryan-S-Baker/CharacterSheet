//Character name, string value
var charName='';

//Character race, will have modifying values added to the below scores
var charRace ='';

//Character class, this is for gameplay mechanics
var charClass='';

//these score will drive the modifier that will play into the game mechanics
var dexScore = document.querySelector("#dexScore");
var strScore = document.querySelector("#strScore");
var conScore = document.querySelector("#conScore");
var wisScore = document.querySelector("#wisScore");
var intScore = document.querySelector("#intScore");
var chaScore = document.querySelector("#chaScore");

//equals corresponding Score value minus 10 then divided by 2 rounded down
dexScore.addEventListener("input", function(){
    var dexMod = Math.floor((dexScore.value-10)/2);
    var dexOutput = document.querySelector("#dexMod");
    dexOutput.innerHTML=dexMod;})

strScore.addEventListener("input", function(){
    var strMod = Math.floor((strScore.value-10)/2);
    var strOutput = document.querySelector("#strMod");
    strOutput.innerHTML=strMod;})

conScore.addEventListener("input", function(){
    var conMod = Math.floor((conScore.value-10)/2);
    var conOutput = document.querySelector("#conMod");
    conOutput.innerHTML=conMod;})

wisScore.addEventListener("input", function(){
    var wisMod = Math.floor((wisScore.value-10)/2);
    var wisOutput = document.querySelector("#wisMod");
    wisOutput.innerHTML=wisMod;})
    
intScore.addEventListener("input", function(){
    var intMod = Math.floor((intScore.value-10)/2);
    var intOutput = document.querySelector("#intMod");
    intOutput.innerHTML=intMod;})
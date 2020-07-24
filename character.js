//let var RacialStrBonus = 0;
//let var RacialDexBonus = 0;
//let var RacialConBonus = 0;
//let var RacialWisBonus = 0;
//let var RacialIntBonus = 0;
//let var RacialChaBonus = 0;

//these score will drive the modifier that will play into the game mechanics
var dexScore = document.querySelector("#dexScore");
var strScore = document.querySelector("#strScore");
var conScore = document.querySelector("#conScore");
var wisScore = document.querySelector("#wisScore");
var intScore = document.querySelector("#intScore");
var chaScore = document.querySelector("#chaScore");

var dexOutput = document.querySelector("#dexMod");
var strOutput = document.querySelector("#strMod");
var conOutput = document.querySelector("#conMod");
var wisOutput = document.querySelector("#wisMod");
var intOutput = document.querySelector("#intMod");
var chaOutput = document.querySelector("#chaMod");

//Character name, string value
var charName='';

//Character race, will have modifying values added to the below scores
var charRaceDropdown = document.querySelector("#charRace");
charRaceDropdown.addEventListener("change", function(event){
  const race = event.target.value;  
    console.log(event.target.value);
    
    if (race==="dragonborn") {
        chaScore.value=~~chaScore.value+1;
            chaScore.dispatchEvent(new Event("input"));
        strScore.value=~~strScore.value+2;
            strScore.dispatchEvent(new Event("input"));
    }

    if (race==="human"){
        chaScore.value=~~chaScore.value+1;
            chaScore.dispatchEvent(new Event("input"));
        strScore.value=~~strScore.value+1;
            strScore.dispatchEvent(new Event("input"));
        dexScore.value=~~dexScore.value+1;
            dexScore.dispatchEvent(new Event("input"));
        conScore.value=~~conScore.value+1;
            conScore.dispatchEvent(new Event("input"));
        intScore.value=~~intScore.value+1;
            intScore.dispatchEvent(new Event("input"));
        wisScore.value=~~wisScore.value+1;
            wisScore.dispatchEvent(new Event("input"));
    }

    if (race==="dwarf"){
        conScore.value=~~conScore.value+2;
            conScore.dispatchEvent(new Event("input"));
    }

    if (race==="elf"){
        dexScore.value=~~dexScore.value+2;
            dexScore.dispatchEvent(new Event("input"));
       }
} )


//Character class, this is for gameplay mechanics
var charClass='';



//equals corresponding Score value minus 10 then divided by 2 rounded down
dexScore.addEventListener("input", function(){
    var dexMod = Math.floor((dexScore.value-10)/2);
    
    dexOutput.innerHTML=dexMod;})

strScore.addEventListener("input", function(){
    var strMod = Math.floor((strScore.value-10)/2);
    
    strOutput.innerHTML=strMod;})

conScore.addEventListener("input", function(){
    var conMod = Math.floor((conScore.value-10)/2);
    
    conOutput.innerHTML=conMod;})

wisScore.addEventListener("input", function(){
    var wisMod = Math.floor((wisScore.value-10)/2);
    
    wisOutput.innerHTML=wisMod;})
    
intScore.addEventListener("input", function(){
    var intMod = Math.floor((intScore.value-10)/2);
    
    intOutput.innerHTML=intMod;})

chaScore.addEventListener("input", function(){
    var chaMod = Math.floor((chaScore.value-10)/2);
        
    chaOutput.innerHTML=chaMod;})
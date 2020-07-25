

var RacialStrBonus = 0;
var RacialDexBonus = 0;
var RacialConBonus = 0;
var RacialWisBonus = 0;
var RacialIntBonus = 0;
var RacialChaBonus = 0;
var FinalDexScore;

const generate=document.getElementById("GenerateButton");

function dexModifier(){
    //below is final dex score
    FinalDexScore=parseInt(BasedexScore.value, 10)+RacialDexBonus;

    //modifier
    return Math.floor((FinalDexScore-10)/2);
}


// //these score will drive the modifier that will play into the game mechanics
var BasedexScore = document.querySelector("#BasedexScore");
var BasestrScore = document.querySelector("#BasestrScore");
var BaseconScore = document.querySelector("#BaseconScore");
var BasewisScore = document.querySelector("#BasewisScore");
var BaseintScore = document.querySelector("#BaseintScore");
var BasechaScore = document.querySelector("#BasechaScore");

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
charRaceDropdown.addEventListener("click", function(event){
  const race = event.target.value;  
    console.log(event.target.value);

    if (race==="none"){
        RacialStrBonus = 0;
        RacialDexBonus = 0;
        RacialConBonus = 0;
        RacialWisBonus = 0;
        RacialIntBonus = 0;
        RacialChaBonus = 0;
    }

    if (race==="dragonborn") {
        RacialChaBonus=1;
            //chaScore.dispatchEvent(new Event("input"));
        RacialStrBonus=2;
            //strScore.dispatchEvent(new Event("input"));
    }

    if (race==="human"){
        RacialChaBonus=1;
            //chaScore.dispatchEvent(new Event("input"));
            RacialStrBonus=1;
            //strScore.dispatchEvent(new Event("input"));
            RacialDexBonus=1;
            //dexScore.dispatchEvent(new Event("input"));
            RacialConBonus=1;
            //conScore.dispatchEvent(new Event("input"));
            RacialIntBonus=1;
            //intScore.dispatchEvent(new Event("input"));
            RacialWisBonus=1;
            //wisScore.dispatchEvent(new Event("input"));
    }

    if (race==="dwarf"){
        RacialConBonus=2;
            //conScore.dispatchEvent(new Event("input"));
    }

    if (race==="elf"){
        RacialDexBonus=2;
            //dexScore.dispatchEvent(new Event("input"));
       }
} )


// //Character class, this is for gameplay mechanics
// var charClass='';




// //equals corresponding Score value minus 10 then divided by 2 rounded down

generate.addEventListener('click', function(){
    console.log('hello');

    var DexterityModifier = dexModifier();

    console.log(DexterityModifier);
    BasedexScore.value=FinalDexScore;
    dexMod.innerHTML=DexterityModifier;

    
    // var dexMod = Math.floor(((BasedexScore.value + RacialDexBonus.value)-10)/2);
    
    // dexOutput.innerHTML=dexMod;
    // console.log(dexMod);
})

// strScore.addEventListener("input", function(){
//     var strMod = Math.floor((strScore.value-10)/2);
    
//     strOutput.innerHTML=strMod;})

// conScore.addEventListener("input", function(){
//     var conMod = Math.floor((conScore.value-10)/2);
    
//     conOutput.innerHTML=conMod;})

// wisScore.addEventListener("input", function(){
//     var wisMod = Math.floor((wisScore.value-10)/2);
    
//     wisOutput.innerHTML=wisMod;})
    
// intScore.addEventListener("input", function(){
//     var intMod = Math.floor((intScore.value-10)/2);
    
//     intOutput.innerHTML=intMod;})

// chaScore.addEventListener("input", function(){
//     var chaMod = Math.floor((chaScore.value-10)/2);
        
//     chaOutput.innerHTML=chaMod;})

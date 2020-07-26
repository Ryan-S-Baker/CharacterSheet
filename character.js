//Established global variables to be used later
var RacialStrBonus = 0;
var RacialDexBonus = 0;
var RacialConBonus = 0;
var RacialWisBonus = 0;
var RacialIntBonus = 0;
var RacialChaBonus = 0;
var FinalDexScore;
var FinalStrScore;
var FinalConScore;
var FinalWisScore;
var FinalIntScore;
var FinalChaScore;

//This grabs the 'button' element and stores it to be used in the on-click function on line 146
const generate=document.getElementById("GenerateButton");

// The functions to drive the math of each attribute score
function dexModifier(){
    //below is final dex score
    FinalDexScore=parseInt(BasedexScore.value, 10)+RacialDexBonus;

    //modifier
    return Math.floor((FinalDexScore-10)/2);
}

function strModifier(){
    //below is final dex score
    FinalStrScore=parseInt(BasestrScore.value, 10)+RacialStrBonus;

    //modifier
    return Math.floor((FinalStrScore-10)/2);
}

function conModifier(){
    //below is final dex score
    FinalConScore=parseInt(BaseconScore.value, 10)+RacialConBonus;

    //modifier
    return Math.floor((FinalConScore-10)/2);
}

function wisModifier(){
    //below is final dex score
    FinalWisScore=parseInt(BasewisScore.value, 10)+RacialWisBonus;

    //modifier
    return Math.floor((FinalWisScore-10)/2);
}

function intModifier(){
    //below is final dex score
    FinalIntScore=parseInt(BaseintScore.value, 10)+RacialIntBonus;

    //modifier
    return Math.floor((FinalIntScore-10)/2);
}

function chaModifier(){
    //below is final dex score
    FinalChaScore=parseInt(BasechaScore.value, 10)+RacialChaBonus;

    //modifier
    return Math.floor((FinalChaScore-10)/2);
}

// This is where the code grabs the user input
var BasedexScore = document.querySelector("#BasedexScore");
var BasestrScore = document.querySelector("#BasestrScore");
var BaseconScore = document.querySelector("#BaseconScore");
var BasewisScore = document.querySelector("#BasewisScore");
var BaseintScore = document.querySelector("#BaseintScore");
var BasechaScore = document.querySelector("#BasechaScore");

//These are the output variables to show final scores after the math
var dexOutput = document.querySelector("#dexMod");
var strOutput = document.querySelector("#strMod");
var conOutput = document.querySelector("#conMod");
var wisOutput = document.querySelector("#wisMod");
var intOutput = document.querySelector("#intMod");
var chaOutput = document.querySelector("#chaMod");

//Character name, string value, add later: to parse the first letter capital and all following to lower
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
        RacialStrBonus = 2;
        RacialDexBonus = 0;
        RacialConBonus = 0;
        RacialWisBonus = 0;
        RacialIntBonus = 0;
        RacialChaBonus = 1;
    }

    if (race==="human"){
        RacialStrBonus = 1;
        RacialDexBonus = 1;
        RacialConBonus = 1;
        RacialWisBonus = 1;
        RacialIntBonus = 1;
        RacialChaBonus = 1;
    }

    if (race==="dwarf"){
        RacialStrBonus = 0;
        RacialDexBonus = 0;
        RacialConBonus = 2;
        RacialWisBonus = 0;
        RacialIntBonus = 0;
        RacialChaBonus = 0;
    }

    if (race==="elf"){
        RacialStrBonus = 0;
        RacialDexBonus = 2;
        RacialConBonus = 0;
        RacialWisBonus = 0;
        RacialIntBonus = 0;
        RacialChaBonus = 0;
       }
})

//Character class, this is for gameplay mechanics. Add later, to parse and check user input against in-game classes or dropdown options
var charClass='';

//When generate button is hit, the functions are called and scores are returned to the user
generate.addEventListener('click', function(){

    var DexterityModifier = dexModifier();
        console.log(DexterityModifier);
        BasedexScore.value=FinalDexScore;
        dexMod.innerHTML=DexterityModifier;

    var StrengthModifier = strModifier();
        console.log(StrengthModifier);
        BasestrScore.value=FinalStrScore;
        strMod.innerHTML=StrengthModifier;
    
    var ConstitutionModifier = conModifier();
        console.log(ConstitutionModifier);
        BaseconScore.value=FinalConScore;
        conMod.innerHTML=ConstitutionModifier;

    var WisdomModifier = wisModifier();
        console.log(WisdomModifier);
        BasewisScore.value=FinalWisScore;
        wisMod.innerHTML=WisdomModifier;

    var IntelligenceModifier = intModifier();
        console.log(IntelligenceModifier);
        BaseintScore.value=FinalIntScore;
        intMod.innerHTML=IntelligenceModifier;

    var CharismaModifier = chaModifier();
        console.log(CharismaModifier);
        BasechaScore.value=FinalChaScore;
        chaMod.innerHTML=CharismaModifier;
})

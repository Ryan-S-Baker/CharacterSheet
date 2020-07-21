//Character name, string value
var charName='';

//Character race, will have modifying values added to the below scores
var charRace ='';

//Character class, this is for gameplay mechanics
var charClass='';

//these score will drive the modifier that will play into the game mechanics
var dexScore 
var strScore 
var conScore 
var wisScore 
var intScore 
var chaScore 

//equals corresponding Score value minus 10 then divided by 2 rounded down
var dexMod = (dexScore-10)/2;


var strMod 


var conMod 


var wisMod 


var intMod 


var chaMod 

document.getElementById("str-mod") = function(){
    (document.getElementById("str-mod").innerHTML = (document.getElementById("strScore")-10)/2;
} 
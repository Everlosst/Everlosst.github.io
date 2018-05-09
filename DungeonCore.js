 // Initialization
 window.onload = function () {
   startTab();}
function startTab() {
  document.getElementById("defaultOpen").click(); // Initial nav bar click
  setInterval(gameTimer, 1000); // Game Timer 
  }
function gameTimer () { // Timer function triggers
	refresh();
	passiveMana();
}
function refresh() { // Status bar updates
	document.getElementById("manaTotal").innerHTML = Math.ceil(mana, 2); //Updating Status Bar
	document.getElementById("passiveManaGain").innerHTML = passiveManaRate;
  }

// Nav tabs
function openScreen(evt, screenName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(screenName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Global variables and universal functions
var mana = 50;
var floorNumber = 1;
var floor1Rooms = 1;
var familyAvailable = 1;
	// CDVT and ADVT functions need to be added
	var creatureDVT = 0;
	var adventurerDVT = 0;
var passiveManaRate = (creatureDVT * .02) + (adventurerDVT * .005) + .1; // Main passive mana regen rate, followed by mana added
function passiveMana() {
  mana += passiveManaRate;
  }

/*
//Families
var familiesArray = [
  {status: "available", level: 0, class: "family", species: "insect"};
  {status: "available", level: 0, class: "family", species: "mammal"};
  {status: "unavailable", level: 0, class: "family", species: "goblin"};
  {status: "unavailable", level: 0, class: "family", species: "slime"};
]


document.getElementById("defaultOpen").addEventListener("click", function familyAvailableCheck(){
  for (var i=0, i < familiesArray.length; i++) {
    addOption(document.familyChoiceDD, familiesArray.[i].species, familiesArray.[i].species);
  }
});
*/
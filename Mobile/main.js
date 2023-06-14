//==========================================================
// Copyright and Opening Information
//==========================================================

// Copyright Editor Rust Nov 4 2022
// If you continue you shall get the majority of the game spoiled for you. Also, it's a 'bit' messy
// Solicitors will be relieved of their sanity

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Important Varibles
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Assigning defaults to individual player values
let gameData = initialGameData;
let upgradeData = initialUpgradeData;

// All building gold added together

function goldPerSecond() {
   let pickaxeGold = gameData.pickaxeNumber * gameData.pickaxeProfit;
   let dwarfGold = gameData.dwarfNumber * gameData.dwarfProfit;
   let gooseGold = gameData.gooseNumber * gameData.gooseProfit;
   let mineGold = gameData.mineNumber * gameData.mineProfit;
   let dragonGold = gameData.dragonNumber * gameData.dragonProfit;
   let stoneGold = gameData.stoneNumber * gameData.stoneProfit;
   let stationGold = gameData.stationNumber * gameData.stationProfit;
   let leprechaunGold = gameData.leprechaunNumber * gameData.leprechaunProfit;
   let sheepGold = gameData.sheepNumber * gameData.sheepProfit;
   let rayGold = gameData.rayNumber * gameData.rayProfit;
   let mergerGold = gameData.mergerNumber * gameData.mergerProfit;
   let allGold = pickaxeGold + dwarfGold + gooseGold + mineGold + dragonGold + stoneGold + stationGold + leprechaunGold + sheepGold + rayGold + mergerGold;
   return allGold;
}

// Colors for avilibe or unavalibe buildings
let regColor = "#ffdc7d";
let notEnoughColor = "#5e4f24";

let alert = document.querySelector(".alert");
let bonusNumber = 1;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Clicking
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Add gold by clicking the asteroid
function collectGold() {
   addGold(gameData.clickinGold);
   gameData.clicks += 1;
   if (gameData.clickSounds == "on") { document.querySelector(".clinck").play(); }
}

// Spacebar gold
document.body.onkeyup = function(e){
   if(e.keyCode === 32){
      e.preventDefault();
      addGold(gameData.clickinGold);
   }
}

// Adds gold
function addGold(gold) {
   gameData.gold = gameData.gold + gold;
   gameData.totalGold = gameData.totalGold + gold;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Building Functions
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function bTool() {
   if (gameData.gold >= gameData.bToolCost) {
      gameData.gold -= gameData.bToolCost;
      gameData.clickinGold += 1;
      gameData.bToolCost *= 2;
      gameData.toolLevel += 1;
   }
}

function acquireAsset(asset) {
   if (gameData.gold >= getCost(asset)) {
      gameData.gold -= getCost(asset);
      gameData[asset + "Number"]++;
   }
}

function getCost(asset) {
   return (buildingCosts[asset] * Math.pow(1.15, gameData[asset + "Number"])).toFixed(0);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Research Functions
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var checkForUpgrades = window.setInterval(function() {
   // Try to change this into a loop
   if (gameData.toolLevel >= 1 && gameData.clicks >= 50 && !upgradeData.a1) { document.getElementById("a1").style.display = "block"; }
   if (gameData.toolLevel >= 5 && gameData.clicks >= 100 && !upgradeData.a2) { document.getElementById("a2").style.display = "block"; }
   if (gameData.toolLevel >= 15 && gameData.clicks >= 250 && !upgradeData.a3) { document.getElementById("a3").style.display = "block"; }
   if (gameData.toolLevel >= 25 && gameData.clicks >= 500 && !upgradeData.a4) { document.getElementById("a4").style.display = "block"; }
   if (gameData.toolLevel >= 50 && gameData.clicks >= 1000 && !upgradeData.a5) { document.getElementById("a5").style.display = "block"; }
   if (gameData.toolLevel >= 100 && gameData.clicks >= 2500 && !upgradeData.a6) { document.getElementById("a6").style.display = "block"; }
   if (gameData.pickaxeNumber >= 1 && !upgradeData.b1) { document.getElementById("b1").style.display = "block"; }
   if (gameData.pickaxeNumber >= 5 && !upgradeData.b2) { document.getElementById("b2").style.display = "block"; }
   if (gameData.pickaxeNumber >= 15 && !upgradeData.b3) { document.getElementById("b3").style.display = "block"; }
   if (gameData.pickaxeNumber >= 25 && !upgradeData.b4) { document.getElementById("b4").style.display = "block"; }
   if (gameData.dwarfNumber >= 1 && !upgradeData.c1) { document.getElementById("c1").style.display = "block"; }
   if (gameData.dwarfNumber >= 5 && !upgradeData.c2) { document.getElementById("c2").style.display = "block"; }
   if (gameData.dwarfNumber >= 15 && !upgradeData.c3) { document.getElementById("c3").style.display = "block"; }
   if (gameData.dwarfNumber >= 25 && !upgradeData.c4) { document.getElementById("c4").style.display = "block"; }
   if (gameData.gooseNumber >= 1 && !upgradeData.c01) { document.getElementById("c01").style.display = "block"; }
   if (gameData.gooseNumber >= 5 && !upgradeData.c02) { document.getElementById("c02").style.display = "block"; }
   if (gameData.gooseNumber >= 15 && !upgradeData.c03) { document.getElementById("c03").style.display = "block"; }
   if (gameData.gooseNumber >= 25 && !upgradeData.c04) { document.getElementById("c04").style.display = "block"; }
   if (gameData.mineNumber >= 1 && !upgradeData.d1) { document.getElementById("d1").style.display = "block"; }
   if (gameData.mineNumber >= 5 && !upgradeData.d2) { document.getElementById("d2").style.display = "block"; }
   if (gameData.mineNumber >= 15 && !upgradeData.d3) { document.getElementById("d3").style.display = "block"; }
   if (gameData.mineNumber >= 25 && !upgradeData.d4) { document.getElementById("d4").style.display = "block"; }
   if (gameData.dragonNumber >= 1 && !upgradeData.e1) { document.getElementById("e1").style.display = "block"; }
   if (gameData.dragonNumber >= 5 && !upgradeData.e2) { document.getElementById("e2").style.display = "block"; }
   if (gameData.dragonNumber >= 15 && !upgradeData.e3) { document.getElementById("e3").style.display = "block"; }
   if (gameData.dragonNumber >= 25 && !upgradeData.e4) { document.getElementById("e4").style.display = "block"; }
   if (gameData.stoneNumber >= 1 && !upgradeData.f1) { document.getElementById("f1").style.display = "block"; }
   if (gameData.stoneNumber >= 5 && !upgradeData.f2) { document.getElementById("f2").style.display = "block"; }
   if (gameData.stoneNumber >= 15 && !upgradeData.f3) { document.getElementById("f3").style.display = "block"; }
   if (gameData.stoneNumber >= 25 && !upgradeData.f4) { document.getElementById("f4").style.display = "block"; }
   if (gameData.stationNumber >= 1 && !upgradeData.g1) { document.getElementById("g1").style.display = "block"; }
   if (gameData.stationNumber >= 5 && !upgradeData.g2) { document.getElementById("g2").style.display = "block"; }
   if (gameData.stationNumber >= 15 && !upgradeData.g3) { document.getElementById("g3").style.display = "block"; }
   if (gameData.stationNumber >= 25 && !upgradeData.g4) { document.getElementById("g4").style.display = "block"; }
   if (gameData.leprechaunNumber >= 1 && !upgradeData.h1) { document.getElementById("h1").style.display = "block"; }
   if (gameData.leprechaunNumber >= 5 && !upgradeData.h2) { document.getElementById("h2").style.display = "block"; }
   if (gameData.leprechaunNumber >= 15 && !upgradeData.h3) { document.getElementById("h3").style.display = "block"; }
   if (gameData.leprechaunNumber >= 15 && !upgradeData.h4) { document.getElementById("h4").style.display = "block"; }
   if (gameData.sheepNumber >= 1 && !upgradeData.i1) { document.getElementById("i1").style.display = "block"; }
   if (gameData.sheepNumber >= 5 && !upgradeData.i2) { document.getElementById("i2").style.display = "block"; }
   if (gameData.sheepNumber >= 15 && !upgradeData.i3) { document.getElementById("i3").style.display = "block"; }
   if (gameData.sheepNumber >= 25 && !upgradeData.i4) { document.getElementById("i4").style.display = "block"; }
   if (gameData.rayNumber >= 1 && !upgradeData.j1) { document.getElementById("j1").style.display = "block"; }
   if (gameData.rayNumber >= 5 && !upgradeData.j2) { document.getElementById("j2").style.display = "block"; }
   if (gameData.rayNumber >= 15 && !upgradeData.j3) { document.getElementById("j3").style.display = "block"; }
   if (gameData.rayNumber >= 25 && !upgradeData.j4) { document.getElementById("j4").style.display = "block"; }
   if (gameData.mergerNumber >= 1 && !upgradeData.k1) { document.getElementById("k1").style.display = "block"; }
   if (gameData.mergerNumber >= 5 && !upgradeData.k2) { document.getElementById("k2").style.display = "block"; }
   if (gameData.mergerNumber >= 15 && !upgradeData.k3) { document.getElementById("k3").style.display = "block"; }
   if (gameData.mergerNumber >= 25 && !upgradeData.k4) { document.getElementById("k4").style.display = "block"; }

   // if (gameData.mergerNumber >= 15 && gameData.rayNumber >= 15 && gameData.sheepNumber >= 15 && gameData.leprechaunNumber >= 15 && gameData.stationNumber >= 15 && gameData.stoneNumber >= 15 && gameData.dragonNumber >= 15 && gameData.mineNumber >= 15 && gameData.gooseNumber >= 15 && gameData.dwarfNumber >= 15 && gameData.pickaxeNumber >= 15) {
   //    document.getElementById("otherworldPortal").style.display = "block";
   // }
}, 500)

// Communal Upgrade Function
function research(number, building) {
   if (gameData.gold >= upgradeCosts[number]) {
      gameData.gold -= upgradeCosts[number];
      gameData[building + "Profit"] *= 2;
      upgradeData[number] = true;
      document.getElementById(number).style.display = "none";
   }
}
function aResearch(num) {
   if (gameData.gold >= upgradeCosts["a" + num] && num < 5) {
      gameData.gold -= upgradeCosts["a" + num];
      gameData.clickinGold *= 2;
      upgradeData["a" + num] = true;
      document.getElementById("a" + num).style.display = "none";
   }
   else {
      if (gameData.gold >= upgradeCosts[`a${num}`] && num >= 5) {
         gameData.gold -= upgradeCosts[`a${num}`];
         gameData.clickinGold *= gameData.pickaxeNumber;
         upgradeData[`a${num}`] = true;
         document.getElementById(`a${num}`).style.display = "none";
      }
   }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Game Core
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var goldPerSecondLoop = window.setInterval(function() {
   // Current time minus one second ago, set one second ago to now, and add gold for that time
   let diff = Date.now() - gameData.lastTick;
   gameData.lastTick = Date.now();
   addGold((goldPerSecond() * (diff / 1000) * bonusNumber));
}, 1000);

var buildColorLoop = window.setInterval(function() {
   document.getElementById("bTool").style.display = "flex";
   if (gameData.gold >= gameData.bToolCost) { document.getElementById("bTool").style.backgroundColor = regColor; }
   else { document.getElementById("bTool").style.backgroundColor = notEnoughColor; }

   ["pickaxe", "dwarf", "goose", "mine", "dragon", "stone", "station", "leprechaun", "sheep", "ray", "merger"].forEach((item) => {
      let itemBox = document.getElementById("add" + toCap(item));
      let itemPrice = getCost(item);
      if (gameData.gold >= (itemPrice / 2) || gameData[`${item}Number`] >= 1) { itemBox.style.display = "flex"; }
      if (gameData.gold >= itemPrice) { itemBox.style.backgroundColor = regColor; }
      else { itemBox.style.backgroundColor = notEnoughColor; }
   });
}, 500);

var setThingsRight = window.setInterval(function() {
   if (gameData.gold > 0) { document.title = toWord(gameData.gold) + " Gold | Gold Rush"; }
   else { document.title = "Gold Rush!"; }
   document.querySelector(".gold").innerHTML = toWord((gameData.gold)) + " Gold";
   document.querySelector(".gps").textContent = `${toWord((goldPerSecond() * bonusNumber))} Gold per Second`;
   document.querySelector(".gpc").textContent = `${toWord(gameData.clickinGold)} Gold per Click`;
}, 150);

// This resets the values displayed in the shop
var updateStore = window.setInterval(function() {
   document.getElementById("bTool").innerHTML = "Better Tools<br> Tool Level " + toWord(gameData.toolLevel) + "<br> Cost: " + toWord(gameData.bToolCost) + " Gold";
   updateDisplay("Pickaxe", "Pickaxes", "A sturdy pickaxe to mine gold with")
   updateDisplay("Dwarf", "Dwarfs", "An assistant to help you mine gold")
   updateDisplay("Goose", "Geese", "A nice goose that lays golden egg")
   updateDisplay("Mine", "Mines", "A new mine to mine gold in")
   updateDisplay("Dragon", "Dragons", "A nice dragon to hoard gold for you")
   updateDisplay("Stone", "Philosopher's Stones", "An alchemy stone that turns ordinary rocks into gold")
   updateDisplay("Station", "Astroid-mining Stations", "A space station that mines astroids for gold")
   updateDisplay("Leprechaun", "Leprechauns", "Will find gold at the end of rainbows")
   updateDisplay("Sheep", "Golden Sheep", "A cute round fluffy sheep with a golden fleece")
   updateDisplay("Ray", "Mass Rays", "Turns mass into gold")
   updateDisplay("Merger", "Neutron Star Mergers", "Merges neutron stars to create gold (find what you want at it's source ;)")
   // Gold per Building & Building Count
   function updateDisplay(item, itemName, text) {
      let profit = gameData[item.toLowerCase() + "Profit"];
      let amount = gameData[item.toLowerCase() + "Number"];
      let cost = getCost(item.toLowerCase());
      document.getElementById(`${item.toLowerCase()}-info`).innerHTML = `${itemName}: ${toWord(amount)} <br> ${toWord(profit)} GPS <br> Producing ${toWord(profit * amount)} GPS<br> ${text}`;
      if (timeUntilAffordable(cost) === "Sufficient funds!" || gameData.timeUntil === "off") {
         document.getElementById(`${item.toLowerCase()}-display`).innerHTML = `${item} <br> (You have ${toWord(amount)}) <br>Cost: ${toWord(cost)} Gold <br> ${percentOfProfits(item)}% of Profits`;
      }
      else {
         document.getElementById(`${item.toLowerCase()}-display`).innerHTML = `${item} <br> (You have ${toWord(amount)}) <br>Cost: ${toWord(cost)} Gold <br> ${percentOfProfits(item)}% of Profits <br> ${timeUntilAffordable(cost)}`;
      }
   }
   // Display gold per minuite, hour, day, month, and year
   document.getElementById("gpm").innerHTML = `${toWord(goldPerSecond() * 60)} Gold Per Minute`;
   document.getElementById("g0pher").innerHTML = toWord(goldPerSecond() * 60 * 60) + " Gold Per Hour";
   document.getElementById("gpd").innerHTML = toWord(goldPerSecond() * 60 * 60 * 24) + " Gold Per Day";
   document.getElementById("gpw").innerHTML = toWord(goldPerSecond() * 60 * 60 * 24 * 7) + " Gold Per Week";
   document.getElementById("gpM").innerHTML = toWord(goldPerSecond() * 60 * 60 * 24 * 7 * 4) + " Gold Per Month";
   document.getElementById("gpy").innerHTML = toWord(goldPerSecond() * 60 * 60 * 24 * 7 * 4 * 12) + " Gold Per Year";
   document.getElementById("totalGold").innerHTML = toWord(gameData.totalGold) + " Lifetime Gold Profits";
   document.querySelector(".timeSinceStarted").textContent = `You've been playing since ${gameData.startTime}`;
   document.querySelector(".totalGoldSpent").textContent = `You have invested ${toWord(gameData.totalGold - gameData.gold)} gold`;
}, 500);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Settings
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Set myAudio to audio file
let myAudio = document.getElementById("myAudio");
function music() { return myAudio.paused ? myAudio.play() : myAudio.pause(); };

function timeUntil() {
   if (gameData.timeUntil === "off") { gameData.timeUntil = "on"; notify("Time Until is now on!"); }
   else { gameData.timeUntil = "off"; notify("Time Until is now off!") }
}

function clickSounds() {
   if (gameData.clickSounds === "off") { gameData.clickSounds = "on"; notify("Clicking Sounds are now active!"); }
   else { gameData.clickSounds = "off"; notify("Clicking Sounds are now inactive!") }
}

// Save
document.addEventListener("keydown", function(e) {
   // If player is on a Mac, use Cmd + S
   if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode === 83) {
      e.preventDefault();
      save();
   }
}, false);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Helpful Functions
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Alerts
function notify(text) {
   let alert = document.querySelector(".alert").cloneNode(true);
   document.querySelector(".alert-box").insertBefore(alert, document.querySelector(".alert-box").firstChild);
   alert.style.display = "flex";
   alert.textContent = text;
   setTimeout(alertAnimation => { alert.classList.add('alertAnimation'); }, 6000);
   setTimeout(removeAnimation => { alert.classList.remove('alertAnimation');  alert.remove(); }, 7000);
}
// notify("Welcome to Dwarf Gold!");

// Scroll to section
function scrollToSection(id) {
   document.querySelector(`#page-${id}`).scrollIntoView();
   document.querySelector(`.active-tab`).classList.remove("active-tab");
   document.querySelector(`.tab-${id}`).classList.add("active-tab");
}

// Context Menu
let rightClickMenu = document.querySelector("#menu").style;
function contextMenu() {
   document.addEventListener('contextmenu', function(e) {
      let posX = e.clientX;
      let posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
   }, false);
   document.addEventListener('click', function(e) {
      rightClickMenu.display = "none";
   }, false);
}
function menu(x, y) {
   rightClickMenu.top = y + "px";
   rightClickMenu.left = x + "px";
   rightClickMenu.display = "block";
}

// Update Store
function percentOfProfits(val) {
   let gold = gameData[val.toLowerCase() + "Profit"] * gameData[val.toLowerCase() + "Number"];
   let percent = getPercent(gold, goldPerSecond());
   if (percent.toString().length > 6) { percent = (percent).toFixed(3); }
   if (!isNaN(percent)) { return percent; }
   else { return 0; }
}
function timeUntilAffordable(gold) {
   let goldNeeded = gold - gameData.gold;
   if (goldNeeded < 0) { return "Sufficient funds!"; }
   let secondsLeft = Math.round(goldNeeded/goldPerSecond());
   if (secondsLeft === "Sufficient funds!") { return "Sufficient funds!"; }
   let hours = Math.floor(secondsLeft / 3600);
   let minutes = Math.floor(secondsLeft / 60) - (hours * 60);
   let seconds = secondsLeft - (minutes * 60) - (hours * 60 * 60);
   if (hours > 0) { return `${hours} Hours, ${minutes} Minutes, and ${seconds} Seconds until affordable`; }
   else if (minutes > 0) { return `${minutes} Minutes and ${seconds} Seconds until affordable`; }
   else { return `${seconds} Seconds until affordable`; }
}
function calcTimeUntil(gold) {
   let goldNeeded = gold - gameData.gold;
   if (goldNeeded < 0) { return "Sufficient funds!"; }
   return Math.round(goldNeeded/goldPerSecond());
}
function getTimeDisplay(secondsLeft) {
   if (secondsLeft === "Sufficient funds!") { return "Sufficient funds!"; }
   let hours = Math.floor(secondsLeft / 3600);
   let minutes = Math.floor(secondsLeft / 60) - (hours * 60);
   let seconds = secondsLeft - (minutes * 60);
   if (hours > 0) { return `${hours} Hours, ${minutes} Minutes, and ${seconds} Seconds`; }
   else if (minutes > 0) { return `${minutes} Minutes and ${seconds} Seconds`; }
   else { return `${seconds} Seconds`; }
}

// Word/Number Wrangling
function toCap(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}
function getPercent(val, totalVal) { return val/totalVal*100; }

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Disasters & Enchancements
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let luckyRoll = window.setInterval(function() {
   let rand = Math.random();
   // Bad Luck(8% chance)
   if (rand > .92) {
      if (gameData.dwarfNumber > 0) {
         let rand2 = Math.random();
         if (rand2 > .5) {
            gameData.dwarfNumber--;
            notify("A Dwarf has succumbed to the bad luck of the gods!");
         }
         else if (gameData.dwarfNumber > 10) {
            let dwarvesLost = Math.floor(Math.random() * 10) + 1;
            notify(`A mine shaft collapsed! ${dwarvesLost} dwarfs perished.`);
            gameData.dwarfNumber -= dwarvesLost;
         }
      }
   }
   // Good Luck (15% chance)
   if (rand > .85) {
      let bonusAmount = [1.5, 2, 2.5][Math.floor(Math.random() * 3)];
      notify(`${["Large underground gold reserve found!", "Old Ican temple with vast stores of gold found!"][Math.floor(Math.random() * 2)]} Gold earnings x${bonusAmount} for 30 seconds!`);
      document.getElementsByClassName("click-info")[0].classList.add("basic-info-pumped");
      document.getElementsByClassName("click-info")[1].classList.add("basic-info-pumped");
      document.getElementsByClassName("click-info")[2].classList.add("basic-info-pumped");
      bonusNumber = bonusAmount;
      setTimeout(resetBonus, 30000);
      function resetBonus() {
         bonusNumber = 1;
         document.getElementsByClassName("click-info")[0].classList.remove("basic-info-pumped");
         document.getElementsByClassName("click-info")[1].classList.remove("basic-info-pumped");
         document.getElementsByClassName("click-info")[2].classList.remove("basic-info-pumped");
      }
   }
}, 300000) // 5 minutes (Change this to varible)

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// News
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// This is all of the news
let allNews = pickaxeNews = dwarfNews = gooseNews = mineNews = dragonNews = stoneNews = stationNews = lepNews = sheepNews = rayNews = mergerNews = richNews = otherNews = [];
setTimeout(() => {
   allNews = [
      `You go mining sometimes`,
      `You like the shiny twinkle of gold`,
      `When you feel sad, you look at your hoard of gold.`,
      `You dream of golden sheep in a golden meadow eating golden grass.`,
      `You dream of golden dragons flying high through golden clouds in a golden sky with the golden setting sun.`,
      `Breaking News: Under threat of closing the press, journalist tells the semi-truth!`,
      `News: You magnanimously donate $10 to some random charity.`,
      //`News: `,
   ]
   pickaxeNews = [
      `News: New type of pickaxe coming out, looks suspiciously like normal iron.`,
      `News: Purchases of pickaxes on the rise for both practical and decorative purposes.`,
      `News: Little plastic keychain pickaxes selling like crazy, tourist shops wildly confused "Who wants that type of junk?"`,
      `Ad: You looking for a good sturdy pickaxe for some backyard mining? We've got just the thing for you! Get our heavy-duty all-purpose pickaxes today!`,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
   ]
   dwarfNews = [
      `News: Dwarfs stop human miners from going to work, "They only get in the way."`,
      `News: Reports of "Little people weilding pickaxes" increasing daily`,
      `News: Human miners losing their jobs as dwarfs overtake the mining industry, "not necessarily a bad thing" says retired miner`,
      `News: Scientist fear dwarfs will "take complete controll of the universe", robots disappointed.`,
      `News: Dwarfs rights movment spreading across the globe, dwarfs demand equality and voting rights.`,
      `News: Gold mine collapses, dwarfs demand safer workplaces.`,
      `News: Hoards of angry dwarfs fill the streets worldwide during dwarf rights protests, "It's suprising how threatening a mob of tiny people can be" admits journalist`,
      `News: Peaceful dwarf protests recived with violent reprisal!`,
   ]
   gooseNews = [
      `News: Scientist finally get the government to allow for the genetic modification of geese to make them lay golden eggs, public enraged.`,
      `Ad: Your old hen not laying enough eggs? Your job just not paying the bills? Get your very own GOLDEN GOOSE today, for the low price of your soul!`,
      `You have a pet goose called Henrieta.`,
      `News: Golden goose released into wild, taking the habitats of native geese!`,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
   ]
   mineNews = [
      `News: Mines opening everywhere, environmentalists worried.`,
      `News: Coal and diamond mines going out of business as gold mines reign supreme. "I mean, gold is shiny, what's so special about coal?"`,
      `News: "Maybe we should stop drilling holes in the earth." says random man.`,
      `News: Mines inhabited by creatures from the dawn of time, all journalists investingating mysteriously vanished.`,
      `News: As the gold industry gradualy gains control of the government, new laws are passed in the favor of mining.`,
      `News: "Aren't you worried about the enviroment?" ask journalist, ${gameData.playerName}'s cheif mining officer says "I'll be gone by the time it gets bad."`,
      //`News: `,
      //`News: `,
   ]
   dragonNews = [
      `News: Dragon eats poodle, owner furious: "The monster! I\'ll have his skin for my handbag!"`,
      `News: Gold dragons cause havoc worldwide as they search for gold-hoarding locations.`,
      `News: Scientist warn people to stay indoors during dragon breeding season."It's for your own overall health."`,
      `News: Global dragon-disease pandemic continuing unhindered, doctors searching for cure.`,
      `New: Dragon babysitters needed becase all parents busy hoarding gold.`,
      `News: Sales of dragon scale jackets skyrocketing, encouraging dragon products market.`,
      `News: Grass-fed dragon milk, new lactose-free substitute to cow milk.`,
      `News: Nations in fear as dragons soar above, athorities advise to "Carry umbrellas everywhere, it could save your life!"`,
   ]
   stoneNews = [
      `News: Geologist strongly against turning rocks into gold; "You shall not steal our invaluable specimens!"`,
      `News: Throught an aminzing feat of alchemy, Mt. Everest is turned into gold. Locals thoroughly bothered: "Do you know how hard it is to live with a hunk of gold shimmering in your face CONSTANTLY?"`,
      `News: "NO, these philosophers stones DO NOT give longer lives." say exasperated representative of ${gameData.playerName} Industries to over enthusiastic crowd.`,
      `News: Scientist lose philosophers stone, having trouble finding it. "I mean, its just a normal rock," says scientist`,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
   ]
   stationNews = [
      `News: Major astroid mining station slams into Earth, impacted country enraged!`,
      `News: ${gameData.playerName} gets to cut the ribbon for the first astroid mining station.`,
      `News: Astroid mineing stations becoming popular vacation locations.`,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
   ]
   lepNews = [
      `News: Leprechaun becomes politician, world leaders upset.`,
      `News: Rainbows occuring more and more often, leprechaun suspected.`,
      `News: Three leaved clovers become rare due to the large amount of four leaved clovers.`,
      `News: "Don't trust the gold at the end of leprechaun rainbows" says athoritiy, "Who knows what nasty tricks they have up there sleaves!" "Ehm ehm" says leprechaun with camera.`,
      `News: Semi-decent laws are made to protect people from Leprechauns, and vice versa.`,
      //`News: `,
      //`News: `,
      //`News: `,
   ]
   sheepNews = [
      `News: New golden sheep breeds coming out, including golden-merino, golden-lincon and golden-corriedale.`,
      `News: Market sees a dramatic upturn in the sales of golden fleece jackets.`,
      `News: Pet golden sheeps becoming more popular, causing the introduction of pigmy golden sheeps, adorable little fluffy golden sheeps small enough to fit in your palm.`,
      `Ad: Are you looking for a family pet? Are dragons just not right? Get a pigmy golden sheep today!`,
      `News: "Baaaaa", says interviewed golden sheep.`,
      `News: "Just move a bit to the left and you'll be golden," says photographer to golden sheep.`,
      //`News: `,
      //`News: `,
   ]
   rayNews = [
      `Warning: do not stand in front of mass ray... actually, on second thought, do. (hehe, more gold)`,
      `News: Mass rays wreak havoc, turning multiple minor plantets into soild gold, astronomers enraged`,
      `News: Illegal criminals illegally use mass rays to turn politicians into gold. "I know it's illegal, but I hope they keep doing it. Wait... are you a reporter?!"`,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
   ]
   mergerNews = [
      `News: Scientist figure out a way to make gold by merging neutron stars, "Eureka! Wait a moment- I think this time we actually went to far..."`,
      `News: "Why, may I ask, are we MERGING NEUTRON STARS just to make gold!?! Please explain your reasoning." random man rants.`,
      `News: Scientist explains how neutron star mergers work to ${gameData.playerName}'s company top members, and gets the response: "So, it makes gold? Good enough." Scientist sighs.`,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
   ]
   richNews = [
      `News: Ordinary household items more commonly made of gold to deal with gold surplus.`,
      `News: Random woman asks: "What are we going to do with all this gold?", everyone ignores her.`,
      `News: Gold Storehouses overflowing, young employ suggest storehouses made of gold.`,
      `News: Personal golden planets becoming fashinble, causing imennse golden solar systems.`,
      `News: New podcast about ${gameData.playerName}'s amazing rise to success coming out! Don't miss it!`,
      `News: Studies show that ${gameData.playerName} has made a total of ${toWord(gameData.totalGold)} Gold. "That's a lot of shiny" says researcher`,
      `News: Gold's economic worth dramatically reduced, stock market looking for subsitude.`,
      `News: Philosophers agree that gold is the true meaning of life. "What's truly amazing is they agreed on something." says reporter`,
   ]
   otherNews = [
      `News: Rumered discoveries of Otherworld portals disrupting world peace.`,
      `News: Lost children suspected to have stumbled throught Otherworld portals.`,
      `News: Freak weather causing havoc and destruction, traced to Otherworld portals.`,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
      //`News: `,
   ]
}, 1500)

// Decides which news to display
let news = window.setInterval(function (){
   // Set var that contains all displayale news to default
   var trueNews = allNews;
   // If the player has 1 of a certiant building, add the news for that building to the displayable news
   if (gameData.pickaxeNumber >= 1) { trueNews = trueNews.concat(pickaxeNews); }
   if (gameData.dwarfNumber >= 1) { trueNews = trueNews.concat(dwarfNews); }
   if (gameData.gooseNumber >= 1) { trueNews = trueNews.concat(gooseNews); }
   if (gameData.mineNumber >= 1) { trueNews = trueNews.concat(mineNews); }
   if (gameData.dragonNumber >= 1) { trueNews = trueNews.concat(dragonNews); }
   if (gameData.stoneNumber >= 1) { trueNews = trueNews.concat(stoneNews); }
   if (gameData.stationNumber >= 1) { trueNews = trueNews.concat(stationNews); }
   if (gameData.leprechaunNumber >= 1) { trueNews = trueNews.concat(lepNews); }
   if (gameData.sheepNumber >= 1) { trueNews = trueNews.concat(sheepNews); }
   if (gameData.rayNumber >= 1) { trueNews = trueNews.concat(rayNews); }
   if (gameData.mergerNumber >= 1) { trueNews = trueNews.concat(mergerNews); }
   if (gameData.gold >= 1000000) { trueNews = trueNews.concat(richNews); }
   if (gameData.mergerNumber >= 10 && gameData.gold >= 1000000000000) { trueNews = trueNews.concat(otherNews); }
   // Randomly chooses a piece of news from trueNews, then display
   var randomNews = trueNews[Math.floor(Math.random() * trueNews.length)];
   document.getElementById("news").innerHTML = randomNews;
}, 12000); // Change this to varible

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Save
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Retrive game data as savegame
let savegame = {
   gameData: JSON.parse(localStorage.getItem("gameDataSave")),
   upgradeData: JSON.parse(localStorage.getItem("upgradeDataSave")),
}

// If the savegame is empty set game data as savegame
if (savegame.gameData === null) {
   savegame.gameData = gameData;
   savegame.upgradeData = upgradeData;
}

var saveLoop = window.setInterval(function() { save(); }, 60000)

// Wipe Save
function restart() {
   var areYouSure = confirm("Are you SURE you want to restart? This will wipe all your progress!");
   if (areYouSure === true) {
      var areYouReallySure = confirm("Are you REALLY SURE you want to restart? There is no going back!");
      if (areYouReallySure === true) {
         localStorage.setItem("gameDataSave", JSON.stringify(initialGameData));
         localStorage.setItem("upgradeDataSave", JSON.stringify(initialUpgradeData));
         location.reload();
      }
   }
}

// Save, and set save alert
function save() {
   localStorage.setItem("gameDataSave", JSON.stringify(gameData));
   localStorage.setItem("upgradeDataSave", JSON.stringify(upgradeData));
   notify(`Game Saved!`);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Onload & Setup
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// This all runs the moment the page is loaded, and sets up the game
window.onload = function() {
   gameData = savegame.gameData;
   upgradeData = savegame.upgradeData;
   if (gameData.gold < 2 && !gameData.playerName) {
      gameData = initialGameData;
      upgradeData = initialUpgradeData;
      gameSetup();
      localStorage.setItem("gameDataSave", JSON.stringify(gameData));
      localStorage.setItem("upgradeDataSave", JSON.stringify(upgradeData));
   }
   document.querySelector(".playerName").innerHTML = gameData.playerName + "'s Mine";
   // Get date and set it as copyright time
   var today = new Date();
   var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
   document.getElementById("copE-right").innerHTML = date;
   // Display amount earned in abscence
   let diff = Date.now() - gameData.lastTick;
   if (diff > 5000) { notify(`While you were gone you earned ${toWord(Math.floor(goldPerSecond() * (diff / 1000)))} Gold`); }
   contextMenu();
}

function gameSetup() {
   document.querySelector(".introduction").style.display = "block";
   document.querySelector(".name-input").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
         event.preventDefault();
         gameData.playerName = document.querySelector(".name-input").value;
         document.querySelector(".introduction").style.display = "none";
         document.querySelector(".playerName").textContent = gameData.playerName + "'s Mine";
      }
   });
   let date = new Date();
   gameData.startTime = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
}

// Check if mobile
if (isMobile() && !window.location.href.includes("mobile")) { window.location.href = "mobile.html"; }
// else if (!isMobile() && !window.location.href.includes("play")) { window.location.href = "play.html"; }
function isMobile() { return ("ontouchstart" in document.documentElement); }

// Log somthing sarcastic
console.log(["Look behind you.", "Wait a moment... did you leave the stove on?", "Cheating, are you?", "Sssskkkeeeeeeeeee!"][Math.floor(Math.random() * 4)]);


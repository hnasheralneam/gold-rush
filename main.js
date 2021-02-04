//==========================================================
// Copyright and Opening Information
//==========================================================

// Copyright Squirrel 2020 A.D.
// If you continue you shall get the majority of the game spoiled for you. Also, it's a 'bit' messy
// Solicitors will be relieved of their sanity
// Version 1.0.0 comes with commented code! Now I can know why I did what I did.

//==========================================================
// Important Varibles
//==========================================================
// Default values
const initialGameData = {
// Gold
   gold: 0,
   totalGold: 0,
// Clicks
   clickinGold: 1,
   upgradeClickCost: 100,
   goldPerClick: 0,
   clicks: 0,
// Tools
   bToolCost: 10,
   toolLevel: 1,
// Pickaxes
   pickaxeProfit: 0.5,
   pickaxeGold: 0,
   buyPickaxeCost: 50,
   pickaxeNumber: 0,
// Dwarfs
   dwarfProfit: 2,
   dwarfGold: 0,
   hireDwarfCost: 250,
   dwarfNumber: 0,
// Geese
   gooseProfit: 10,
   gooseGold: 0,
   hireGooseCost: 10000,
   gooseNumber: 0,
// Gold mines
   mineProfit: 60,
   mineGold: 0,
   openMineCost: 28000,
   mineNumber: 0,
// Dragons
   dragonProfit: 2000,
   dragonGold: 0,
   hireDragonCost: 200000,
   dragonNumber: 0,
// Philosopher's Stones
   stoneProfit: 10000,
   stoneGold: 0,
   buyStoneCost: 3750000,
   stoneNumber: 0,
   upgradeStoneCost: 3000000,
// Astroid-mining Station
   stationProfit: 85000,
   stationGold: 0,
   openStationCost: 250000000,
   stationNumber: 0,
// Leprechauns
   leprechaunProfit: 600000,
   leprechaunGold: 0,
   hireLeprechaunCost: 1000000000,
   leprechaunNumber: 0,
// Golden Sheep
   sheepProfit: 10000000,
   sheepGold: 0,
   hireSheepCost: 250000000000,
   sheepNumber: 0,
// Mass rays
   rayProfit: 1000000000,
   rayGold: 0,
   buyRayCost: 2000000000000,
   rayNumber: 0,
// Neutron Star Mergers
   mergerProfit: 10000000000,
   mergerGold: 0,
   buyMergerCost: 200000000000000,
   mergerNumber: 0,
// Player Name
   playerName: null,
// Time
   lastTick: Date.now()
}
const initialUpgradeData = {
   a1: 1,
   a1Price: 200,
   a2: 1,
   a2Price: 500,
   a3: 1,
   a3Price: 2000,
   a4: 1,
   a4Price: 8000,
   a5: 1,
   a5Price: 80000,
   a6: 1,
   a6Price: 280000,
   b1: false,
   b1Price: 750,
   b2: false,
   b2Price: 2000,
   b3: false,
   b3Price: 5000,
   b4: false,
   b4Price: 8000,
   c1: false,
   c1Price: 1250,
   c2: false,
   c2Price: 3200,
   c3: false,
   c3Price: 5000,
   c4: false,
   c4Price: 15000,
   c01: false,
   c01Price: 25000,
   c02: false,
   c02Price: 50000,
   c03: false,
   c03Price: 80000,
   c04: false,
   c04Price: 160000,
   d1: false,
   d1Price: 60000,
   d2: false,
   d2Price: 120000,
   d3: false,
   d3Price: 240000,
   d4: false,
   d4Price: 500000,
   e1: false,
   e1Price: 500000,
   e2: false,
   e2Price: 1000000,
   e3: false,
   e3Price: 2000000,
   e4: false,
   e4Price: 5000000,
   f1: false,
   f1Price: 8000000,
   f2: false,
   f2Price: 16000000,
   f3: false,
   f3Price: 32000000,
   f4: false,
   f4Price: 70000000,
   g1: false,
   g1Price: 500000000,
   g2: false,
   g2Price: 1000000000,
   g3: false,
   g3Price: 2000000000,
   g4: false,
   g4Price: 5000000000,
   h1: false,
   h1Price: 1600000000,
   h2: false,
   h2Price: 2400000000,
   h3: false,
   h3Price: 4800000000,
   h4: false,
   h4Price: 10000000000,
   i1: false,
   i1Price: 200000000000,
   i2: false,
   i2Price: 400000000000,
   i3: false,
   i3Price: 800000000000,
   i4: false,
   i4Price: 1600000000000,
   j1: false,
   j1Price: 4000000000000,
   j2: false,
   j2Price: 8000000000000,
   j3: false,
   j3Price: 16000000000000,
   j4: false,
   j4Price: 32000000000000,
   k1: false,
   k1Price: 50000000000000,
   k2: false,
   k2Price: 100000000000000,
   k3: false,
   k3Price: 200000000000000,
   k4: false,
   k4Price: 500000000000000,

   l1: 1,
   l1Price: 1000000000000,
   l2: 1,
   l2Price: 5000000000000,

   otherworldPortalActivationCost: 120000000000000
}

// Assigning defaults to individual player values
let gameData = initialGameData;
let upgradeData = initialUpgradeData;

// All building gold added together
let goldPerSecond = goldPerSecond => gameData.pickaxeGold + gameData.dwarfGold + gameData.gooseGold + gameData.mineGold + gameData.dragonGold + gameData.stoneGold + gameData.stationGold + gameData.leprechaunGold + gameData.sheepGold + gameData.rayGold + gameData.mergerGold;

// Colors for avilibe or unavalibe buildings
let regColor = "#ffffbd";
let notEnoughColor = "#333";

let alert = document.querySelector(".alert");
let bonusNumber = 1;

//==========================================================
// Gain Profit
//==========================================================

// Add gold by clicking the asteroid
function collectGold() {
   addGold(gameData.clickinGold);
   gameData.clicks += 1;
   // Make clink sounds
   document.getElementById("clinck").play();
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

//==========================================================
// Acquire Business Assets
//==========================================================

function bTool() {
   if (gameData.gold >= gameData.bToolCost) {
      gameData.gold -= gameData.bToolCost;
      gameData.clickinGold += 1;
      gameData.bToolCost *= 2;
      gameData.toolLevel += 1;
   }
}

function acquireAsset(asset, assetCost, costMultiplier) {
   // If player has enough gold
   if (gameData.gold >= gameData[assetCost + "Cost"]) {
      // Substract the price from their gold
      gameData.gold -= gameData[assetCost + "Cost"];
      // Add the amount of gold per item to the gold that item is producing
      gameData[asset + "Gold"] += gameData[asset + "Profit"];
      // Multiply the cost by 1.15 and the amount of the item owned
      gameData[assetCost + "Cost"] = (costMultiplier * 1.15 ** gameData[asset + "Number"]).toFixed(0);
      // Add one to the amount of that item owned
      gameData[asset + "Number"] += 1;
   }
}

//==========================================================
// Summoning Circles
//==========================================================
/*
// All data about Summoning Circles
const initalCircleData = {
// Starts at lvl 0
   circleLevel: 0,

// Upgrade Costs
   lvl1Cost: 100000000,
   lvl2Cost: 2500000000,
   lvl3Cost: 7500000000,
   lvl4Cost: 25000000000,
   lvl5Cost: 75000000000,
   lvl6Cost: 100000000000,
   lvl7Cost: 2500000000000,
   lvl8Cost: 7500000000000,
   lvl9Cost: 25000000000000,
   lvl10Cost: 75000000000000,
   lvl11Cost: 100000000000000,
   lvl12Cost: "Ohhh, mysterious, there are only 11 buildings",

// Profits and Such
   circleProfits: 1,
   timeUnit: 86500000, // Starts at 24 hours
   profit: null,
}

let circleData = initalCircleData;

function unlockCircle() {
   if (otherData.otherStars >= 10000) {
      otherData.otherStars -= 10000;
      document.getElementById("otherstars").style.display = "block";
      document.getElementById("summoningCircle").style.display = "block";
   }
}

// Upgrade the Summoning Circle
function upgradeCircle() {
   // Depending on what level the player is on, run a certiant part of the function
   if (circleData.circleLevel === 0) {
      // Check there is enough otherstars
      if (otherData.otherStars >= circleData.lvl1Cost) {
         // Substract that amount of otherstars
         otherData.otherStars -= circleData.lvl1Cost;
         // Add one to the level
         circleData.circleLevel += 1;
         // Reset the profits and unit of time
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         // Set product as whatever level it is
         circleData.product = "Pickaxe";
      }
   }
   if (circleData.circleLevel === 1) {
      if (otherData.otherStars >= circleData.lvl2Cost) {
         otherData.otherStars -= circleData.lvl2Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Dwarf";
      }
   }
   if (circleData.circleLevel === 2) {
      if (otherData.otherStars >= circleData.lvl3Cost) {
         otherData.otherStars -= circleData.lvl3Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Goosw";
      }
   }
   if (circleData.circleLevel === 3) {
      if (otherData.otherStars >= circleData.lvl4Cost) {
         otherData.otherStars -= circleData.lvl4Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Mine";
      }
   }
   if (circleData.circleLevel === 4) {
      if (otherData.otherStars >= circleData.lvl5Cost) {
         otherData.otherStars -= circleData.lvl5Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Dragon";
      }
   }
   if (circleData.circleLevel === 5) {
      if (otherData.otherStars >= circleData.lvl6Cost) {
         otherData.otherStars -= circleData.lvl6Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Stone";
      }
   }
   if (circleData.circleLevel === 6) {
      if (otherData.otherStars >= circleData.lvl7Cost) {
         otherData.otherStars -= circleData.lvl7Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Station";
      }
   }
   if (circleData.circleLevel === 7) {
      if (otherData.otherStars >= circleData.lvl8Cost) {
         otherData.otherStars -= circleData.lvl8Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Leprechaun";
      }
   }
   if (circleData.circleLevel === 8) {
      if (otherData.otherStars >= circleData.lvl9Cost) {
         otherData.otherStars -= circleData.lvl9Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Sheep";
      }
   }
   if (circleData.circleLevel === 9) {
      if (otherData.otherStars >= circleData.lvl110Cost) {
      otherData.otherStars -= circleData.lvl10Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Ray";
      }
   }
   if (circleData.circleLevel === 10) {
      if (otherData.otherStars >= circleData.lvl11Cost) {
         otherData.otherStars -= circleData.lvl11Cost;
         circleData.circleLevel += 1;
         circleData.circleProfits = 1;
         circleData.timeUnit = 86500000;
         circleData.product = "Merger";
      }
   }
   if (circleData.circleLevel === 11) {
      // I hate these popups
      alert("Coming Soon!");
   }
}
*/
//==========================================================
// Upgrades
//==========================================================
// Checks wether to display upgrades
var checkForUpgrades = window.setInterval(function() {
   // Try to change this into a loop
   if (gameData.toolLevel >= 1 && upgradeData.a1 == 1) { document.getElementById("a1").style.display = "block"; }
   if (gameData.toolLevel >= 5 && upgradeData.a2 == 1) { document.getElementById("a2").style.display = "block"; }
   if (gameData.toolLevel >= 10 && upgradeData.a3 == 1) { document.getElementById("a3").style.display = "block"; }
   if (gameData.toolLevel >= 15 && upgradeData.a4 == 1) { document.getElementById("a4").style.display = "block"; }
   if (gameData.toolLevel >= 20 && upgradeData.a5 == 1) { document.getElementById("a5").style.display = "block"; }
   if (gameData.toolLevel >= 25 && upgradeData.a6 == 1) { document.getElementById("a6").style.display = "block"; }
   if (gameData.pickaxeNumber >= 1 && !upgradeData.b1) { document.getElementById("b1").style.display = "block"; }
   if (gameData.pickaxeNumber >= 5 && !upgradeData.b2) { document.getElementById("b2").style.display = "block"; }
   if (gameData.pickaxeNumber >= 10 && !upgradeData.b3) { document.getElementById("b3").style.display = "block"; }
   if (gameData.pickaxeNumber >= 15 && !upgradeData.b4) { document.getElementById("b4").style.display = "block"; }
   if (gameData.dwarfNumber >= 1 && !upgradeData.c1) { document.getElementById("c1").style.display = "block"; }
   if (gameData.dwarfNumber >= 5 && !upgradeData.c2) { document.getElementById("c2").style.display = "block"; }
   if (gameData.dwarfNumber >= 10 && !upgradeData.c3) { document.getElementById("c3").style.display = "block"; }
   if (gameData.dwarfNumber >= 15 && !upgradeData.c4) { document.getElementById("c4").style.display = "block"; }
   if (gameData.gooseNumber >= 1 && !upgradeData.c01) { document.getElementById("c01").style.display = "block"; }
   if (gameData.gooseNumber >= 5 && !upgradeData.c02) { document.getElementById("c02").style.display = "block"; }
   if (gameData.gooseNumber >= 10 && !upgradeData.c03) { document.getElementById("c03").style.display = "block"; }
   if (gameData.gooseNumber >= 15 && !upgradeData.c04) { document.getElementById("c04").style.display = "block"; }
   if (gameData.mineNumber >= 1 && !upgradeData.d1) { document.getElementById("d1").style.display = "block"; }
   if (gameData.mineNumber >= 5 && !upgradeData.d2) { document.getElementById("d2").style.display = "block"; }
   if (gameData.mineNumber >= 10 && !upgradeData.d3) { document.getElementById("d3").style.display = "block"; }
   if (gameData.mineNumber >= 15 && !upgradeData.d4) { document.getElementById("d4").style.display = "block"; }
   if (gameData.dragonNumber >= 1 && !upgradeData.e1) { document.getElementById("e1").style.display = "block"; }
   if (gameData.dragonNumber >= 5 && !upgradeData.e2) { document.getElementById("e2").style.display = "block"; }
   if (gameData.dragonNumber >= 10 && !upgradeData.e3) { document.getElementById("e3").style.display = "block"; }
   if (gameData.dragonNumber >= 15 && !upgradeData.e4) { document.getElementById("e4").style.display = "block"; }
   if (gameData.stoneNumber >= 1 && !upgradeData.f1) { document.getElementById("f1").style.display = "block"; }
   if (gameData.stoneNumber >= 5 && !upgradeData.f2) { document.getElementById("f2").style.display = "block"; }
   if (gameData.stoneNumber >= 10 && !upgradeData.f3) { document.getElementById("f3").style.display = "block"; }
   if (gameData.stoneNumber >= 15 && !upgradeData.f4) { document.getElementById("f4").style.display = "block"; }
   if (gameData.stationNumber >= 1 && !upgradeData.g1) { document.getElementById("g1").style.display = "block"; }
   if (gameData.stationNumber >= 5 && !upgradeData.g2) { document.getElementById("g2").style.display = "block"; }
   if (gameData.stationNumber >= 10 && !upgradeData.g3) { document.getElementById("g3").style.display = "block"; }
   if (gameData.stationNumber >= 15 && !upgradeData.g4) { document.getElementById("g4").style.display = "block"; }
   if (gameData.leprechaunNumber >= 1 && !upgradeData.h1) { document.getElementById("h1").style.display = "block"; }
   if (gameData.leprechaunNumber >= 5 && !upgradeData.h2) { document.getElementById("h2").style.display = "block"; }
   if (gameData.leprechaunNumber >= 10 && !upgradeData.h3) { document.getElementById("h3").style.display = "block"; }
   /* if (gameData.leprechaunNumber >= 15 && !upgradeData.h4) { document.getElementById("h4").style.display = "block"; } */
   if (gameData.sheepNumber >= 1 && !upgradeData.i1) { document.getElementById("i1").style.display = "block"; }
   if (gameData.sheepNumber >= 5 && !upgradeData.i2) { document.getElementById("i2").style.display = "block"; }
   /* if (gameData.sheepNumber >= 10 && !upgradeData.i3) { document.getElementById("i3").style.display = "block"; } */
   /* if (gameData.sheepNumber >= 15 && !upgradeData.i4) { document.getElementById("i4").style.display = "block"; } */
   if (gameData.rayNumber >= 1 && !upgradeData.j1) { document.getElementById("j1").style.display = "block"; }
   if (gameData.rayNumber >= 5 && !upgradeData.j2) { document.getElementById("j2").style.display = "block"; }
   if (gameData.rayNumber >= 10 && !upgradeData.j3) { document.getElementById("j3").style.display = "block"; }
   if (gameData.rayNumber >= 15 && !upgradeData.j4) { document.getElementById("j4").style.display = "block"; }
   if (gameData.mergerNumber >= 1 && !upgradeData.k1) { document.getElementById("k1").style.display = "block"; }
   if (gameData.mergerNumber >= 5 && !upgradeData.k2) { document.getElementById("k2").style.display = "block"; }
   if (gameData.mergerNumber >= 10 && !upgradeData.k3) { document.getElementById("k3").style.display = "block"; }
   if (gameData.mergerNumber >= 15 && !upgradeData.k4) { document.getElementById("k4").style.display = "block"; }

   // if (gameData.mergerNumber >= 15 && gameData.rayNumber >= 15 && gameData.sheepNumber >= 15 && gameData.leprechaunNumber >= 15 && gameData.stationNumber >= 15 && gameData.stoneNumber >= 15 && gameData.dragonNumber >= 15 && gameData.mineNumber >= 15 && gameData.gooseNumber >= 15 && gameData.dwarfNumber >= 15 && gameData.pickaxeNumber >= 15) {
   //    document.getElementById("otherworldPortal").style.display = "block";
   // }
}, 500)

// Communal Upgrade Function
function research(number, building) {
   if (gameData.gold >= upgradeData[number + "Price"]) {
      gameData.gold -= upgradeData[number + "Price"];
      gameData[building + "Profit"] *= 2;
      gameData[building + "Gold"] *= 2;
      upgradeData[number] = true;
      document.getElementById(number).style.display = "none";
   }
}
function aResearch(num) {
   if (gameData.gold >= upgradeData["a" + num + "Price"]) {
      gameData.gold -= upgradeData["a" + num + "Price"];
      gameData.clickinGold *= 2;
      upgradeData["a" + num] = 2;
      document.getElementById("a" + num).style.display = "none";
   }
}
function a5() {
   if (gameData.gold >= upgradeData.a5Price) {
      gameData.gold -= upgradeData.a5Price;
      gameData.clickinGold *= gameData.pickaxeNumber;
      upgradeData.a5 = 2;
      document.getElementById("a5").style.display = "none";
   }
}
function a6() {
   if (gameData.gold >= upgradeData.a6Price) {
      gameData.gold -= upgradeData.a6Price;
      gameData.clickinGold *= gameData.pickaxeNumber;
      upgradeData.a6 = 2;
      document.getElementById("a6").style.display = "none";
   }
}

function otherworldPortal() {
   if (gameData.gold >= gameData.otherworldPortalActivationCost) {
      gameData.gold -= gameData.otherworldPortalActivationCost;
      window.open("https://squirrel-314.github.io/Otherworld/otherworld.html#");
   }
}

//==========================================================
// Game Core
//==========================================================
// Runs every second
var mainGameLoop = window.setInterval(function() {
   // Current time minus one second ago, set one second ago to now, and add gold for that time
   let diff = Date.now() - gameData.lastTick;
   gameData.lastTick = Date.now();
   addGold((goldPerSecond() * (diff / 1000) * bonusNumber));
}, 1000)

// Displays buildings if gold is at a certiant amount, and in a diffrent color if affordable
var buildColorLoop = window.setInterval(function() {
   // If you have half the gold to buy the item, make it visible
   if (gameData.gold >= (gameData.bToolCost / 2) || gameData.toolLevel >= 1) { document.getElementById("bTool").style.display = "flex"; }
   // If you have enough gold to buy the item, make the color the avalible color
   if (gameData.gold >= gameData.bToolCost) { document.getElementById("bTool").style.backgroundColor = regColor; }
   // Otherwise, make it the unavalible color
   else { document.getElementById("bTool").style.backgroundColor = notEnoughColor; }
   let pickaxeBox = document.getElementById("buyPickaxe");
   if (gameData.gold >= (gameData.buyPickaxeCost / 2) || gameData.pickaxeNumber >= 1) { pickaxeBox.style.display = "flex"; }
   if (gameData.gold >= gameData.buyPickaxeCost) { pickaxeBox.style.backgroundColor = regColor; }
   else { pickaxeBox.style.backgroundColor = notEnoughColor; }
   let dwarfBox = document.getElementById("hireDwarf");
   if (gameData.gold >= (gameData.hireDwarfCost / 2) || gameData.dwarfNumber >= 1) { dwarfBox.style.display = "flex"; }
   if (gameData.gold >= gameData.hireDwarfCost) { dwarfBox.style.backgroundColor = regColor; }
   else { dwarfBox.style.backgroundColor = notEnoughColor; }
   let gooseBox = document.getElementById("hireGoose");
   if (gameData.gold >= (gameData.hireGooseCost / 2) || gameData.gooseNumber >= 1) { gooseBox.style.display = "flex";  }
   if (gameData.gold >= gameData.hireGooseCost) { gooseBox.style.backgroundColor = regColor; }
   else { gooseBox.style.backgroundColor = notEnoughColor; }
   if (gameData.gold >= (gameData.openMineCost / 2) || gameData.mineNumber >= 1) { document.getElementById("openMine").style.display = "flex"; }
   if (gameData.gold >= gameData.openMineCost) { document.getElementById("openMine").style.backgroundColor = regColor; }
   else { document.getElementById("openMine").style.backgroundColor = notEnoughColor; }
   if (gameData.gold >= (gameData.hireDragonCost / 2) || gameData.dragonNumber >= 1) { document.getElementById("hireDragon").style.display = "flex"; }
   if (gameData.gold >= gameData.hireDragonCost) { document.getElementById("hireDragon").style.backgroundColor = regColor; }
   else { document.getElementById("hireDragon").style.backgroundColor = notEnoughColor; }
   if (gameData.gold >= (gameData.buyStoneCost / 2) || gameData.stoneNumber >= 1) { document.getElementById("buyStone").style.display = "flex"; }
   if (gameData.gold >= gameData.buyStoneCost) { document.getElementById("buyStone").style.backgroundColor = regColor; }
   else { document.getElementById("buyStone").style.backgroundColor = notEnoughColor; }
   if (gameData.gold >= (gameData.openStationCost / 2) || gameData.stationNumber >= 1) { document.getElementById("openStation").style.display = "flex"; }
   if (gameData.gold >= gameData.openStationCost) { document.getElementById("openStation").style.backgroundColor = regColor; }
   else { document.getElementById("openStation").style.backgroundColor = notEnoughColor; }
   if (gameData.gold >= (gameData.hireLeprechaunCost / 2) || gameData.leprechaunNumber >= 1) { document.getElementById("hireLeprechaun").style.display = "flex"; }
   if (gameData.gold >= gameData.hireLeprechaunCost) { document.getElementById("hireLeprechaun").style.backgroundColor = regColor; }
   else { document.getElementById("hireLeprechaun").style.backgroundColor = notEnoughColor; }
   if (gameData.gold >= (gameData.hireSheepCost / 2) || gameData.sheepNumber >= 1) { document.getElementById("hireSheep").style.display = "flex"; }
   if (gameData.gold >= gameData.hireSheepCost) { document.getElementById("hireSheep").style.backgroundColor = regColor; }
   else { document.getElementById("hireSheep").style.backgroundColor = notEnoughColor; }
   if (gameData.gold >= (gameData.buyRayCost / 2) || gameData.rayNumber >= 1) { document.getElementById("buyRay").style.display = "flex"; }
   if (gameData.gold >= gameData.buyRayCost) { document.getElementById("buyRay").style.backgroundColor = regColor; }
   else { document.getElementById("buyRay").style.backgroundColor = notEnoughColor; }
   if (gameData.gold >= (gameData.buyMergerCost / 2) || gameData.mergerNumber >= 1) { document.getElementById("buyMerger").style.display = "flex"; }
   if (gameData.gold >= gameData.buyMergerCost) { document.getElementById("buyMerger").style.backgroundColor = regColor; }
   else { document.getElementById("buyMerger").style.backgroundColor = notEnoughColor; }
   if (gameData.mergerNumber <= 0) { document.getElementById("waiting").innerHTML = "<img id=\"wait-gif\" src=\"Images/wait.gif\">"; }
}, 500)

// Prevents decimals in gold
var setThingsRight = window.setInterval(function() {
   document.title = commas((gameData.gold).toFixed(0)) + " Gold | Gold Rush";
   document.getElementById("gold-owned").innerHTML = commas((gameData.gold).toFixed(0)) + " Gold <img src=\"Images/retro-coin.gif\" alt=\"Gold!\" class=\"retro-coin\">";
   // Display gold per second & gold per click
   document.getElementById("gold-profits").innerHTML = commas(goldPerSecond()) + " Gold per Second<br>" + commas(gameData.clickinGold) + " Gold per Click<br>";
}, 20)

// Add commas to numbers
function commas(num) { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

// This resets the values displayed in the shop
var updateStore = window.setInterval(function() {
   // Gold per Building
   document.getElementById("pickaxe-info").innerHTML = "Pickaxe <br> " + commas(gameData.pickaxeProfit) + " GPS <br> Producing " + commas(gameData.pickaxeGold) + " GPS<br>A sturdy pickaxe to mine gold with";
   document.getElementById("dwarf-info").innerHTML = "Dwarf  <br> " + commas(gameData.dwarfProfit) + " GPS each<br> Producing " + commas(gameData.dwarfGold) + " GPS<br>An assistant to help you mine gold";
   document.getElementById("goose-info").innerHTML = "Geese <br> " + commas(gameData.gooseProfit) + " GPS each<br> Producing " + commas(gameData.gooseGold) + " GPS<br>A nice goose that lays golden egg";
   document.getElementById("mine-info").innerHTML = "Gold Mine <br> " + commas(gameData.mineProfit) + " GPS each<br> Producing " + commas(gameData.mineGold) + " GPS<br>A new mine to mine gold in";
   document.getElementById("dragon-info").innerHTML = "Dragon <br> " + commas(gameData.dragonProfit) + " GPS each<br> Producing " + commas(gameData.dragonGold) + " GPS<br>A nice dragon to steal gold and hoard it";
   document.getElementById("stone-info").innerHTML = "Philosopher's Stone <br> " + commas(gameData.stoneProfit) + " GPS each<br> Producing " + commas(gameData.stoneGold) + " GPS<br>An alchemy stone that turns ordinary rocks into gold";
   document.getElementById("station-info").innerHTML = "Astroid-mining Station <br> " + commas(gameData.stationProfit) + " GPS each<br> Producing " + commas(gameData.stationGold) + " GPS<br>A space station that mines astroids for gold";
   document.getElementById("leprechaun-info").innerHTML = "Leprechaun <br> " + commas(gameData.leprechaunProfit) + " GPS each<br> Producing " + commas(gameData.leprechaunGold) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows";
   document.getElementById("sheep-info").innerHTML = "Golden Sheep <br> " + commas(gameData.sheepProfit) + " GPS each<br> Producing " + commas(gameData.sheepGold) + " GPS<br>A cute round fluffy sheep with a golden fleece";
   document.getElementById("ray-info").innerHTML = "Mass Ray <br> " + commas(gameData.rayProfit) + " GPS each<br> Producing " + commas(gameData.rayGold) + " GPS<br>Turns mass into gold";
   document.getElementById("merger-info").innerHTML = "Neutron Star Merger<br> " + commas(gameData.mergerProfit) + " GPS each<br> Producing " + commas(gameData.mergerGold) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source ;).";

   // Building Count
   document.getElementById("bTool").innerHTML = "Better Tools<br> Tool Level " + commas(gameData.toolLevel) + "<br> Cost: " + commas(gameData.bToolCost) + " Gold";
   document.getElementById("pickaxe-display").innerHTML = "Pickaxe<br> (You have " + commas(gameData.pickaxeNumber) + ") <br>Cost: " + commas(gameData.buyPickaxeCost) + " Gold";
   document.getElementById("dwarf-display").innerHTML = "Dwarf<br> (You have " + commas(gameData.dwarfNumber) + ") <br>Cost: " + commas(gameData.hireDwarfCost) + " Gold";
   document.getElementById("goose-display").innerHTML = "Geese<br> (You have " + commas(gameData.gooseNumber) + ") <br>Cost: " + commas(gameData.hireGooseCost) + " Gold";
   document.getElementById("mine-display").innerHTML = "Gold Mine<br> (You have " + commas(gameData.mineNumber) + ") <br>Cost: " + commas(gameData.openMineCost) + " Gold";
   document.getElementById("dragon-display").innerHTML = "Dragon<br> (You have " + commas(gameData.dragonNumber) + ") <br>Cost: " + commas(gameData.hireDragonCost) + " Gold";
   document.getElementById("stone-display").innerHTML = "Philosopher's Stone<br> (You have " + commas(gameData.stoneNumber) + ") <br>Cost: " + commas(gameData.buyStoneCost) + " Gold";
   document.getElementById("station-display").innerHTML = "Astroid-mining Station<br> (You have " + commas(gameData.stationNumber) + ") <br>Cost: " + commas(gameData.openStationCost) + " Gold";
   document.getElementById("leprechaun-display").innerHTML = "Leprechaun<br> (You have " + commas(gameData.leprechaunNumber) + ") <br>Cost: " + commas(gameData.hireLeprechaunCost) + " Gold";
   document.getElementById("sheep-display").innerHTML = "Golden Sheep<br> (You have " + commas(gameData.sheepNumber) + ") <br>Cost: " + commas(gameData.hireSheepCost) + " Gold";
   document.getElementById("ray-display").innerHTML = "Mass Ray<br> (You have " + commas(gameData.rayNumber) + ") <br>Cost: " + commas(gameData.buyRayCost) + " Gold";
   document.getElementById("merger-display").innerHTML = "Neutron Star Merger<br> (You have " + commas(gameData.mergerNumber) + ") <br>Cost: " + commas(gameData.buyMergerCost) + " Gold";

   // Display gold per minuite, hour, day, month, and year
   document.getElementById("gpm").innerHTML = goldPerSecond() * 60 + " Gold Per Minute";
   document.getElementById("g0pher").innerHTML = goldPerSecond() * 60 * 60 + " Gold Per Hour";
   document.getElementById("gpd").innerHTML = goldPerSecond() * 60 * 60 * 24 + " Gold Per Day";
   document.getElementById("gpw").innerHTML = goldPerSecond() * 60 * 60 * 24 * 7 + " Gold Per Week";
   document.getElementById("gpM").innerHTML = goldPerSecond() * 60 * 60 * 24 * 7 * 4 + " Gold Per Month";
   document.getElementById("gpy").innerHTML = goldPerSecond() * 60 * 60 * 24 * 7 * 4 * 12 + " Gold Per Year";
   document.getElementById("totalGold").innerHTML = (gameData.totalGold).toFixed(0) + " Lifetime Gold Profits";
}, 500)

//==========================================================
// Save
//==========================================================

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

var saveLoop = window.setInterval(function() {
   save();
}, 60000)

//Wipe Save
function restart() {
   // Confirm Restart
   var areYouSure = confirm("Are you SURE you want to restart? This will wipe all your progress!");
   // If restart is confirmed
   if (areYouSure == true) {
      // Ask again
      var areYouReallySure = confirm("Are you REALLY SURE you want to restart? There is no going back!");
      // If restart is still confirmed
      if (areYouReallySure == true) {
         // Set gameData to inital values
         gameData = initialGameData;
         upgradeData = initialUpgradeData;
         // Set save as blank
         localStorage.setItem("gameDataSave", JSON.stringify(gameData));
         localStorage.setItem("upgradeDataSave", JSON.stringify(upgradeData));
         // Reload page
         location.reload();
      }
   }
}

// Save, and set save alert
function save() {
   localStorage.setItem("gameDataSave", JSON.stringify(gameData));
   localStorage.setItem("upgradeDataSave", JSON.stringify(upgradeData));
   alert.style.opacity = "1";
   alert.textContent = `Game Saved!`;
   setTimeout(saveAlert, 2000);
   function saveAlert() {
      alert.style.opacity = "0";
   }
}

//==========================================================
// Settings & Shortcuts
//==========================================================

// Change Theme
function dark() {
   // This changes the default colors for avalible and unavalible buildings
   regColor = "#454545";
   notEnoughColor = "#000";

   // Class styling
   var storeItem = document.getElementsByClassName('store-item');
   for (let i = 0; i < storeItem.length; i++) {
      storeItem[i].style.color = '#fff';
      storeItem[i].style.fontFamily = 'times';
      storeItem[i].style.border = 'outset 5px lightblue';
   }
   var up = document.getElementsByClassName('UP');
   for (let i = 0; i < up.length; i++) {
      up[i].style.color = '#000';
      up[i].style.backgroundColor = '#b3d0de';
   }
   var details = document.getElementsByTagName('details');
   for (let i = 0; i < details.length; i++) {
      details[i].style.background = '#737373';
   }

   // Basic styling
   document.body.style.color = "#fff";
   document.body.style.background = "#383838";
   document.getElementById("news").style.background = '#737373';
   document.getElementById("playerName").style.background = "#8f8d8d";
}
function light() {
   // Reload page
   document.location.href = ("")
}

// Set myAudio to audio file
let myAudio = document.getElementById("myAudio");
function music() {
   // If audio is paused run, if it is playing, pause
   return myAudio.paused ? myAudio.play() : myAudio.pause();
};

// Save by ctrl + S
document.addEventListener("keydown", function(e) {
   // If player is on a Mac, use Cmd + S
   if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode === 83) {
      // Prevent default
      e.preventDefault();
      // Run save function
      save();
   }
}, false);

//==========================================================
// Right Click Button
//==========================================================

let rightClickMenu = document.getElementById("menu").style;
if (document.addEventListener) {
   document.addEventListener('contextmenu', function(e) {
      var posX = e.clientX;
      var posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
   }, false);
   document.addEventListener('click', function(e) {
      rightClickMenu.display = "none";
   }, false);
}
else {
   document.attachEvent('oncontextmenu', function(e) {
      var posX = e.clientX;
      var posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
   });
   document.attachEvent('onclick', function(e) {
      setTimeout(function() {
         rightClickMenu.display = "none";
      }, 501);
   });
}
function menu(x, y) {
   rightClickMenu.top = y + "px";
   rightClickMenu.left = x + "px";
   rightClickMenu.display = "block";
}

//==========================================================
// Disasters & Enchancments
//==========================================================

let luckyRoll = window.setInterval(function() {
   let rand = Math.random();
   if (rand > .95) {
      console.log("There was a 5% chance this would be logged.");
   }
   if (rand > .85) {
      console.log("There was a 15% chance this would be logged.");
      console.log((["Large underground gold reserve found! Gold earnings tempararily x1.5!", "Old Ican temple with vast stores of gold found! Gold earnings tempararily x1.5!"][Math.floor(Math.random() * 2)]));
      bonusNumber = 1.5;
   }
   if (rand > .92) {
      console.log("There was a 8% chance this would be logged.");
   }
   if (rand > .98) {
      console.log("There was a 2% chance this would be logged.");
   }
   if (rand > .99) {
      console.log("There was a 1% chance this would be logged.");
   }
   console.log("End");
}, 300000)

//==========================================================
// News
//==========================================================

// This is all of the news
let allNews = [
   `You go mining sometimes`,
   `You like the shiny twinkle of gold`,
   `When you feel sad, you look at your hoard of gold.`,
   `You dream of golden sheep in a golden meadow eating golden grass.`,
   `You dream of golden dragons flying high through golden clouds in a golden sky with the golden setting sun.`,
   `Breaking News: Under threat of closing the press, journalist tells the semi-truth!`,
   //`News: `,
   //`News: `,
]
let pickaxeNews = [
   `News: New type of pickaxe coming out, looks suspiciously like normal iron.`,
   `News: Purchases of pickaxes on the rise for both practical and decorative purposes.`,
   `News: Little plastic keychain pickaxes selling like crazy, tourist shops wildly confused "Who wants that type of junk?"`,
   `Ad: You looking for a good sturdy pickaxe for some backyard mining? We've got just the thing for you! Get our heavy-duty all-purpose pickaxes today!`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]
let dwarfNews = [
   `News: Dwarfs stop human miners from going to work, "They only get in the way."`,
   `News: Reports of "Little people weilding pickaxes" increasing daily`,
   `News: Human miners losing their jobs as dwarfs overtake the mining industry, "not necessarily a bad thing" says retired miner`,
   `News: Scientist fear dwarfs will "take complete controll of the universe", robots disappointed.`,
   `News: Dwarfs rights movment spreading across the globe, dwarfs demand equality and voting rights.`,
   `News: Gold mine collapses, dwarfs demand safer workplaces.`,
   `News: Hoards of angry dwarfs fill the streets worldwide during dwarf rights protests, "It's suprising how threatening a mob of tiny people can be" admits journalist`,
   `News: Peaceful dwarf protests recived with violent reprisal!`,
]
let gooseNews = [
   `News: Scientist finally get the government to allow for the genetic modification of geese to make them lay golden eggs, public enraged.`,
   `Ad: Your old hen not laying enough eggs? Your job just not paying the bills? Get your very own GOLDEN GOOSE today for the low price of your soul!`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]
let mineNews = [
   `News: Mines opening everywhere, environmentalists worried.`,
   `News: Coal and diamond mines going out of business as gold mines reign supreme. "I mean, gold is shiny, what's so special about coal?"`,
   `News: "Maybe we should stop drilling holes in the earth." says random man.`,
   `News: Mines inhabited by creatures from the dawn of time, all journalists investingating mysteriously vanished.`,
   `News: As the gold industry gradualy gains control of the government, new laws are passed in the favor of mining.`,
   `News: "Aren't you worried about the enviroment?" ask journalist, ${gameData.playerName}'s cheif mining officer says "I'll be gone by the time it gets bad."`,
   //`News: `,
   //`News: `,
]
let dragonNews = [
   `News: Dragon eats poodle, owner furious: "The monster! I\'ll have his skin for my handbag!"`,
   `News: Gold dragons cause havoc worldwide as they search for gold-hoarding locations.`,
   `News: Scientist warn people to stay indoors during dragon breeding season."It's for your own overall health."`,
   `News: Global dragon-disease pandemic continuing unhindered, doctors searching for cure.`,
   `New: Dragon babysitters needed becase all parents busy hoarding gold.`,
   `News: Sales of dragon scale jackets skyrocketing, encouraging dragon products market.`,
   `News: Grass-fed dragon milk, new lactose-free substitute to cow milk.`,
   `News: Nations in fear as dragons soar above, athorities advise to "Carry umbrellas everywhere, it could save your life!"`,
]
let stoneNews = [
   `News: Geologist strongly against turning rocks into gold; "You shall not steal our invaluable specimens!"`,
   `News: Throught an aminzing feat of alchemy, Mt. Everest is turned into gold. Locals thoroughly bothered: "Do you know how hard it is to live with a hunk of gold shimmering in your face CONSTANTLY?"`,
   `News: "NO, these philosophers stones DO NOT give longer lives." say exasperated representative of ${gameData.playerName} Industries to over enthusiastic crowd.`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]
let stationNews = [
   `News: Major astroid mining station slams into Earth, impacted country enraged!`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]
let lepNews = [
   `News: Leprechaun becomes politician, world leaders upset.`,
   `News: Rainbows occuring more and more often, leprechaun suspected.`,
   `News: Three leaved clovers become rare due to the large amount of four leaved clovers.`,
   `News: "Don't trust the gold at the end of leprechaun rainbows" says athoritiy, "Who knows what nasty tricks they have up there sleaves!" "Ehm ehm" says leprechaun with camera.`,
   `News: Semi-decent laws are made to protect people from Leprechauns, and vice versa.`,
   //`News: `,
   //`News: `,
   //`News: `,
]
let sheepNews = [
   `News: New golden sheep breeds coming out, including golden-merino, golden-lincon and golden-corriedale.`,
   `News: Market sees a dramatic upturn in the sales of golden fleece jackets.`,
   `News: Pet golden sheeps becoming more popular, causing the introduction of pigmy golden sheeps, adorable little fluffy golden sheeps small enough to fit in your palm.`,
   `Ad: Are you looking for a family pet? Are dragons just not right? Get a pigmy golden sheep today!`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]
let rayNews = [
   `Warning: do not stand in front of mass ray... actually, on second thought, do. (hehe, more gold)`,
   `News: Mass rays wreak havoc, turning multiple minor plantets into soild gold, astronomers enraged`,
   `News: Illegal criminals illegally use mass rays to turn politicians into gold. "I know it's illegal, but I hope they keep doing it. Wait... are you a reporter?!"`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]
let mergerNews = [
   `News: Scientist figure out a way to make gold by merging neutron stars, "Eureka! Wait a moment- I think this time we actually went to far..."`,
   `News: "Why, may I ask, are we MERGING NEUTRON STARS just to make gold!?! Please explain your reasoning." random man rants.`,
   `News: Scientist explains how neutron star mergers work to ${gameData.playerName}'s company top members, and gets the response: "So, it makes gold? Good enough." Scientist sighs.`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]
let richNews = [
   `News: Ordinary household items more commonly made of gold to deal with gold surplus.`,
   `News: Random woman asks: "What are we going to do with all this gold?", everyone ignores her.`,
   `News: Gold Storehouses overflowing, young employ suggest storehouses made of gold.`,
   `News: Personal golden planets becoming fashinble, causing imennse golden solar systems.`,
   `News: New podcast about ${gameData.playerName}'s amazing rise to success coming out! Don't miss it!`,
   `News: Studies show that ${gameData.playerName} has made a total of ${commas(gameData.totalGold)} Gold. "That's a lot of shiny" says researcher`,
   `News: Gold's economic worth dramatically reduced, stock market looking for subsitude.`,
   `News: Philosophers agree that gold is the true meaning of life. "What's truly amazing is they agreed on something." says reporter`,
]
let otherNews = [
   `News: Rumered discoveries of Otherworld portals disrupting world peace.`,
   `News: Lost children suspected to have stumbled throught Otherworld portals.`,
   `News: Freak weather causing havoc and destruction, traced to Otherworld portals.`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]
let summoningNews = [
   `News: Summoing circles rising in popularity, creating personal summoning circle fad.`,
   `Bestselling Book: "Barbarian chanting: A guide on maximizing summoning circle efficacy"`,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
   //`News: `,
]

// Decides which news to display
let news = window.setInterval(function (){
   // Set var that contains all displayale news to default
   var trueNews = allNews;
   // If the player has 1 of a certiant building
   if (gameData.pickaxeNumber >= 1) {
      // Add the news for that building to the displayable news
      trueNews = trueNews.concat(pickaxeNews);
   }
   if (gameData.dwarfNumber >= 1) {
      trueNews = trueNews.concat(dwarfNews);
   }
   if (gameData.gooseNumber >= 1) {
      trueNews = trueNews.concat(gooseNews);
   }
   if (gameData.mineNumber >= 1) {
      trueNews = trueNews.concat(mineNews);
   }
   if (gameData.dragonNumber >= 1) {
      trueNews = trueNews.concat(dragonNews);
   }
   if (gameData.stoneNumber >= 1) {
      trueNews = trueNews.concat(stoneNews);
   }
   if (gameData.stationNumber >= 1) {
      trueNews = trueNews.concat(stationNews);
   }
   if (gameData.leprechaunNumber >= 1) {
      trueNews = trueNews.concat(lepNews);
   }
   if (gameData.sheepNumber >= 1) {
      trueNews = trueNews.concat(sheepNews);
   }
   if (gameData.rayNumber >= 1) {
      trueNews = trueNews.concat(rayNews);
   }
   if (gameData.mergerNumber >= 1) {
      trueNews = trueNews.concat(mergerNews);
   }
   // If you have enough gold
   if (gameData.gold >= 1000000) {
      // Add richNews to trueNews
      trueNews = trueNews.concat(richNews);
   }
   if (gameData.mergerNumber >= 10 && gameData.gold >= 1000000000000) {
      trueNews = trueNews.concat(otherNews);
   }
   // Randomly chooses a piece of news from trueNews
   var randomNews = trueNews[Math.floor(Math.random() * trueNews.length)];
   // Dispalys the random piece of news
   document.getElementById("news").innerHTML = randomNews;
}, 12000)

//==========================================================
// Onload & Game Setup
//==========================================================

// This all runs the moment the page is loaded, and sets up the game
window.onload = function() {
   gameData = savegame.gameData;
   upgradeData = savegame.upgradeData;
   if (gameData.gold < 2 && gameData.toolLevel > 1) {
      // Set gameData to inital values
      gameData = initialGameData;
      upgradeData = initialUpgradeData;
      gameSetup();
      // Set save as blank
      localStorage.setItem("gameDataSave", JSON.stringify(gameData));
      localStorage.setItem("upgradeDataSave", JSON.stringify(upgradeData));
   }
   document.getElementById("playerName").innerHTML = gameData.playerName + "'s Mine";
   // Set varibles
   gameData = savegame.gameData;
   upgradeData = savegame.upgradeData;
   // Get date and set it as copyright time
   var today = new Date();
   var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
   document.getElementById("copE-right").innerHTML = date;
   // Display amount earned in abscence
   let diff = Date.now() - gameData.lastTick;
   gameData.lastTick = Date.now();
   alert.style.opacity = "1";
   alert.textContent = `While you were gone you earned ${commas(Math.floor(goldPerSecond() * (diff / 1000)))} Gold`;
   setTimeout(whileGoneEarned, 6000);
   function whileGoneEarned() {
      alert.style.opacity = "0";
   }
}

function gameSetup() {
   document.querySelector(".dark-shadow").style.display = "block";
   document.querySelector(".welcome").style.display = "flex";
   document.querySelector(".name-input").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
         event.preventDefault();
         gameData.playerName = document.querySelector(".name-input").value;
         document.querySelector(".dark-shadow").style.display = "none";
         document.querySelector(".welcome").style.display = "none";
         document.getElementById("playerName").innerHTML = gameData.playerName + "'s Mine";
      }
   });
}

//==========================================================
// Console
//==========================================================

// Log somthing sarcastic
let consoleMessage = ["Look behind you.", "Wait a moment... did you leave the stove on?", "Cheating, are you?"][Math.floor(Math.random() * 3)];
console.log(consoleMessage)

//==========================================================
//Copyright and Opening Information
//==========================================================

// Copyright Squirrel 2020 A.D.
// If you continue you shall get the majority of the game spoiled for you. Also, it's a 'bit' messy
// Solicitors will be relieved of their sanity
// Beta version comes with commented code! Now I can know why I did what I did.

//==========================================================
//Game Data
//==========================================================

// Default values
var initialGameData = {
//Gold
   gold: 0,
   totalGold: 0,

//Clicks
   clickinGold: 1,
   upgradeClickCost: 100,
   goldPerClick: 0,
   clicks: 0,

//Tools
   bToolCost: 10,
   toolLevel: 1,

//Pickaxes
   pickaxeProfit: 0.5,
   pickaxeGold: 0,
   buyPickaxeCost: 50,
   pickaxeNumber: 0,

//Dwarfs
   dwarfProfit: 2,
   dwarfGold: 0,
   hireDwarfCost: 250,
   dwarfNumber: 0,

//Geese
   gooseProfit: 10,
   gooseGold: 0,
   hireGooseCost: 10000,
   gooseNumber: 0,

//Gold mines
   mineProfit: 60,
   mineGold: 0,
   openMineCost: 28000,
   mineNumber: 0,

//Dragons
   dragonProfit: 2000,
   dragonGold: 0,
   hireDragonCost: 200000,
   dragonNumber: 0,

//Philosopher's Stones
   stoneProfit: 10000,
   stoneGold: 0,
   buyStoneCost: 3750000,
   stoneNumber: 0,
   upgradeStoneCost: 3000000,

//Astroid-mining Station
   stationProfit: 85000,
   stationGold: 0,
   openStationCost: 250000000,
   stationNumber: 0,

//Leprechauns
   lepProfit: 600000,
   leprechaunGold: 0,
   hireLeprechaunCost: 1000000000,
   leprechaunNumber: 0,

//Golden Sheep
   sheepProfit: 10000000,
   sheepGold: 0,
   hireSheepCost: 250000000000,
   sheepNumber: 0,

//Mass rays
   rayProfit: 1000000000,
   rayGold: 0,
   buyRayCost: 2000000000000,
   rayNumber: 0,

//Neutron Star Mergers
   mergerProfit: 10000000000,
   mergerGold: 0,
   buyMergerCost: 200000000000000,
   mergerNumber: 0,

//Player Name
   playerName: null,

//Time
   lastTick: Date.now()
}
var initialUpgradeData = {
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
   b1: 1,
   b1Price: 750,
   b2: 1,
   b2Price: 2000,
   b3: 1,
   b3Price: 5000,
   b4: 1,
   b4Price: 8000,
   c1: 1,
   c1Price: 1250,
   c2: 1,
   c2Price: 3200,
   c3: 1,
   c3Price: 5000,
   c4: 1,
   c4Price: 15000,
   c01: 1,
   c01Price: 25000,
   c02: 1,
   c02Price: 50000,
   c03: 1,
   c03Price: 80000,
   c04: 1,
   c04Price: 160000,
   d1: 1,
   d1Price: 60000,
   d2: 1,
   d2Price: 120000,
   d3: 1,
   d3Price: 240000,
   d4: 1,
   d4Price: 500000,
   e1: 1,
   e1Price: 500000,
   e2: 1,
   e2Price: 1000000,
   e3: 1,
   e3Price: 2000000,
   e4: 1,
   e4Price: 5000000,
   f1: 1,
   f1Price: 8000000,
   f2: 1,
   f2Price: 16000000,
   f3: 1,
   f3Price: 32000000,
   f4: 1,
   f4Price: 70000000,
   g1: 1,
   g1Price: 500000000,
   g2: 1,
   g2Price: 1000000000,
   g3: 1,
   g3Price: 2000000000,
   g4: 1,
   g4Price: 5000000000,
   h1: 1,
   h1Price: 1600000000,
   h2: 1,
   h2Price: 2400000000,
   h3: 1,
   h3Price: 4800000000,
   h4: 1,
   h4Price: 10000000000,
   i1: 1,
   i1Price: 200000000000,
   i2: 1,
   i2Price: 400000000000,
   i3: 1,
   i3Price: 800000000000,
   i4: 1,
   i4Price: 1600000000000,
   j1: 1,
   j1Price: 4000000000000,
   j2: 1,
   j2Price: 8000000000000,
   j3: 1,
   j3Price: 16000000000000,
   j4: 1,
   j4Price: 32000000000000,
   k1: 1,
   k1Price: 50000000000000,
   k2: 1,
   k2Price: 100000000000000,
   k3: 1,
   k3Price: 200000000000000,
   k4: 1,
   k4Price: 500000000000000,

   l1: 1,
   l1Price: 1000000000000,
   l2: 1,
   l2Price: 5000000000000,

   otherworldPortalActivationCost: 120000000000000
}

// Assigning defaults to individual player values
var gameData = initialGameData;
var upgradeData = initialUpgradeData;

// All building gold added together
function goldPerSecond() {
  return gameData.pickaxeGold + gameData.dwarfGold + gameData.gooseGold + gameData.mineGold + gameData.dragonGold + gameData.stoneGold + gameData.stationGold + gameData.leprechaunGold + gameData.sheepGold + gameData.rayGold + gameData.mergerGold;
}

// Colors for avilibe or unavalibe buildings
var regColor = "#ffffbd";
var notEnoughColor = "#333";

//==========================================================
//Gain Profit
//==========================================================

// Add gold by clicking the asteroid
function collectGold() {
   addGold(gameData.clickinGold);
   gameData.clicks += 1;
}

// Spacebar gold
document.body.onkeyup = function(e){
   if(e.keyCode == 32){
      event.preventDefault();
      addGold(gameData.clickinGold);
   }
}

// Adds gold
function addGold(gold) {
   gameData.gold = gameData.gold + gold;
   gameData.totalGold = gameData.totalGold + gold;
}

//==========================================================
//Purchase Buildings
//==========================================================

function bTool() {
   if (gameData.gold >= gameData.bToolCost) {
      gameData.gold -= gameData.bToolCost;
      gameData.clickinGold += 1;
      gameData.bToolCost *= 2;
      gameData.toolLevel += 1;
   }
}

function buyPickaxe() {
   // If player has enough gold
   if (gameData.gold >= gameData.buyPickaxeCost) {
      // Substract the price from their gold
      gameData.gold -= gameData.buyPickaxeCost;
      // Add the amount of gold par pickaxe to the gold pickaxes are producing
      gameData.pickaxeGold += gameData.pickaxeProfit;
      // Multiply the cost by 1.15 and the amount of pciakxes
      gameData.buyPickaxeCost = (58 * Math.pow(1.15, gameData.pickaxeNumber)).toFixed(0);
      // Add one to the pickaxes owned
      gameData.pickaxeNumber += 1;
   }
}
function hireDwarf() {
   if(gameData.gold >= gameData.hireDwarfCost) {
      gameData.gold -= gameData.hireDwarfCost;
      gameData.dwarfGold += gameData.dwarfProfit;
      gameData.hireDwarfCost = (279 * Math.pow(1.15, gameData.dwarfNumber)).toFixed(0);
      gameData.dwarfNumber += 1;
   }
}
function hireGoose() {
   if(gameData.gold >= gameData.hireGooseCost) {
      gameData.gold -= gameData.hireGooseCost;
      gameData.gooseGold += gameData.gooseProfit;
      gameData.hireGooseCost = (10127 * Math.pow(1.15, gameData.gooseNumber)).toFixed(0);
      gameData.gooseNumber += 1;
   }
}
function openMine() {
   if(gameData.gold >= gameData.openMineCost) {
      gameData.gold -= gameData.openMineCost;
      gameData.mineGold += gameData.mineProfit;
      gameData.openMineCost = (28351 * Math.pow(1.15, gameData.mineNumber)).toFixed(0);
      gameData.mineNumber += 1;
   }
}
function hireDragon() {
   if(gameData.gold >= gameData.hireDragonCost) {
      gameData.gold -= gameData.hireDragonCost;
      gameData.dragonGold += gameData.dragonProfit;
      gameData.hireDragonCost = (201648 * Math.pow(1.15, gameData.dragonNumber)).toFixed(0);
      gameData.dragonNumber += 1;
   }
}
function buyStone() {
   if(gameData.gold >= gameData.buyStoneCost) {
      gameData.gold -= gameData.buyStoneCost;
      gameData.stoneGold += gameData.stoneProfit;
      gameData.buyStoneCost = (3752186 * Math.pow(1.15, gameData.stoneNumber)).toFixed(0);
      gameData.stoneNumber += 1;
   }
}
function openStation() {
   if(gameData.gold >= gameData.openStationCost) {
      gameData.gold -= gameData.openStationCost;
      gameData.stationGold += gameData.stationProfit;
      gameData.openStationCost = (250000000 * Math.pow(1.15, gameData.stationNumber)).toFixed(0);
      gameData.stationNumber += 1;
   }
}
function hireLeprechaun() {
   if(gameData.gold >= gameData.hireLeprechaunCost) {
      gameData.gold -= gameData.hireLeprechaunCost;
      gameData.leprechaunGold += gameData.lepProfit;
      gameData.hireLeprechaunCost = (1000000000 * Math.pow(1.15, gameData.leprechaunNumber)).toFixed(0);
      gameData.leprechaunNumber += 1;
   }
}
function hireSheep() {
   if(gameData.gold >= gameData.hireSheepCost) {
      gameData.gold -= gameData.hireSheepCost;
      gameData.sheepGold += gameData.sheepProfit;
      gameData.hireSheepCost = (250000000000 * Math.pow(1.15, gameData.sheepNumber)).toFixed(0);
      gameData.sheepNumber += 1;
   }
}
function buyRay() {
   if(gameData.gold >= gameData.buyRayCost) {
      gameData.gold -= gameData.buyRayCost;
      gameData.rayGold += gameData.rayProfit;
      gameData.buyRayCost = (2000000000000 * Math.pow(1.15, gameData.rayNumber)).toFixed(0);
      gameData.rayNumber += 1;
   }
}
function buyMerger() {
   if(gameData.gold >= gameData.buyMergerCost) {
      gameData.gold -= gameData.buyMergerCost;
      gameData.mergerGold += gameData.mergerProfit;
      gameData.buyMergerCost = (200000000000000 * Math.pow(1.15, gameData.mergerNumber)).toFixed(0);
      gameData.mergerNumber += 1;
   }
}

/*
// 1000 = 1 second | 60000 = 1 minute | 3600000 = 1 hour | 86500000 = 1 day
// Here is the code for summoning circles

circleData = {
   value: "assigned";
}

function upgradeCircle1() {
   if (gameData.otherstars >= circleData.lvl1Cost) {
      gameData.gold -= circleData.lvl1Cost;
      circleData.circleLevel += 1;
      circleData.circleTimeUnit = 86500000s; // 1 day
   }
}

function shortenCircleTime() {
   if (gameData.otherstars >= circleData.shortenTimeCost) {
      //circleData.circleTimeUnit -= (circleData.circleTimeUnit/20%); // 1 day
   }
}

function increaseCircleReward() {
   if (gameData.otherstars >= circleData.shortenTimeCost) {
      circleData.circleProfit += 1;
   }
}
*/

//==========================================================
//Upgrades
//==========================================================

// Checks wether to display upgrades
var checkForUpgrades = window.setInterval(function() {
   // If player has enough of a certiant item, and has not bough it before
   if (gameData.toolLevel >= 1 && upgradeData.a1 == 1) {
      // Display the upgrade for that amount
      document.getElementById("a1").style.display = "block";
   }
   if (gameData.toolLevel >= 5 && upgradeData.a2 == 1) {
      document.getElementById("a2").style.display = "block";
   }
   if (gameData.toolLevel >= 10 && upgradeData.a3 == 1) {
      document.getElementById("a3").style.display = "block";
   }
   if (gameData.toolLevel >= 15 && upgradeData.a4 == 1) {
      document.getElementById("a4").style.display = "block";
   }
   if (gameData.toolLevel >= 20 && upgradeData.a5 == 1) {
      document.getElementById("a5").style.display = "block";
   }
   if (gameData.toolLevel >= 25 && upgradeData.a6 == 1) {
      document.getElementById("a6").style.display = "block";
   }
   if (gameData.pickaxeNumber >= 1 && upgradeData.b1 == 1) {
      document.getElementById("b1").style.display = "block";
   }
   if (gameData.pickaxeNumber >= 5 && upgradeData.b2 == 1) {
      document.getElementById("b2").style.display = "block";
   }
   if (gameData.pickaxeNumber >= 10 && upgradeData.b3 == 1) {
      document.getElementById("b3").style.display = "block";
   }
   if (gameData.pickaxeNumber >= 15 && upgradeData.b4 == 1) {
      document.getElementById("b4").style.display = "block";
   }
   if (gameData.dwarfNumber >= 1 && upgradeData.c1 == 1) {
      document.getElementById("c1").style.display = "block";
   }
   if (gameData.dwarfNumber >= 5 && upgradeData.c2 == 1) {
      document.getElementById("c2").style.display = "block";
   }
   if (gameData.dwarfNumber >= 10 && upgradeData.c3 == 1) {
      document.getElementById("c3").style.display = "block";
   }
   if (gameData.dwarfNumber >= 15 && upgradeData.c4 == 1) {
      document.getElementById("c4").style.display = "block";
   }
   if (gameData.gooseNumber >= 1 && upgradeData.c01 == 1) {
      document.getElementById("c01").style.display = "block";
   }
   if (gameData.gooseNumber >= 5 && upgradeData.c02 == 1) {
      document.getElementById("c02").style.display = "block";
   }
   if (gameData.gooseNumber >= 10 && upgradeData.c03 == 1) {
      document.getElementById("c03").style.display = "block";
   }
   if (gameData.gooseNumber >= 15 && upgradeData.c04 == 1) {
      document.getElementById("c04").style.display = "block";
   }
   if (gameData.mineNumber >= 1 && upgradeData.d1 == 1) {
      document.getElementById("d1").style.display = "block";
   }
   if (gameData.mineNumber >= 5 && upgradeData.d2 == 1) {
      document.getElementById("d2").style.display = "block";
   }
   if (gameData.mineNumber >= 10 && upgradeData.d3 == 1) {
      document.getElementById("d3").style.display = "block";
   }
   if (gameData.mineNumber >= 15 && upgradeData.d4 == 1) {
      document.getElementById("d4").style.display = "block";
   }
   if (gameData.dragonNumber >= 1 && upgradeData.e1 == 1) {
      document.getElementById("e1").style.display = "block";
   }
   if (gameData.dragonNumber >= 5 && upgradeData.e2 == 1) {
      document.getElementById("e2").style.display = "block";
   }
   if (gameData.dragonNumber >= 10 && upgradeData.e3 == 1) {
      document.getElementById("e3").style.display = "block";
   }
   if (gameData.dragonNumber >= 15 && upgradeData.e4 == 1) {
      document.getElementById("e4").style.display = "block";
   }
   if (gameData.stoneNumber >= 1 && upgradeData.f1 == 1) {
      document.getElementById("f1").style.display = "block";
   }
   if (gameData.stoneNumber >= 5 && upgradeData.f2 == 1) {
      document.getElementById("f2").style.display = "block";
   }
   if (gameData.stoneNumber >= 10 && upgradeData.f3 == 1) {
      document.getElementById("f3").style.display = "block";
   }
 /* if (gameData.stoneNumber >= 15 && upgradeData.f4 == 1) {
      document.getElementById("f4").style.display = "block";
}*/
   if (gameData.stationNumber >= 1 && upgradeData.g1 == 1) {
      document.getElementById("g1").style.display = "block";
   }
   if (gameData.stationNumber >= 5 && upgradeData.g2 == 1) {
      document.getElementById("g2").style.display = "block";
   }
   if (gameData.stationNumber >= 10 && upgradeData.g3 == 1) {
      document.getElementById("g3").style.display = "block";
   }
   if (gameData.stationNumber >= 15 && upgradeData.g4 == 1) {
      document.getElementById("g4").style.display = "block";
   }
   if (gameData.leprechaunNumber >= 1 && upgradeData.h1 == 1) {
      document.getElementById("h1").style.display = "block";
   }
   if (gameData.leprechaunNumber >= 5 && upgradeData.h2 == 1) {
      document.getElementById("h2").style.display = "block";
   }
 /* if (gameData.leprechaunNumber >= 10 && upgradeData.h3 == 1) {
      document.getElementById("h3").style.display = "block";
   }
   if (gameData.leprechaunNumber >= 15 && upgradeData.h4 == 1) {
      document.getElementById("h4").style.display = "block";
}*/
   if (gameData.sheepNumber >= 1 && upgradeData.i1 == 1) {
      document.getElementById("i1").style.display = "block";
   }
   if (gameData.sheepNumber >= 5 && upgradeData.i2 == 1) {
      document.getElementById("i2").style.display = "block";
   }
   /*if (gameData.sheepNumber >= 10 && upgradeData.i3 == 1) {
      document.getElementById("i3").style.display = "block";
   }
   if (gameData.sheepNumber >= 15 && upgradeData.i4 == 1) {
      document.getElementById("i4").style.display = "block";
}*/
   if (gameData.rayNumber >= 1 && upgradeData.j1 == 1) {
      document.getElementById("j1").style.display = "block";
   }
   if (gameData.rayNumber >= 5 && upgradeData.j2 == 1) {
      document.getElementById("j2").style.display = "block";
   }
   if (gameData.rayNumber >= 10 && upgradeData.j3 == 1) {
      document.getElementById("j3").style.display = "block";
   }
 /* if (gameData.rayNumber >= 15 && upgradeData.j4 == 1) {
      document.getElementById("j4").style.display = "block";
}*/
   if (gameData.mergerNumber >= 1 && upgradeData.k1 == 1) {
      document.getElementById("k1").style.display = "block";
   }
   if (gameData.mergerNumber >= 5 && upgradeData.k2 == 1) {
      document.getElementById("k2").style.display = "block";
   }
   if (gameData.mergerNumber >= 10 && upgradeData.k3 == 1) {
      document.getElementById("k3").style.display = "block";
   }
   /*if (gameData.mergerNumber >= 15 && upgradeData.k4 == 1) {
      document.getElementById("k4").style.display = "block";
}*/
   if (gameData.mergerNumber >= 15 && gameData.rayNumber >= 15 && gameData.sheepNumber >= 15 && gameData.leprechaunNumber >= 15 && gameData.stationNumber >= 15 && gameData.stoneNumber >= 15 && gameData.dragonNumber >= 15 && gameData.mineNumber >= 15 && gameData.gooseNumber >= 15 && gameData.dwarfNumber >= 15 && gameData.pickaxeNumber >= 15) {
      document.getElementById("otherworldPortal").style.display = "block";
   }
}, 3000)

function a1() {
   // If player has enough gold
   if (gameData.gold >= upgradeData.a1Price) {
      // Substract the upgrade price
      gameData.gold -= upgradeData.a1Price;
      // Double the clicking reward
      gameData.clickinGold *= 2;
      // Do not appear again
      upgradeData.a1 = 2;
      // Remove display
      document.getElementById("a1").style.display = "none";
   }
}
function a2() {
   if (gameData.gold >= upgradeData.a2Price) {
      gameData.gold -= upgradeData.a2Price;
      gameData.clickinGold *= 2;
      upgradeData.a2 = 2;
      document.getElementById("a2").style.display = "none";
   }
}
function a3() {
   if (gameData.gold >= upgradeData.a3Price) {
      gameData.gold -= upgradeData.a3Price
      gameData.clickinGold *= gameData.pickaxeNumber
      upgradeData.a3 = 2
      document.getElementById("a3").style.display = "none";
   }
}
function a4() {
   if (gameData.gold >= upgradeData.a4Price) {
      gameData.gold -= upgradeData.a4Price
      gameData.clickinGold *= gameData.pickaxeNumber
      upgradeData.a4 = 2
      document.getElementById("a4").style.display = "none";
   }
}
function a5() {
   if (gameData.gold >= upgradeData.a5Price) {
      gameData.gold -= upgradeData.a5Price
      gameData.clickinGold *= gameData.pickaxeNumber
      upgradeData.a5 = 2
      document.getElementById("a5").style.display = "none";
   }
}
function a6() {
   if (gameData.gold >= upgradeData.a6Price) {
      gameData.gold -= upgradeData.a6Price
      gameData.clickinGold *= gameData.pickaxeNumber
      upgradeData.a6 = 2
      document.getElementById("a6").style.display = "none";
   }
}

function b1() {
   if (gameData.gold >= upgradeData.b1Price) {
      gameData.gold -= upgradeData.b1Price;
      gameData.pickaxeProfit *= 2;
      gameData.pickaxeGold *= 2;
      upgradeData.b1 = 2;
      document.getElementById("b1").style.display = "none";
   }
}
function b2() {
   if (gameData.gold >= upgradeData.b2Price) {
      gameData.gold -= upgradeData.b2Price;
      gameData.pickaxeProfit *= 2;
      gameData.pickaxeGold *= 2;
      upgradeData.b2 = 2;
      document.getElementById("b2").style.display = "none";
   }
}
function b3() {
   if (gameData.gold >= upgradeData.b3Price) {
      gameData.gold -= upgradeData.b3Price;
      gameData.pickaxeProfit *= 2;
      gameData.pickaxeGold *= 2;
      upgradeData.b3 = 2;
      document.getElementById("b3").style.display = "none";
   }
}
function b4() {
   if (gameData.gold >= upgradeData.b4Price) {
      gameData.gold -= upgradeData.b4Price;
      gameData.pickaxeProfit *= 2;
      gameData.pickaxeGold *= 2;
      upgradeData.b4 = 2;
      document.getElementById("b4").style.display = "none";
   }
}

function c1() {
   if (gameData.gold >= upgradeData.c1Price) {
      gameData.gold -= upgradeData.c1Price;
      gameData.dwarfProfit *= 2;
      gameData.dwarfGold *= 2;
      upgradeData.c1 = 2;
      document.getElementById("c1").style.display = "none";
   }
}
function c2() {
   if (gameData.gold >= upgradeData.c2Price) {
      gameData.gold -= upgradeData.c2Price;
      gameData.dwarfProfit *= 2;
      gameData.dwarfGold *= 2;
      upgradeData.c2 = 2;
      document.getElementById("c2").style.display = "none";
   }
}
function c3() {
   if (gameData.gold >= upgradeData.c3Price) {
      gameData.gold -= upgradeData.c3Price;
      gameData.dwarfProfit *= 2;
      gameData.dwarfGold *= 2;
      upgradeData.c3 = 2;
      document.getElementById("c3").style.display = "none";
   }
}
function c4() {
   if (gameData.gold >= upgradeData.c4Price) {
      gameData.gold -= upgradeData.c4Price;
      gameData.dwarfProfit *= 2;
      gameData.dwarfGold *= 2;
      upgradeData.c4 = 2;
      document.getElementById("c4").style.display = "none";
   }
}

function c01() {
   if (gameData.gold >= upgradeData.c01Price) {
      gameData.gold -= upgradeData.c01Price;
      gameData.gooseProfit *= 2;
      gameData.gooseGold *= 2;
      upgradeData.c01 = 2;
      document.getElementById("c01").style.display = "none";
   }
}
function c02() {
   if (gameData.gold >= upgradeData.c02Price) {
      gameData.gold -= upgradeData.c02Price;
      gameData.gooseProfit *= 2;
      gameData.gooseGold *= 2;
      upgradeData.c02 = 2;
      document.getElementById("c02").style.display = "none";
   }
}
function c03() {
   if (gameData.gold >= upgradeData.c03Price) {
      gameData.gold -= upgradeData.c03Price;
      gameData.gooseProfit *= 2;
      gameData.gooseGold *= 2;
      upgradeData.c03 = 2;
      document.getElementById("c03").style.display = "none";
   }
}
function c04() {
   if (gameData.gold >= upgradeData.c04Price) {
      gameData.gold -= upgradeData.c04Price;
      gameData.gooseProfit *= 2;
      gameData.gooseGold *= 2;
      upgradeData.c04 = 2;
      document.getElementById("c04").style.display = "none";
   }
}

function d1() {
   if (gameData.gold >= upgradeData.d1Price) {
      gameData.gold -= upgradeData.d1Price;
      gameData.mineProfit *= 2;
      gameData.mineGold *= 2;
      upgradeData.d1 = 2;
      document.getElementById("d1").style.display = "none";
   }
}
function d2() {
   if (gameData.gold >= upgradeData.d2Price) {
      gameData.gold -= upgradeData.d2Price;
      gameData.mineProfit *= 2;
      gameData.mineGold *= 2;
      upgradeData.d2 = 2;
      document.getElementById("d2").style.display = "none";
   }
}
function d3() {
   if (gameData.gold >= upgradeData.d3Price) {
      gameData.gold -= upgradeData.d3Price;
      gameData.mineProfit *= 2;
      gameData.mineGold *= 2;
      upgradeData.d3 = 2;
      document.getElementById("d3").style.display = "none";
   }
}
function d4() {
   if (gameData.gold >= upgradeData.d4Price) {
      gameData.gold -= upgradeData.d4Price;
      gameData.mineProfit *= 2;
      gameData.mineGold *= 2;
      upgradeData.d4 = 2;
      document.getElementById("d4").style.display = "none";
   }
}

function e1() {
   if (gameData.gold >= upgradeData.e1Price) {
      gameData.gold -= upgradeData.e1Price;
      gameData.dragonProfit *= 2;
      gameData.dragonGold *= 2;
      upgradeData.e1 = 2;
      document.getElementById("e1").style.display = "none";
   }
}
function e2() {
   if (gameData.gold >= upgradeData.e2Price) {
      gameData.gold -= upgradeData.e2Price;
      gameData.dragonProfit *= 2;
      gameData.dragonGold *= 2;
      upgradeData.e2 = 2;
      document.getElementById("e2").style.display = "none";
   }
}
function e3() {
   if (gameData.gold >= upgradeData.e3Price) {
      gameData.gold -= upgradeData.e3Price;
      gameData.dragonProfit *= 2;
      gameData.dragonGold *= 2;
      upgradeData.e3 = 2;
      document.getElementById("e3").style.display = "none";
   }
}
function e4() {
   if (gameData.gold >= upgradeData.e4Price) {
      gameData.gold -= upgradeData.e4Price;
      gameData.dragonProfit *= 2;
      gameData.dragonGold *= 2;
      upgradeData.e4 = 2;
      document.getElementById("e4").style.display = "none";
   }
}

function f1() {
   if (gameData.gold >= upgradeData.f1Price) {
      gameData.gold -= upgradeData.f1Price;
      gameData.stoneProfit *= 2;
      gameData.stoneGold *= 2;
      upgradeData.f1 = 2;
      document.getElementById("f1").style.display = "none";
   }
}
function f2() {
   if (gameData.gold >= upgradeData.f2Price) {
      gameData.gold -= upgradeData.f2Price;
      gameData.stoneProfit *= 2;
      gameData.stoneGold *= 2;
      upgradeData.f2 = 2;
      document.getElementById("f2").style.display = "none";
   }
}
function f3() {
   if (gameData.gold >= upgradeData.f3Price) {
      gameData.gold -= upgradeData.f3Price;
      gameData.stoneProfit *= 2;
      gameData.stoneGold *= 2;
      upgradeData.f3 = 2;
      document.getElementById("f3").style.display = "none";
   }
}
function f4() {
   if (gameData.gold >= upgradeData.f4Price) {
      gameData.gold -= upgradeData.f4Price;
      gameData.stoneProfit *= 2;
      gameData.stoneGold *= 2;
      upgradeData.f4 = 2;
      document.getElementById("f4").style.display = "none";
   }
}

function g1() {
   if (gameData.gold >= upgradeData.g1Price) {
      gameData.gold -= upgradeData.g1Price;
      gameData.stationProfit *= 2;
      gameData.stationGold *= 2;
      upgradeData.g1 = 2;
      document.getElementById("g1").style.display = "none";
   }
}
function g2() {
   if (gameData.gold >= upgradeData.g2Price) {
      gameData.gold -= upgradeData.g2Price;
      gameData.stationProfit *= 2;
      gameData.stationGold *= 2;
      upgradeData.g2 = 2;
      document.getElementById("g2").style.display = "none";
   }
}
function g3() {
   if (gameData.gold >= upgradeData.g3Price) {
      gameData.gold -= upgradeData.g3Price;
      gameData.stationProfit *= 2;
      gameData.stationGold *= 2;
      upgradeData.g3 = 2;
      document.getElementById("g3").style.display = "none";
   }
}
function g4() {
   if (gameData.gold >= upgradeData.g4Price) {
      gameData.gold -= upgradeData.g4Price;
      gameData.stationProfit *= 2;
      gameData.stationGold *= 2;
      upgradeData.g4 = 2;
      document.getElementById("g4").style.display = "none";
   }
}

function h1() {
   if (gameData.gold >= upgradeData.h1Price) {
      gameData.gold -= upgradeData.h1Price;
      gameData.lepProfit *= 2;
      gameData.leprechaunGold *= 2;
      upgradeData.h1 = 2;
      document.getElementById("h1").style.display = "none";
   }
}
function h2() {
   if (gameData.gold >= upgradeData.h2Price) {
      gameData.gold -= upgradeData.h2Price;
      gameData.lepProfit *= 2;
      gameData.leprechaunGold *= 2;
      upgradeData.h2 = 2;
      document.getElementById("h2").style.display = "none";
   }
}
function h3() {
   if (upgradeData.gold >= upgradeData.h3Price) {
      gameData.gold -= upgradeData.h3Price;
      gameData.lepProfit *= 2;
      gameData.leprechaunGold *= 2;
      upgradeData.h3 = 2;
      document.getElementById("h3").style.display = "none";
   }
}
function h4() {
   if (gameData.gold >= upgradeData.h4Price) {
      gameData.gold -= upgradeData.h4Price;
      gameData.lepProfit *= 2;
      gameData.leprechaunGold *= 2;
      upgradeData.h4 = 2;
      document.getElementById("h4").style.display = "none";
   }
}

function i1() {
   if (gameData.gold >= upgradeData.i1Price) {
      gameData.gold -= upgradeData.i1Price;
      gameData.sheepProfit *= 2;
      gameData.sheepGold *= 2;
      upgradeData.i1 = 2;
      document.getElementById("i1").style.display = "none";
   }
}
function i2() {
   if (gameData.gold >= upgradeData.i2Price) {
      gameData.gold -= upgradeData.i2Price;
      gameData.sheepProfit *= 2;
      gameData.sheepGold *= 2;
      upgradeData.i2 = 2;
      document.getElementById("i2").style.display = "none";
   }
}
function i3() {
   if (gameData.gold >= upgradeData.i3Price) {
      gameData.gold -= upgradeData.i3Price;
      gameData.sheepProfit *= 2;
      gameData.sheepGold *= 2;
      upgradeData.i3 = 2;
      document.getElementById("i3").style.display = "none";
   }
}
function i4() {
   if (gameData.gold >= upgradeData.i4Price) {
      gameData.gold -= upgradeData.i4Price;
      gameData.sheepProfit *= 2;
      gameData.sheepGold *= 2;
      upgradeData.i4 = 2;
      document.getElementById("i4").style.display = "none";
   }
}

function j1() {
   if (gameData.gold >= upgradeData.j1Price) {
      gameData.gold -= upgradeData.j1Price;
      gameData.rayProfit *= 2;
      gameData.rayGold *= 2;
      upgradeData.j1 = 2;
      document.getElementById("j1").style.display = "none";
   }
}
function j2() {
   if (gameData.gold >= upgradeData.j2Price) {
      gameData.gold -= upgradeData.j2Price;
      gameData.rayProfit *= 2;
      gameData.rayGold *= 2;
      upgradeData.j2 = 2;
      document.getElementById("j2").style.display = "none";
   }
}
function j3() {
   if (gameData.gold >= upgradeData.j3Price) {
      gameData.gold -= upgradeData.j3Price;
      gameData.rayProfit *= 2;
      gameData.rayGold *= 2;
      upgradeData.j3 = 2;
      document.getElementById("j3").style.display = "none";
   }
}
function j4() {
   if (gameData.gold >= upgradeData.j4Price) {
      gameData.gold -= upgradeData.j4Price;
      gameData.rayProfit *= 2;
      gameData.rayGold *= 2;
      upgradeData.j4 = 2;
      document.getElementById("j4").style.display = "none";
   }
}

function k1() {
   if (gameData.gold >= upgradeData.k1Price) {
      gameData.gold -= upgradeData.k1Price
      gameData.mergerProfit *= 2;
      gameData.mergerGold *= 2;
      upgradeData.k1 = 2;
      document.getElementById("k1").style.display = "none";
   }
}
function k2() {
   if (gameData.gold >= upgradeData.k2Price) {
      gameData.gold -= upgradeData.k2Price;
      gameData.mergerProfit *= 2;
      gameData.mergerGold *= 2;
      upgradeData.k2 = 2;
      document.getElementById("k2").style.display = "none";
   }
}
function k3() {
   if (gameData.gold >= upgradeData.k3Price) {
      gameData.gold -= upgradeData.k3Price;
      gameData.mergerProfit *= 2;
      gameData.mergerGold *= 2;
      upgradeData.k3 = 2;
      document.getElementById("k3").style.display = "none";
   }
}
function k4() {
   if (gameData.gold >= upgradeData.k4Price) {
      gameData.gold -= upgradeData.k4Price;
      gameData.mergerProfit *= 2;
      gameData.mergerGold *= 2;
      upgradeData.k4 = 2;
      document.getElementById("k4").style.display = "none";
   }
}

function otherworldPortal() {
   if (gameData.gold >= gameData.otherworldPortalActivationCost) {
      gameData.gold -= gameData.otherworldPortalActivationCost;
      window.open("https://squirrel-314.github.io/Otherworld/otherworld.html#");
   }
}

// This resets the values displayed in the shop
// Trouble with both sections not working simoulatiously
var updateStore = window.setInterval(function() {
   //Gold per Building
   document.getElementById("pickaxe-info").innerHTML = "Pickaxe <br> " + gameData.pickaxeProfit + " GPS <br> Producing " + gameData.pickaxeGold + " GPS<br>A sturdy pickaxe to mine gold with";
   document.getElementById("dwarf-info").innerHTML = "Dwarf  <br> " + gameData.dwarfProfit + " GPS each<br> Producing " + gameData.dwarfGold + " GPS<br>An assistant to help you mine gold";
   document.getElementById("goose-info").innerHTML = "Geese <br> " + gameData.gooseProfit + " GPS each<br> Producing " + gameData.gooseGold + " GPS<br>A nice goose that lays golden egg";
   document.getElementById("mine-info").innerHTML = "Gold Mine <br> " + gameData.mineProfit + " GPS each<br> Producing " + gameData.mineGold + " GPS<br>A new mine to mine gold in";
   document.getElementById("dragon-info").innerHTML = "Dragon <br> " + gameData.dragonProfit + " GPS each<br> Producing " + gameData.dragonGold + " GPS<br>A nice dragon to steal gold and hoard it";
   document.getElementById("stone-info").innerHTML = "Philosopher's Stone <br> " + gameData.stoneProfit + " GPS each<br> Producing " + gameData.stoneGold + " GPS<br>An alchemy stone that turns ordinary rocks into gold";
   document.getElementById("station-info").innerHTML = "Astroid-mining Station <br> " + gameData.stationProfit + " GPS each<br> Producing " + gameData.stationGold + " GPS<br>A space station that mines astroids for gold";
   document.getElementById("leprechaun-info").innerHTML = "Leprechaun <br> " + gameData.lepProfit + " GPS each<br> Producing " + gameData.leprechaunGold + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows";
   document.getElementById("sheep-info").innerHTML = "Golden Sheep <br> " + gameData.sheepProfit + " GPS each<br> Producing " + gameData.sheepGold + " GPS<br>A cute round fluffy sheep with a golden fleece";
   document.getElementById("ray-info").innerHTML = "Mass Ray <br> " + gameData.rayProfit + " GPS each<br> Producing " + gameData.rayGold + " GPS<br>Turns mass into gold";
   document.getElementById("merger-info").innerHTML = "Neutron Star Merger<br> " + gameData.mergerProfit + " GPS each<br> Producing " + gameData.mergerGold + " GPS<br>Merges neutron stars to create gold (find what you want at it's source ;).";

   //Building Count
   document.getElementById("bTool").innerHTML = "Better Tools<br> Tool Level " + gameData.toolLevel + "<br> Cost: " + gameData.bToolCost + " Gold";
   document.getElementById("pickaxe-display").innerHTML = "Pickaxe<br> (You have " + gameData.pickaxeNumber + ") <br>Cost: " + gameData.buyPickaxeCost + " Gold";
   document.getElementById("dwarf-display").innerHTML = "Dwarf<br> (You have " + gameData.dwarfNumber + ") <br>Cost: " + gameData.hireDwarfCost + " Gold";
   document.getElementById("goose-display").innerHTML = "Geese<br> (You have " + gameData.gooseNumber + ") <br>Cost: " + gameData.hireGooseCost + " Gold";
   document.getElementById("mine-display").innerHTML = "Gold Mine<br> (You have " + gameData.mineNumber + ") <br>Cost: " + gameData.openMineCost + " Gold";
   document.getElementById("dragon-display").innerHTML = "Dragon<br> (You have " + gameData.dragonNumber + ") <br>Cost: " + gameData.hireDragonCost + " Gold";
   document.getElementById("stone-display").innerHTML = "Philosopher's Stone<br> (You have " + gameData.stoneNumber + ") <br>Cost: " + gameData.buyStoneCost + " Gold";
   document.getElementById("station-display").innerHTML = "Astroid-mining Station<br> (You have " + gameData.stationNumber + ") <br>Cost: " + gameData.openStationCost + " Gold";
   document.getElementById("leprechaun-display").innerHTML = "Leprechaun<br> (You have " + gameData.leprechaunNumber + ") <br>Cost: " + gameData.hireLeprechaunCost + " Gold";
   document.getElementById("sheep-display").innerHTML = "Golden Sheep<br> (You have " + gameData.sheepNumber + ") <br>Cost: " + gameData.hireSheepCost + " Gold";
   document.getElementById("ray-display").innerHTML = "Mass Ray<br> (You have " + gameData.rayNumber + ") <br>Cost: " + gameData.buyRayCost + " Gold";
   document.getElementById("merger-display").innerHTML = "Neutron Star Merger<br> (You have " + gameData.mergerNumber + ") <br>Cost: " + gameData.buyMergerCost + " Gold";
}, 500)

//==========================================================
//Main Game Loop
//==========================================================

// Runs every second
var mainGameLoop = window.setInterval(function() {
   // This code collets gold in player absence
   diff = Date.now() - gameData.lastTick;
   gameData.lastTick = Date.now();
   addGold(goldPerSecond() * (diff / 1000));

   // Display gold per second & gold per click
   document.getElementById("gold-profits").innerHTML = goldPerSecond() + " Gold per Second<br>" + gameData.clickinGold + " Gold per Second<br>";
   // Display gold per minuite, hour, day, month, and year
   document.getElementById("gpm").innerHTML = goldPerSecond() * 60 + " Gold Per Minute";
   document.getElementById("g0pher").innerHTML = goldPerSecond() * 60 * 60 + " Gold Per Hour";
   document.getElementById("gpd").innerHTML = goldPerSecond() * 60 * 60 * 24 + " Gold Per Day";
   document.getElementById("gpw").innerHTML = goldPerSecond() * 60 * 60 * 24 * 7 + " Gold Per Week";
   document.getElementById("gpM").innerHTML = goldPerSecond() * 60 * 60 * 24 * 7 * 4 + " Gold Per Month";
   document.getElementById("gpy").innerHTML = goldPerSecond() * 60 * 60 * 24 * 7 * 4 * 12 + " Gold Per Year";
   // Issue with total gold, does not count gold gathered in absence
   document.getElementById("totalGold").innerHTML = (gameData.totalGold).toFixed(0) + " Lifetime Gold Profits";
}, 1000)

// Displays buildings if gold is at a certiant amount, and in a diffrent color if affordable
var buildColorLoop = window.setInterval(function() {
   // If you have half the gold to buy the item
   if (gameData.gold >= (gameData.bToolCost / 2) || gameData.toolLevel >= 1) {
      // Make it visible
      document.getElementById("bTool").style.display = "flex";
   }
   // If you have enough gold to buy the item
   if (gameData.gold >= gameData.bToolCost) {
      // Make the color the avalible color
      document.getElementById("bTool").style.backgroundColor = regColor;
   }
   // If not
   else {
      // Make it the unavalible color
      document.getElementById("bTool").style.backgroundColor = notEnoughColor;
   }
   // These repeat the same proccess
   if (gameData.gold >= (gameData.buyPickaxeCost / 2) || gameData.pickaxeNumber >= 1) {
      document.getElementById("buyPickaxe").style.display = "flex";
   }
   if (gameData.gold >= gameData.buyPickaxeCost) {
      document.getElementById("buyPickaxe").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("buyPickaxe").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.hireDwarfCost / 2) || gameData.dwarfNumber >= 1) {
      document.getElementById("hireDwarf").style.display = "flex";
   }
   if (gameData.gold >= gameData.hireDwarfCost) {
      document.getElementById("hireDwarf").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("hireDwarf").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.hireGooseCost / 2) || gameData.gooseNumber >= 1) {
      document.getElementById("hireGoose").style.display = "flex";
   }
   if (gameData.gold >= gameData.hireGooseCost) {
      document.getElementById("hireGoose").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("hireGoose").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.openMineCost / 2) || gameData.mineNumber >= 1) {
      document.getElementById("openMine").style.display = "flex";
   }
   if (gameData.gold >= gameData.openMineCost) {
      document.getElementById("openMine").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("openMine").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.hireDragonCost / 2) || gameData.dragonNumber >= 1) {
      document.getElementById("hireDragon").style.display = "flex";
   }
   if (gameData.gold >= gameData.hireDragonCost) {
      document.getElementById("hireDragon").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("hireDragon").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.buyStoneCost / 2) || gameData.stoneNumber >= 1) {
      document.getElementById("buyStone").style.display = "flex";
   }
   if (gameData.gold >= gameData.buyStoneCost) {
      document.getElementById("buyStone").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("buyStone").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.openStationCost / 2) || gameData.stationNumber >= 1) {
      document.getElementById("openStation").style.display = "flex";
   }
   if (gameData.gold >= gameData.openStationCost) {
      document.getElementById("openStation").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("openStation").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.hireLeprechaunCost / 2) || gameData.leprechaunNumber >= 1) {
      document.getElementById("hireLeprechaun").style.display = "flex";
   }
   if (gameData.gold >= gameData.hireLeprechaunCost) {
      document.getElementById("hireLeprechaun").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("hireLeprechaun").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.hireSheepCost / 2) || gameData.sheepNumber >= 1) {
      document.getElementById("hireSheep").style.display = "flex";
   }
   if (gameData.gold >= gameData.hireSheepCost) {
      document.getElementById("hireSheep").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("hireSheep").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.buyRayCost / 2) || gameData.rayNumber >= 1) {
      document.getElementById("buyRay").style.display = "flex";
   }
   if (gameData.gold >= gameData.buyRayCost) {
      document.getElementById("buyRay").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("buyRay").style.backgroundColor = notEnoughColor;
   }
   if (gameData.gold >= (gameData.buyMergerCost / 2) || gameData.mergerNumber >= 1) {
      document.getElementById("buyMerger").style.display = "flex";
   }
   if (gameData.gold >= gameData.buyMergerCost) {
      document.getElementById("buyMerger").style.backgroundColor = regColor;
   }
   else {
      document.getElementById("buyMerger").style.backgroundColor = notEnoughColor;
   }
   if (gameData.mergerNumber <= 0) {
      document.getElementById("waiting").innerHTML = "<img id=\"wait-gif\" src=\"Images/wait.gif\">";
   }
}, 500)

// Set game data to local Storage
var saveGameLoop = window.setInterval(function() {
   localStorage.setItem("gameDataSave", JSON.stringify(gameData));
   localStorage.setItem("upgradeDataSave", JSON.stringify(upgradeData));
}, 10000)

// Retrive game data as savegame
var savegame = {
   gameData: JSON.parse(localStorage.getItem("gameDataSave")),
   upgradeData: JSON.parse(localStorage.getItem("upgradeDataSave")),
}

gameData = savegame.gameData;
upgradeData = savegame.upgradeData;

// If the savegame is empty set game data as savegame
if (savegame !== null) {
   savegame.gameData = gameData;
   savegame.upgradeData = upgradeData;
}

// Prevents decimals in gold
var setThingsRight = window.setInterval(function() {
   document.title = (gameData.gold).toFixed(0) + " Gold | Gold Rush";
   document.getElementById("gold-owned").innerHTML = (gameData.gold).toFixed(0) + " Gold <img src=\"Images/retro-coin.gif\" alt=\"Gold!\" class=\"retro-coin\">";
}, 20)

//==========================================================
//Settings
//==========================================================

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
         upgradeData =  initialGameData;
         // Set save as blank
         localStorage.setItem("gameDataSave", JSON.stringify(gameData));
         localStorage.setItem("upgradeDataSave", JSON.stringify(upgradeData));
         // Reload page
         document.location.href = ("");
      }
   }
}

// Set game data to local Storage
function save() {
   localStorage.setItem("gameDataSave", JSON.stringify(gameData));
   localStorage.setItem("upgradeDataSave", JSON.stringify(upgradeData));
}

function dark() {
   // This changes the default colors for avalible and unavalible buildings
   regColor = "#454545";
   notEnoughColor = "#000";

   // Class styling, I do not understand how this works
   var storeItem = document.getElementsByClassName('store-item');
   for (var i = 0; i < storeItem.length; i++) {
      storeItem[i].style.color = '#fff';
      storeItem[i].style.fontFamily = 'times';
      storeItem[i].style.border = 'outset 5px lightblue';
   }
   var up = document.getElementsByClassName('UP');
   for (var i = 0; i < up.length; i++) {
      up[i].style.color = '#000';
      up[i].style.backgroundColor = '#b3d0de';
   }
   var details = document.getElementsByTagName('details');
   for (var i = 0; i < details.length; i++) {
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

// Set var myAudio to audio file
var myAudio = document.getElementById("myAudio");

function music() {
   // If audio is paused run, if it is playing, pause
   return myAudio.paused ? myAudio.play() : myAudio.pause();
};

//==========================================================
//News
//==========================================================

// This is all of the news
var allNews = [
   'You go mining sometimes',
   'You like the shiny twinkle of gold',
   'When you feel sad, you look at your hoard of gold. ',
   'You dream of golden sheep in a golden meadow eating golden grass.',
   'You dream of golden dragons flying high through golden clouds in a golden sky with the golden setting sun.',
   //'News: ',
   //'News: ',
   //'News: ',
]
var pickaxeNews = [
   'News: New type of pickaxe coming out, looks suspiciously like normal iron.',
   'News: Purchases of pickaxes on the rise for both practical and decorative purposes.',
   'News: Little plastic keychain pickaxes selling like crazy, tourist shops wildly confused "Who wants that type of junk?"',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var dwarfNews = [
   'News: Dwarfs stop human miners from going to work, "They only get in the way."',
   'News: Reports of "Little people weilding pickaxes" increasing daily',
   'News: Human miners losing their jobs as dwarfs overtake the mining industry, "not necessarily a bad thing" says retired miner',
   'News: Scientist fear dwarfs will "take complete controll of the universe", robots disappointed.',
   'News: Dwarfs rights movment spreading across the globe, dwarfs demand equality and voting rights.',
   'News: Gold mine collapses, dwarfs demand safer workplaces.',
   'News: Hoards of angry dwarfs fill the streets worldwide during dwarf rights protests, "it\'s suprising how threatening a mob of tiny people can be" admits journalist',
   'News: Peaceful dwarf protests recived with violent reprisal!',
]
var gooseNews = [
   'News: Scientist finally get the government to allow for the genetic modification of geese to make them lay golden eggs, public enraged.',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var mineNews = [
   'News: Mines opening everywhere, environmentalists worried.',
   'News: Coal and diamond mines going out of business as gold mines reign supreme. "I mean, gold is shiny, what\'s so special about coal?"',
   'News: "Maybe we should stop drilling holes in the earth." says random man.',
   'News: Mines inhabited by creatures from the dawn of time, all journalists investingating mysteriously vanished.',
   'News: As the gold industry gradualy gains control of the government, new laws are passed in the favor of mining.',
   //'News: ',
   //'News: ',
   //'News: ',
]
var dragonNews = [
   'News: Dragon eats poodle, owner furious: "The monster! I\'ll have his skin for my handbag!"',
   'News: Gold dragons cause havoc worldwide as they search for gold-hoarding locations.',
   'News: Scientist warn people to stay indoors during dragon breeding season."It\'s for your own overall health."',
   'News: Global dragon-disease pandemic continuing unhindered, doctors searching for cure.',
   'New: Dragon babysitters needed becase all parents busy hoarding gold.',
   'News: Sales of dragon scale jackets skyrocketing, encouraging dragon products market.',
   'News: Grass-fed dragon milk, new lactose-free substitute to cow milk.',
   'News: Nations in fear as dragons soar above, athorities advise to "Carry umbrellas everywhere, it could save your life!"',
]
var stoneNews = [
   'News: Geologist strongly against turning rocks into gold; "You shall not steal our invaluable specimens!"',
   'News: Throught an aminzing feat of alchemy, Mt. Everest is turned into gold. Localist extreamly bothered: "Do you know how hard it is to live with a hunk of gold shimmering in your face CONSTANTLY?"',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var stationNews = [
   'News: Major astroid mining station slams into Earth! Impacted country enraged!',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var lepNews = [
   'News: Leprechaun becomes politician, world leaders upset.',
   'News: Rainbows occuring more and more often, leprechaun suspected.',
   'News: Three leaved clovers become rare due to the large amount of four leaved clovers.',
   'News: "Don\'t trust the gold at the end of them leprechaun rainbows" says scientist, "Who knows what nasty tricks they have up there sleaves!" "Ehm ehm" says leprechaun with camera.',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var sheepNews = [
   'News: New golden sheep breeds coming out, including golden-merino, golden-lincon and golden-corriedale.',
   'News: Market sees a dramatic upturn in the sales of golden fleece jackets.',
   'News: Pet golden sheeps becoming more popular, causing the intorduction of pigmy golden sheeps, adorable little fluffy golden sheeps small enough to fit in your palm.',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var rayNews = [
   'News: Warning: do not stand in front of mass ray... actually, on second thought, do. (hehe, more gold)',
   'News: Mass rays wreak havoc, turning multiple minor plantets into soild gold.',
   'News: Illegal criminals illegally use mass rays to turn politicians into gold. "I know it\'s illegal, but I hope they keep doing it. Wait... are you a reporter?!"',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var mergerNews = [
   'News: Scientist figure out a way to make gold by merging neutron stars, "Eureka! Wait a moment- I think this time we actually went to far..."',
   'News: "Why, may I ask, are we MERGING NEUTRON STARS just to make gold!?! Please explain your reasoning." random man rants. ',
   'News: Scientist explains how neutron star mergers work to ' + gameData.playerName + '\'s company top members, and gets the response: "So, it makes gold? Good enough." Scientist sighs.',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var richNews = [
   'News: Ordinary household items more commonly made of gold to deal with gold surplus.',
   'News: Random woman asks: "What are we going to do with all this gold?", everyone ignores her.',
   'News: Gold Storehouses overflowing, young employ suggest storehouses made of gold.',
   'News: Personal golden planets becoming fashinble, causing imennse golden solar systems.',
   'News: New podcast about ' + gameData.playerName + '\'s amazing rise to success coming out! Don\'t miss it!',
   'News: Studies show that ' + gameData.playerName + ' has made a total ' + gameData.totalGold + ' Gold. "That\'s a lot of shiny" says researcher',
   'News: Gold\'s economic worth dramatically reduced, stock market looking for subsitude.',
   //'News: ',
]
var otherNews = [
   'News: Rumered discoveries of Otherworld portals disrupting world peace.',
   'News: Lost children suspected to have stumbled throught Otherworld portals.',
   'News: Freak weather causing havoc and destruction, traced to Otherworld portals.',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]
var summoningNews = [
   'News: Summoing circles rising in popularity, allowing for personal summoning circle fad.'
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
   //'News: ',
]

// Decides which news to display
var news = window.setInterval(function (){
   // Set var that contains all displayale news to default
   var trueNews = allNews;
   // If the player has 1 of a certiant building
   if (gameData.pickaxeNumber >= 1) {
      // Add the news for that building  tothe displayable news
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
//Onload
//==========================================================

// This all runs the moment the page is loaded
function gameLayout() {
   // Set player name
   document.getElementById("playerName").innerHTML = gameData.playerName + "'s Mine";
   // If no player name
   if (gameData.playerName == null) {
      // Run game setup
      gameSetup();
   }

   // Get date and set it as copyright time
   var today = new Date();
   var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
   document.getElementById("copE-right").innerHTML = date;
}

window.onload = gameLayout;

//==========================================================
//Welcome Instructions
//==========================================================

function gameSetup() {
   // Tell them the basics
   alert("This is an incremental game. To earn gold, click on the asteroid or the space bar, and when you get enough, invest it in gold producing items. Enjoy the game.");
   // Ask for their name
   gameData.playerName = prompt("What is your name?(don't use your real name)");
   // Display name
   document.getElementById("playerName").innerHTML = gameData.playerName + "'s Mine";
}

//==========================================================
//Console
//==========================================================

// Make them feel uneasy
console.log("Look behind you.")

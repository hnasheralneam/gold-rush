//==========================================================
//Copyright and Opening Information
//==========================================================

//Copyright meeeeee 2020 A.D.
// If you continue you shall get the majority of the game spoiled for you. Also, it's a bit messy

//==========================================================
//Game Data
//==========================================================

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

//Upgrades
  a1: 1,
  a1Price: 200,
  a2: 1,
  a2Price: 500,
  a3: 1,
  a3Price: 2000,
  a4: 1,
  a4Price: 8000,
  a5: 1,
  a5Price: 30000,
  a6: 1,
  a6Price: 80000,
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
  c03Price: 100000,
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

  //Player Name

  playerName: 3,

//Time
  lastTick: Date.now(),
}

function goldPerSecond() {
  return gameData.pickaxeGold + gameData.dwarfGold + gameData.gooseGold + gameData.mineGold + gameData.dragonGold + gameData.stoneGold + gameData.stationGold + gameData.leprechaunGold + gameData.sheepGold + gameData.rayGold + gameData.mergerGold + gameData.goldPerClick
}

var gameData = initialGameData

var regColor = "#ffffbd"
var notEnoughColor = "#333"

//==========================================================
//Gain Profit
//==========================================================

function collectGold() {
  gameData.gold += gameData.clickinGold
  gameData.clicks += 1
  gameData.totalGold += gameData.clickinGold
  document.getElementById("goldMined").innerHTML = (formatNumber((gameData.gold).toFixed(0))) + " Gold"
}

//Spacebar gold
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      gameData.gold += gameData.clickinGold
      gameData.totalGold += gameData.clickinGold
      document.getElementById("goldMined").innerHTML = (formatNumber((gameData.gold).toFixed(0))) + " Gold"
    }
}

/*button.onclick = function(event) {
    if (event.ctrlKey && event.shiftKey) {
      multiPickaxe
    }
  };*/

//==========================================================
//Purchase Buildings
//==========================================================

function bTool() {
  if (gameData.gold >= gameData.bToolCost) {
    gameData.gold -= gameData.bToolCost
    gameData.clickinGold += 1
    gameData.bToolCost *= 2
    gameData.toolLevel += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("bTool").innerHTML = "<img class=\"icon\" src=\"Icons/tool.png\"> Better Tools<br> Tool Level " + gameData.toolLevel + "<br>Cost: " + (formatNumber(gameData.bToolCost)) + " Gold<span class=\"spannn\">Better Tools <br> +1 gold per click<br>Better tools, better mining?</span>"
  }
}
function buyPickaxe() {
  if (gameData.gold >= gameData.buyPickaxeCost) {
    gameData.gold -= gameData.buyPickaxeCost
    gameData.pickaxeGold += gameData.pickaxeProfit
    gameData.buyPickaxeCost = (58 * Math.pow(1.15, gameData.pickaxeNumber)).toFixed(0)   //Price=BaseCost×1.15(#Owned)
    gameData.pickaxeNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("buyPickaxe").innerHTML = "<img class=\"icon\" src=\"Icons/pickaxe.png\"> Pickaxe<br> (You have " + gameData.pickaxeNumber + ") <br>Cost: " + (formatNumber(gameData.buyPickaxeCost)) + " Gold"
    document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br>" + (formatNumber(gameData.pickaxeProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  }
}
function hireDwarf() {
  if(gameData.gold >= gameData.hireDwarfCost) {
    gameData.gold -= gameData.hireDwarfCost
    gameData.dwarfGold += gameData.dwarfProfit
    gameData.hireDwarfCost = (279 * Math.pow(1.15, gameData.dwarfNumber)).toFixed(0)
    gameData.dwarfNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("hireDwarf").innerHTML = "<img class=\"icon\" src=\"Icons/dwarf.png\"> Dwarf<br> (You have " + gameData.dwarfNumber + ") <br>Cost: " + (formatNumber(gameData.hireDwarfCost)) + " Gold"
    document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  }
}
function hireGoose() {
  if(gameData.gold >= gameData.hireGooseCost) {
    gameData.gold -= gameData.hireGooseCost
    gameData.gooseGold += gameData.gooseProfit
    gameData.hireGooseCost = (10127 * Math.pow(1.15, gameData.gooseNumber)).toFixed(0)
    gameData.gooseNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("hireGoose").innerHTML = "Geese<br> (You have " + gameData.gooseNumber + ") <br>Cost: " + (formatNumber(gameData.hireGooseCost)) + " Gold"
    document.getElementById("gooseGolld").innerHTML = "Goose  <br> " + (formatNumber(gameData.gooseProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.gooseGold)) + " GPS<br>A nice goose that lays golden eggs"
  }
}
function openMine() {
  if(gameData.gold >= gameData.openMineCost) {
    gameData.gold -= gameData.openMineCost
    gameData.mineGold += gameData.mineProfit
    gameData.openMineCost = (28351 * Math.pow(1.15, gameData.mineNumber)).toFixed(0)
    gameData.mineNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("openMine").innerHTML = "Gold Mine<br> (You have " + gameData.mineNumber + ") <br>Cost: " + (formatNumber(gameData.openMineCost)) + " Gold"
    document.getElementById("mineGolld").innerHTML = "Gold Mine <br>  " + (formatNumber(gameData.mineProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  }
}
function hireDragon() {
  if(gameData.gold >= gameData.hireDragonCost) {
    gameData.gold -= gameData.hireDragonCost
    gameData.dragonGold += gameData.dragonProfit
    gameData.hireDragonCost = (201648 * Math.pow(1.15, gameData.dragonNumber)).toFixed(0)
    gameData.dragonNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("hireDragon").innerHTML = "Dragon<br> (You have " + gameData.dragonNumber + ") <br>Cost: " + (formatNumber(gameData.hireDragonCost)) + " Gold"
    document.getElementById("dragonGolld").innerHTML = "Dragon <br>  " + (formatNumber(gameData.dragonProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  }
}
function buyStone() {
  if(gameData.gold >= gameData.buyStoneCost) {
    gameData.gold -= gameData.buyStoneCost
    gameData.stoneGold += gameData.stoneProfit
    gameData.buyStoneCost = (3752186 * Math.pow(1.15, gameData.stoneNumber)).toFixed(0)
    gameData.stoneNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("buyStone").innerHTML = "Philosopher's Stone<br> (You have " + gameData.stoneNumber + ") <br>Cost: " + (formatNumber(gameData.buyStoneCost)) + " Gold"
    document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  }
}
function openStation() {
  if(gameData.gold >= gameData.openStationCost) {
    gameData.gold -= gameData.openStationCost
    gameData.stationGold += gameData.stationProfit
    gameData.openStationCost = (250000000 * Math.pow(1.15, gameData.stationNumber)).toFixed(0)
    gameData.stationNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("openStation").innerHTML = "<img class=\"icon\" src=\"Icons/flare.png\"> Astroid-mining Station<br> (You have " + gameData.stationNumber + ") <br>Cost: " + (formatNumber(gameData.openStationCost)) + " Gold"
    document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  }
}
function hireleprechaun() {
  if(gameData.gold >= gameData.hireLeprechaunCost) {
    gameData.gold -= gameData.hireLeprechaunCost
    gameData.leprechaunGold += gameData.lepProfit
    gameData.hireLeprechaunCost = (1000000000 * Math.pow(1.15, gameData.leprechaunNumber)).toFixed(0)
    gameData.leprechaunNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("hireLeprechaun").innerHTML = "Leprechaun<br> (You have " + gameData.leprechaunNumber + ") <br>Cost: " + (formatNumber(gameData.hireLeprechaunCost)) + " Gold"
    document.getElementById("lepGolld").innerHTML = "Leprechaun <br>  " + (formatNumber(gameData.lepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  }
}
function hireSheep() {
  if(gameData.gold >= gameData.hireSheepCost) {
    gameData.gold -= gameData.hireSheepCost
    gameData.sheepGold += gameData.sheepProfit
    gameData.hireSheepCost = (250000000000 * Math.pow(1.15, gameData.sheepNumber)).toFixed(0)
    gameData.sheepNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("hireSheep").innerHTML = "Golden Sheep<br> (You have " + gameData.sheepNumber + ") <br>Cost: " + (formatNumber(gameData.hireSheepCost)) + " Gold"
    document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  }
}
function buyRay() {
  if(gameData.gold >= gameData.buyRayCost) {
    gameData.gold -= gameData.buyRayCost
    gameData.rayGold += gameData.rayProfit
    gameData.buyRayCost = (2000000000000 * Math.pow(1.15, gameData.rayNumber)).toFixed(0)
    gameData.rayNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("buyRay").innerHTML = "Mass Ray<br> (You have " + gameData.rayNumber + ") <br>Cost: " + (formatNumber(gameData.buyRayCost)) + " Gold"
    document.getElementById("rayGolld").innerHTML = "Mass Ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  }
}
function buyMerger() {
  if(gameData.gold >= gameData.buyMergerCost) {
    gameData.gold -= gameData.buyMergerCost
    gameData.mergerGold += gameData.mergerProfit
    gameData.buyMergerCost = (200000000000000 * Math.pow(1.15, gameData.mergerNumber)).toFixed(0)
    gameData.mergerNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("buyMerger").innerHTML = "Neutron Star Merger<br> (You have " + gameData.mergerNumber + ") <br>Cost: " + (formatNumber(gameData.buyMergerCost)) + " Gold"
    document.getElementById("mergerGolld").innerHTML = "Neutron Star Merger<br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source :)."
  }
}

//==========================================================
//Upgrades
//==========================================================

var checkForUpgrades = window.setInterval(function() {
  if (gameData.toolLevel >= 1 && gameData.a1 == 1) {
    document.getElementById("a1").style.display = "block";
  }
  if (gameData.toolLevel >= 5 && gameData.a2 == 1) {
    document.getElementById("a2").style.display = "block";
  }
  if (gameData.toolLevel >= 10 && gameData.a3 == 1) {
    document.getElementById("a3").style.display = "block";
  }
  if (gameData.toolLevel >= 15 && gameData.a4 == 1) {
    document.getElementById("a4").style.display = "block";
  }
  if (gameData.toolLevel >= 20 && gameData.a5 == 1) {
    document.getElementById("a5").style.display = "block";
  }
  if (gameData.toolLevel >= 25 && gameData.a6 == 1) {
    document.getElementById("a6").style.display = "block";
  }
  if (gameData.pickaxeNumber >= 1 && gameData.b1 == 1) {
    document.getElementById("b1").style.display = "block";
  }
  if (gameData.pickaxeNumber >= 5 && gameData.b2 == 1) {
    document.getElementById("b2").style.display = "block";
  }
  if (gameData.pickaxeNumber >= 10 && gameData.b3 == 1) {
    document.getElementById("b3").style.display = "block";
  }
  if (gameData.pickaxeNumber >= 15 && gameData.b4 == 1) {
    document.getElementById("b4").style.display = "block";
  }
  if (gameData.dwarfNumber >= 1 && gameData.c1 == 1) {
    document.getElementById("c1").style.display = "block";
  }
  if (gameData.dwarfNumber >= 5 && gameData.c2 == 1) {
    document.getElementById("c2").style.display = "block";
  }
  if (gameData.dwarfNumber >= 10 && gameData.c3 == 1) {
    document.getElementById("c3").style.display = "block";
  }
  if (gameData.dwarfNumber >= 15 && gameData.c4 == 1) {
    document.getElementById("c4").style.display = "block";
  }
  if (gameData.gooseNumber >= 1 && gameData.c01 == 1) {
    document.getElementById("c01").style.display = "block";
  }
  if (gameData.gooseNumber >= 5 && gameData.c02 == 1) {
    document.getElementById("c02").style.display = "block";
  }
  if (gameData.gooseNumber >= 10 && gameData.c03 == 1) {
    document.getElementById("c03").style.display = "block";
  }
  if (gameData.gooseNumber >= 15 && gameData.c04 == 1) {
    document.getElementById("c04").style.display = "block";
  }
  if (gameData.mineNumber >= 1 && gameData.d1 == 1) {
    document.getElementById("d1").style.display = "block";
  }
  if (gameData.mineNumber >= 5 && gameData.d2 == 1) {
    document.getElementById("d2").style.display = "block";
  }
  if (gameData.mineNumber >= 10 && gameData.d3 == 1) {
    document.getElementById("d3").style.display = "block";
  }
  if (gameData.mineNumber >= 15 && gameData.d4 == 1) {
    document.getElementById("d4").style.display = "block";
  }
  if (gameData.dragonNumber >= 1 && gameData.e1 == 1) {
    document.getElementById("e1").style.display = "block";
  }
  if (gameData.dragonNumber >= 5 && gameData.e2 == 1) {
    document.getElementById("e2").style.display = "block";
  }
  if (gameData.dragonNumber >= 10 && gameData.e3 == 1) {
    document.getElementById("e3").style.display = "block";
  }
  if (gameData.dragonNumber >= 15 && gameData.e4 == 1) {
    document.getElementById("e4").style.display = "block";
  }
  if (gameData.stoneNumber >= 1 && gameData.f1 == 1) {
    document.getElementById("f1").style.display = "block";
  }
  if (gameData.stoneNumber >= 5 && gameData.f2 == 1) {
    document.getElementById("f2").style.display = "block";
  }
  if (gameData.stoneNumber >= 10 && gameData.f3 == 1) {
    document.getElementById("f3").style.display = "block";
  }
 /* if (gameData.stoneNumber >= 15 && gameData.f4 == 1) {
    document.getElementById("f4").style.display = "block";
}*/
  if (gameData.stationNumber >= 1 && gameData.g1 == 1) {
    document.getElementById("g1").style.display = "block";
  }
  if (gameData.stationNumber >= 5 && gameData.g2 == 1) {
    document.getElementById("g2").style.display = "block";
  }
  if (gameData.stationNumber >= 10 && gameData.g3 == 1) {
    document.getElementById("g3").style.display = "block";
  }
  if (gameData.stationNumber >= 15 && gameData.g4 == 1) {
    document.getElementById("g4").style.display = "block";
  }
  if (gameData.leprechaunNumber >= 1 && gameData.h1 == 1) {
    document.getElementById("h1").style.display = "block";
  }
  if (gameData.leprechaunNumber >= 5 && gameData.h2 == 1) {
    document.getElementById("h2").style.display = "block";
  }
 /* if (gameData.leprechaunNumber >= 10 && gameData.h3 == 1) {
    document.getElementById("h3").style.display = "block";
  }
  if (gameData.leprechaunNumber >= 15 && gameData.h4 == 1) {
    document.getElementById("h4").style.display = "block";
  }*/
  if (gameData.sheepNumber >= 1 && gameData.i1 == 1) {
    document.getElementById("i1").style.display = "block";
  }
  if (gameData.sheepNumber >= 5 && gameData.i2 == 1) {
    document.getElementById("i2").style.display = "block";
  }
  /*if (gameData.sheepNumber >= 10 && gameData.i3 == 1) {
    document.getElementById("i3").style.display = "block";
  }
  if (gameData.sheepNumber >= 15 && gameData.i4 == 1) {
    document.getElementById("i4").style.display = "block";
  }*/
  if (gameData.rayNumber >= 1 && gameData.j1 == 1) {
    document.getElementById("j1").style.display = "block";
  }
  if (gameData.rayNumber >= 5 && gameData.j2 == 1) {
    document.getElementById("j2").style.display = "block";
  }
  if (gameData.rayNumber >= 10 && gameData.j3 == 1) {
    document.getElementById("j3").style.display = "block";
  }
 /* if (gameData.rayNumber >= 15 && gameData.j4 == 1) {
    document.getElementById("j4").style.display = "block";
  }*/
  if (gameData.mergerNumber >= 1 && gameData.k1 == 1) {
    document.getElementById("k1").style.display = "block";
  }
  if (gameData.mergerNumber >= 5 && gameData.k2 == 1) {
    document.getElementById("k2").style.display = "block";
  }
  if (gameData.mergerNumber >= 10 && gameData.k3 == 1) {
    document.getElementById("k3").style.display = "block";
  }
  /*if (gameData.mergerNumber >= 15 && gameData.k4 == 1) {
    document.getElementById("k4").style.display = "block";
  }*/
}, 3000)

function a1() {
  if (gameData.gold >= gameData.a1Price) {
    gameData.gold -= gameData.a1Price
    gameData.clickinGold *= 2
    gameData.a1 = 2
    document.getElementById("a1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
  }
}
function a2() {
  if (gameData.gold >= gameData.a2Price) {
    gameData.gold -= gameData.a2Price
    gameData.clickinGold *= 2
    gameData.a2 = 2
    document.getElementById("a2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
  }
}
function a3() {
  if (gameData.gold >= gameData.a3Price) {
    gameData.gold -= gameData.a3Price
    gameData.clickinGold *= gameData.pickaxeNumber
    gameData.a3 = 2
    document.getElementById("a3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
  }
}
function a4() {
  if (gameData.gold >= gameData.a4Price) {
    gameData.gold -= gameData.a4Price
    gameData.clickinGold *= gameData.pickaxeNumber
    gameData.a4 = 2
    document.getElementById("a4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
  }
}
function a5() {
  if (gameData.gold >= gameData.a5Price) {
    gameData.gold -= gameData.a5Price
    gameData.clickinGold *= gameData.pickaxeNumber
    gameData.a5 = 2
    document.getElementById("a5").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
  }
}
function a6() {
  if (gameData.gold >= gameData.a6Price) {
    gameData.gold -= gameData.a6Price
    gameData.clickinGold *= gameData.pickaxeNumber
    gameData.a6 = 2
    document.getElementById("a6").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
  }
}

function b1() {
  if (gameData.gold >= gameData.b1Price) {
    gameData.gold -= gameData.b1Price
    gameData.pickaxeProfit *= 2
    gameData.pickaxeGold *= 2
    gameData.b1 = 2
    document.getElementById("b1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br>" + (formatNumber(gameData.pickaxeProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  }
}
function b2() {
  if (gameData.gold >= gameData.b2Price) {
    gameData.gold -= gameData.b2Price
    gameData.pickaxeProfit *= 2
    gameData.pickaxeGold *= 2
    gameData.b2 = 2
    document.getElementById("b2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br>" + (formatNumber(gameData.pickaxeProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  }
}
function b3() {
  if (gameData.gold >= gameData.b3Price) {
    gameData.gold -= gameData.b3Price
    gameData.pickaxeProfit *= 2
    gameData.pickaxeGold *= 2
    gameData.b3 = 2
    document.getElementById("b3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br>" + (formatNumber(gameData.pickaxeProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  }
}
function b4() {
  if (gameData.gold >= gameData.b4Price) {
    gameData.gold -= gameData.b4Price
    gameData.pickaxeProfit *= 2
    gameData.pickaxeGold *= 2
    gameData.b4 = 2
    document.getElementById("b4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br>" + (formatNumber(gameData.pickaxeProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  }
}

function c1() {
  if (gameData.gold >= gameData.c1Price) {
    gameData.gold -= gameData.c1Price
    gameData.dwarfProfit *= 2
    gameData.dwarfGold *= 2
    gameData.c1 = 2
    document.getElementById("c1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  }
}
function c2() {
  if (gameData.gold >= gameData.c2Price) {
    gameData.gold -= gameData.c2Price
    gameData.dwarfProfit *= 2
    gameData.dwarfGold *= 2
    gameData.c2 = 2
    document.getElementById("c2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  }
}
function c3() {
  if (gameData.gold >= gameData.c3Price) {
    gameData.gold -= gameData.c3Price
    gameData.dwarfProfit *= 2
    gameData.dwarfGold *= 2
    gameData.c3 = 2
    document.getElementById("c3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  }
}
function c4() {
  if (gameData.gold >= gameData.c4Price) {
    gameData.gold -= gameData.c4Price
    gameData.dwarfProfit *= 2
    gameData.dwarfGold *= 2
    gameData.c4 = 2
    document.getElementById("c4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  }
}

function c01() {
  if (gameData.gold >= gameData.c01Price) {
    gameData.gold -= gameData.c01Price
    gameData.gooseProfit *= 2
    gameData.gooseGold *= 2
    gameData.c01 = 2
    document.getElementById("c01").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("gooseGolld").innerHTML = "Goose  <br> " + (formatNumber(gameData.gooseProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.gooseGold)) + " GPS<br>A nice goose that lays golden eggs"
  }
}
function c02() {
  if (gameData.gold >= gameData.c02Price) {
    gameData.gold -= gameData.c02Price
    gameData.gooseProfit *= 2
    gameData.gooseGold *= 2
    gameData.c02 = 2
    document.getElementById("c02").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("gooseGolld").innerHTML = "Goose  <br> " + (formatNumber(gameData.gooseProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.gooseGold)) + " GPS<br>A nice goose that lays golden eggs"
  }
}
function c03() {
  if (gameData.gold >= gameData.c03Price) {
    gameData.gold -= gameData.c03Price
    gameData.gooseProfit *= 2
    gameData.gooseGold *= 2
    gameData.c03 = 2
    document.getElementById("c03").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("gooseGolld").innerHTML = "Goose  <br> " + (formatNumber(gameData.gooseProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.gooseGold)) + " GPS<br>A nice goose that lays golden eggs"
  }
}
function c04() {
  if (gameData.gold >= gameData.c04Price) {
    gameData.gold -= gameData.c04Price
    gameData.gooseProfit *= 2
    gameData.gooseGold *= 2
    gameData.c04 = 2
    document.getElementById("c04").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("gooseGolld").innerHTML = "Goose  <br> " + (formatNumber(gameData.gooseProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.gooseGold)) + " GPS<br>A nice goose that lays golden eggs"
  }
}

function d1() {
  if (gameData.gold >= gameData.d1Price) {
    gameData.gold -= gameData.d1Price
    gameData.mineProfit *= 2
    gameData.mineGold *= 2
    gameData.d1 = 2
    document.getElementById("d1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("mineGolld").innerHTML = "Gold Mine <br>  " + (formatNumber(gameData.mineProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  }
}
function d2() {
  if (gameData.gold >= gameData.d2Price) {
    gameData.gold -= gameData.d2Price
    gameData.mineProfit *= 2
    gameData.mineGold *= 2
    gameData.d2 = 2
    document.getElementById("d2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("mineGolld").innerHTML = "Gold Mine <br>  " + (formatNumber(gameData.mineProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  }
}
function d3() {
  if (gameData.gold >= gameData.d3Price) {
    gameData.gold -= gameData.d3Price
    gameData.mineProfit *= 2
    gameData.mineGold *= 2
    gameData.d3 = 2
    document.getElementById("d3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("mineGolld").innerHTML = "Gold Mine <br>  " + (formatNumber(gameData.mineProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  }
}
function d4() {
  if (gameData.gold >= gameData.d4Price) {
    gameData.gold -= gameData.d4Price
    gameData.mineProfit *= 2
    gameData.mineGold *= 2
    gameData.d4 = 2
    document.getElementById("d4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("mineGolld").innerHTML = "Gold Mine <br>  " + (formatNumber(gameData.mineProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  }
}

function e1() {
  if (gameData.gold >= gameData.e1Price) {
    gameData.gold -= gameData.e1Price
    gameData.dragonProfit *= 2
    gameData.dragonGold *= 2
    gameData.e1 = 2
    document.getElementById("e1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("dragonGolld").innerHTML = "Dragon <br>  " + (formatNumber(gameData.dragonProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  }
}
function e2() {
  if (gameData.gold >= gameData.e2Price) {
    gameData.gold -= gameData.e2Price
    gameData.dragonProfit *= 2
    gameData.dragonGold *= 2
    gameData.e2 = 2
    document.getElementById("e2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("dragonGolld").innerHTML = "Dragon <br>  " + (formatNumber(gameData.dragonProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  }
}
function e3() {
  if (gameData.gold >= gameData.e3Price) {
    gameData.gold -= gameData.e3Price
    gameData.dragonProfit *= 2
    gameData.dragonGold *= 2
    gameData.e3 = 2
    document.getElementById("e3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("dragonGolld").innerHTML = "Dragon <br>  " + (formatNumber(gameData.dragonProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  }
}
function e4() {
  if (gameData.gold >= gameData.e4Price) {
    gameData.gold -= gameData.e4Price
    gameData.dragonProfit *= 2
    gameData.dragonGold *= 2
    gameData.e4 = 2
    document.getElementById("e4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("dragonGolld").innerHTML = "Dragon <br>  " + (formatNumber(gameData.dragonProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  }
}

function f1() {
  if (gameData.gold >= gameData.f1Price) {
    gameData.gold -= gameData.f1Price
    gameData.stoneProfit *= 2
    gameData.stoneGold *= 2
    gameData.f1 = 2
    document.getElementById("f1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  }
}
function f2() {
  if (gameData.gold >= gameData.f2Price) {
    gameData.gold -= gameData.f2Price
    gameData.stoneProfit *= 2
    gameData.stoneGold *= 2
    gameData.f2 = 2
    document.getElementById("f2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  }
}
function f3() {
  if (gameData.gold >= gameData.f3Price) {
    gameData.gold -= gameData.f3Price
    gameData.stoneProfit *= 2
    gameData.stoneGold *= 2
    gameData.f3 = 2
    document.getElementById("f3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  }
}
function f4() {
  if (gameData.gold >= gameData.f4Price) {
    gameData.gold -= gameData.f4Price
    gameData.stoneProfit *= 2
    gameData.stoneGold *= 2
    gameData.f4 = 2
    document.getElementById("f4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  }
}

function g1() {
  if (gameData.gold >= gameData.g1Price) {
    gameData.gold -= gameData.g1Price
    gameData.stationProfit *= 2
    gameData.stationGold *= 2
    gameData.g1 = 2
    document.getElementById("g1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  }
}
function g2() {
  if (gameData.gold >= gameData.g2Price) {
    gameData.gold -= gameData.g2Price
    gameData.stationProfit *= 2
    gameData.stationGold *= 2
    gameData.g2 = 2
    document.getElementById("g2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  }
}
function g3() {
  if (gameData.gold >= gameData.g3Price) {
    gameData.gold -= gameData.g3Price
    gameData.stationProfit *= 2
    gameData.stationGold *= 2
    gameData.g3 = 2
    document.getElementById("g3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  }
}
function g4() {
  if (gameData.gold >= gameData.g4Price) {
    gameData.gold -= gameData.g4Price
    gameData.stationProfit *= 2
    gameData.stationGold *= 2
    gameData.g4 = 2
    document.getElementById("g4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  }
}

function h1() {
  if (gameData.gold >= gameData.h1Price) {
    gameData.gold -= gameData.h1Price
    gameData.lepProfit *= 2
    gameData.leprechaunGold *= 2
    gameData.h1 = 2
    document.getElementById("h1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("lepGolld").innerHTML = "Leprechaun <br>  " + (formatNumber(gameData.lepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  }
}
function h2() {
  if (gameData.gold >= gameData.h2Price) {
    gameData.gold -= gameData.h2Price
    gameData.lepProfit *= 2
    gameData.leprechaunGold *= 2
    gameData.h2 = 2
    document.getElementById("h2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("lepGolld").innerHTML = "Leprechaun <br>  " + (formatNumber(gameData.lepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  }
}
function h3() {
  if (gameData.gold >= gameData.h3Price) {
    gameData.gold -= gameData.h3Price
    gameData.lepProfit *= 2
    gameData.leprechaunGold *= 2
    gameData.h3 = 2
    document.getElementById("h3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("lepGolld").innerHTML = "Leprechaun <br>  " + (formatNumber(gameData.lepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  }
}
function h4() {
  if (gameData.gold >= gameData.h4Price) {
    gameData.gold -= gameData.h4Price
    gameData.lepProfit *= 2
    gameData.leprechaunGold *= 2
    gameData.h4 = 2
    document.getElementById("h4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("lepGolld").innerHTML = "Leprechaun <br>  " + (formatNumber(gameData.lepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  }
}

function i1() {
  if (gameData.gold >= gameData.i1Price) {
    gameData.gold -= gameData.i1Price
    gameData.sheepProfit *= 2
    gameData.sheepGold *= 2
    gameData.i1 = 2
    document.getElementById("i1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  }
}
function i2() {
  if (gameData.gold >= gameData.i2Price) {
    gameData.gold -= gameData.i2Price
    gameData.sheepProfit *= 2
    gameData.sheepGold *= 2
    gameData.i2 = 2
    document.getElementById("i2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  }
}
function i3() {
  if (gameData.gold >= gameData.i3Price) {
    gameData.gold -= gameData.i3Price
    gameData.sheepProfit *= 2
    gameData.sheepGold *= 2
    gameData.i3 = 2
    document.getElementById("i3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  }
}
function i4() {
  if (gameData.gold >= gameData.i4Price) {
    gameData.gold -= gameData.i4Price
    gameData.sheepProfit *= 2
    gameData.sheepGold *= 2
    gameData.i4 = 2
    document.getElementById("i4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  }
}

function j1() {
  if (gameData.gold >= gameData.j1Price) {
    gameData.gold -= gameData.j1Price
    gameData.rayProfit *= 2
    gameData.rayGold *= 2
    gameData.j1 = 2
    document.getElementById("j1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("rayGolld").innerHTML = "Mass Ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  }
}
function j2() {
  if (gameData.gold >= gameData.j2Price) {
    gameData.gold -= gameData.j2Price
    gameData.rayProfit *= 2
    gameData.rayGold *= 2
    gameData.j2 = 2
    document.getElementById("j2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("rayGolld").innerHTML = "Mass Ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  }
}
function j3() {
  if (gameData.gold >= gameData.j3Price) {
    gameData.gold -= gameData.j3Price
    gameData.rayProfit *= 2
    gameData.rayGold *= 2
    gameData.j3 = 2
    document.getElementById("j3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("rayGolld").innerHTML = "Mass Ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  }
}
function j4() {
  if (gameData.gold >= gameData.j4Price) {
    gameData.gold -= gameData.j4Price
    gameData.rayProfit *= 2
    gameData.rayGold *= 2
    gameData.j4 = 2
    document.getElementById("j4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("rayGolld").innerHTML = "Mass Ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  }
}

function k1() {
  if (gameData.gold >= gameData.k1Price) {
    gameData.gold -= gameData.k1Price
    gameData.mergerProfit *= 2
    gameData.mergerGold *= 2
    gameData.k1 = 2
    document.getElementById("k1").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("mergerGolld").innerHTML = "Neutron Star Merger<br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source :)."
  }
}
function k2() {
  if (gameData.gold >= gameData.k2Price) {
    gameData.gold -= gameData.k2Price
    gameData.mergerProfit *= 2
    gameData.mergerGold *= 2
    gameData.k2 = 2
    document.getElementById("k2").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("mergerGolld").innerHTML = "Neutron Star Merger<br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source :)."
  }
}
function k3() {
  if (gameData.gold >= gameData.k3Price) {
    gameData.gold -= gameData.k3Price
    gameData.mergerProfit *= 2
    gameData.mergerGold *= 2
    gameData.k3 = 2
    document.getElementById("k3").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("mergerGolld").innerHTML = "Neutron Star Merger<br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source :)."
  }
}
function k4() {
  if (gameData.gold >= gameData.k4Price) {
    gameData.gold -= gameData.k4Price
    gameData.mergerProfit *= 2
    gameData.mergerGold *= 2
    gameData.k4 = 2
    document.getElementById("k4").style.display = "none";
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold"
    document.getElementById("mergerGolld").innerHTML = "Neutron Star Merger<br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source :)."
  }
}

//==========================================================
//Acheivements
//==========================================================

var acheivments = window.setInterval(function() {
  if (gameData.clicks == 0 && gameData.gold >= 1000) {
      document.getElementById("noclick1").style.display = "inline";
  }
  if (gameData.clicks == 0 && gameData.gold >= 10000) {
      document.getElementById("noclick2").style.display = "inline";
  }
  if (gameData.clicks == 0 && gameData.gold >= 100000) {
      document.getElementById("noclick3").style.display = "inline";
  }
  if (gameData.clicks >= 1) {
      document.getElementById("click1").style.display = "inline";
  }
  if (gameData.clicks >= 10) {
      document.getElementById("click2").style.display = "inline";
  }
  if (gameData.clicks >= 100) {
      document.getElementById("click3").style.display = "inline";
  }
  if (gameData.clicks >= 1000) {
      document.getElementById("click4").style.display = "inline";
  }


  if (gameData.pickaxeNumber >= 1) {
      document.getElementById("pick1").style.display = "inline";
  }
  if (gameData.pickaxeNumber >= 5) {
      document.getElementById("pick2").style.display = "inline";
  }
  if (gameData.pickaxeNumber >= 25) {
      document.getElementById("pick3").style.display = "inline";
  }
  if (gameData.pickaxeNumber >= 50) {
      document.getElementById("pick4").style.display = "inline";
  }
  if (gameData.pickaxeNumber >= 100) {
      document.getElementById("pick5").style.display = "inline";
  }

  if (gameData.dwarfNumber >= 1) {
      document.getElementById("dwarf1").style.display = "inline";
  }
  if (gameData.dwarfNumber >= 5) {
      document.getElementById("dwarf2").style.display = "inline";
  }
  if (gameData.dwarfNumber >= 25) {
      document.getElementById("dwarf3").style.display = "inline";
  }
  if (gameData.dwarfNumber >= 50) {
      document.getElementById("dwarf4").style.display = "inline";
  }
  if (gameData.dwarfNumber >= 100) {
      document.getElementById("dwarf5").style.display = "inline";
  }

  if (gameData.mineNumber >= 1) {
      document.getElementById("mine1").style.display = "inline";
  }
  if (gameData.mineNumber >= 5) {
      document.getElementById("mine2").style.display = "inline";
  }
  if (gameData.mineNumber >= 25) {
      document.getElementById("mine3").style.display = "inline";
  }
  if (gameData.mineNumber >= 50) {
      document.getElementById("mine4").style.display = "inline-block";
  }
  if (gameData.mineNumber >= 100) {
      document.getElementById("mine5").style.display = "inline-block";
  }

  if (gameData.dragonNumber >= 1) {
        document.getElementById("dragon1").style.display = "inlinek";
    }
  if (gameData.dragonNumber >= 5) {
        document.getElementById("dragon2").style.display = "inlinek";
    }
  if (gameData.dragonNumber >= 25) {
        document.getElementById("dragon3").style.display = "inline";
    }
  if (gameData.dragonNumber >= 50) {
        document.getElementById("dragon4").style.display = "inlinek";
    }
  if (gameData.dragonNumber >= 100) {
        document.getElementById("dragon5").style.display = "inlinek";
    }

  if (gameData.stoneNumber >= 1) {
          document.getElementById("stone1").style.display = "inlinek";
      }
  if (gameData.stoneNumber >= 5) {
          document.getElementById("stone2").style.display = "inlinek";
      }
  if (gameData.stoneNumber >= 25) {
          document.getElementById("stone3").style.display = "inlinek";
      }
  if (gameData.stoneNumber >= 50) {
          document.getElementById("stone4").style.display = "inlinek";
      }
  if (gameData.stoneNumber >= 100) {
          document.getElementById("stone5").style.display = "inline-";
      }

  if (gameData.stationNumber >= 1) {
            document.getElementById("station1").style.display = "inline-";
        }
  if (gameData.stationNumber >= 5) {
            document.getElementById("station2").style.display = "inlinek";
        }
  if (gameData.stationNumber >= 25) {
            document.getElementById("station3").style.display = "inline-";
        }
  if (gameData.stationNumber >= 50) {
            document.getElementById("station4").style.display = "inlinek";
        }
  if (gameData.stationNumber >= 100) {
            document.getElementById("station5").style.display = "inline-";
        }

  if (gameData.leprechaunNumber >= 1) {
              document.getElementById("lep1").style.display = "inlinek";
          }
  if (gameData.leprechaunNumber >= 5) {
              document.getElementById("lep2").style.display = "inlinck";
          }
  if (gameData.leprechaunNumber >= 25) {
              document.getElementById("lep3").style.display = "inlinek";
          }
  if (gameData.leprechaunNumber >= 50) {
              document.getElementById("lep4").style.display = "inline-";
          }
  if (gameData.leprechaunNumber >= 100) {
              document.getElementById("lep5").style.display = "inline-";
          }

  if (gameData.sheepNumber >= 1) {
                document.getElementById("sheep1").style.display = "inlinek";
            }
  if (gameData.sheepNumber >= 5) {
                document.getElementById("sheep2").style.display = "inlinek";
            }
  if (gameData.sheepNumber >= 25) {
                document.getElementById("sheep3").style.display = "inlinek";
            }
  if (gameData.sheepNumber >= 50) {
                document.getElementById("sheep4").style.display = "inline-";
            }
  if (gameData.sheepNumber >= 100) {
                document.getElementById("sheep5").style.display = "inline-";
            }

  if (gameData.rayNumber >= 1) {
                  document.getElementById("ray1").style.display = "inlinek";
              }
  if (gameData.rayNumber >= 5) {
     document.getElementById("ray2").style.display = "inline";
              }
    if (gameData.rayNumber >= 25) {
       document.getElementById("ray3").style.display = "inline";
              }
  if (gameData.rayNumber >= 50) {
                  document.getElementById("ray4").style.display = "inline-";
              }
  if (gameData.rayNumber >= 100) {
                  document.getElementById("ray5").style.display = "inline";
              }

  if (gameData.mergerNumber >= 1) {
                    document.getElementById("merger1").style.display = "inline";
                }
  if (gameData.mergerNumber >= 5) {
                    document.getElementById("merger2").style.display = "inline";
                }
  if (gameData.mergerNumber >= 25) {
                    document.getElementById("merger3").style.display = "inline";
                }
  if (gameData.mergerNumber >= 50) {
                    document.getElementById("merger4").style.display = "inline";
                }
  if (gameData.mergerNumber >= 100) {
                    document.getElementById("merger5").style.display = "inline";
                }
}, 5000)

//==========================================================
//Winning
//==========================================================

function youWin() {
  //alert("you win")
  //document.getElementById("buildings").innerHTML = '<iframe src="https://giphy.com/embed/peAFQfg7Ol6IE" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/peAFQfg7Ol6IE">via GIPHY</a></p>'
  //document.getElementById("maingamecenter").innerHTML = '<iframe src="https://giphy.com/embed/l1J3DaHzWEp2bTpYs" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fun-party-celebration-l1J3DaHzWEp2bTpYs">via GIPHY</a></p>'
  //document.getElementById("gain").innerHTML = '<iframe src="https://giphy.com/embed/1zhHiGwQiu2CaGj1uE" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/trippy-rainbow-background-1zhHiGwQiu2CaGj1uE">via GIPHY</a></p>'
}

var winQuestion = window.setInterval(function() {
  if (gameData.pickaxeNumber >= 1000 && gameData.dwarfNumber >= 900 && gameData.mineNumber >= 800 && gameData.dragonNumber >= 700 && gameData.stoneNumber >= 600 && gameData.stationNumber >= 500 && gameData.leprechaunNumber >= 400 && gameData.sheepNumber >= 300 && gameData.rayNumber >= 200 && gameData.mergerNumber >= 100) {
    youWin()
  }
}, 5000)

//==========================================================
//Main Game Loop
//==========================================================

var mainGameLoop = window.setInterval(function() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now()
  gameData.gold += goldPerSecond()  * (diff / 1000)
  gameData.totalGold += goldPerSecond()
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  document.getElementById("copE-right").innerHTML = date
  document.getElementById("totalGold").innerHTML =  (formatNumber(gameData.totalGold)) + " Lifetime Gold Profits"
  document.getElementById("goldMined").innerHTML = (formatNumber((gameData.gold).toFixed(0))) + " Gold"
  document.title = (formatNumber((gameData.gold).toFixed(0))) + " Gold";
  document.getElementById("gpc").innerHTML = (formatNumber(gameData.clickinGold)) + " Gold Per Click";
  document.getElementById("gps").innerHTML = (formatNumber(goldPerSecond())) + " Gold Per Second";
  document.getElementById("gpm").innerHTML = (formatNumber(goldPerSecond() * 60)) + " Gold Per Minute";
  document.getElementById("g0pher").innerHTML = (formatNumber(goldPerSecond() * 60 * 60)) + " Gold Per Hour";
  document.getElementById("gpd").innerHTML = (formatNumber(goldPerSecond() * 60 * 60 * 24)) + " Gold Per Day";
  document.getElementById("gpw").innerHTML = (formatNumber(goldPerSecond() * 60 * 60 * 24 * 7)) + " Gold Per Week";
  document.getElementById("gpM").innerHTML = (formatNumber(goldPerSecond() * 60 * 60 * 24 * 7 * 4)) + " Gold Per Month";
  document.getElementById("gpy").innerHTML = (formatNumber(goldPerSecond() * 60 * 60 * 24 * 7 * 4 * 12)) + " Gold Per Year";
}, 1000)

var buildColorLoop = window.setInterval(function() {

  if (gameData.gold >= (gameData.bToolCost / 2) || gameData.toolLevel >= 1) {
    document.getElementById("bTool").style.display = "inline";
  }
  if (gameData.gold >= gameData.bToolCost) {
    document.getElementById("bTool").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("bTool").style.backgroundColor = notEnoughColor;
    //document.getElementById("bTool").style.cursor = "wait";
  }
  if (gameData.gold >= (gameData.buyPickaxeCost / 2) || gameData.pickaxeNumber >= 1) {
    document.getElementById("buyPickaxe").style.display = "inline";
  }
  if (gameData.gold >= gameData.buyPickaxeCost) {
    document.getElementById("buyPickaxe").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("buyPickaxe").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.hireDwarfCost / 2) || gameData.dwarfNumber >= 1) {
    document.getElementById("hireDwarf").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireDwarfCost) {
    document.getElementById("hireDwarf").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("hireDwarf").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.hireGooseCost / 2) || gameData.gooseNumber >= 1) {
    document.getElementById("hireGoose").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireGooseCost) {
    document.getElementById("hireGoose").style.backgroundColor = regColor;
  }
  else {
   document.getElementById("hireGoose").style.backgroundColor = notEnoughColor;
 }
  if (gameData.gold >= (gameData.openMineCost / 2) || gameData.mineNumber >= 1) {
    document.getElementById("openMine").style.display = "inline";
  }
  if (gameData.gold >= gameData.openMineCost) {
    document.getElementById("openMine").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("openMine").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.hireDragonCost / 2) || gameData.dragonNumber >= 1) {
    document.getElementById("hireDragon").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireDragonCost) {
    document.getElementById("hireDragon").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("hireDragon").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.buyStoneCost / 2) || gameData.stoneNumber >= 1) {
    document.getElementById("buyStone").style.display = "inline";
  }
  if (gameData.gold >= gameData.buyStoneCost) {
    document.getElementById("buyStone").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("buyStone").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.openStationCost / 2) || gameData.stationNumber >= 1) {
    document.getElementById("openStation").style.display = "inline";
  }
  if (gameData.gold >= gameData.openStationCost) {
    document.getElementById("openStation").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("openStation").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.hireLeprechaunCost / 2) || gameData.leprechaunNumber >= 1) {
    document.getElementById("hireLeprechaun").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireLeprechaunCost) {
    document.getElementById("hireLeprechaun").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("hireLeprechaun").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.hireSheepCost / 2) || gameData.sheepNumber >= 1) {
    document.getElementById("hireSheep").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireSheepCost) {
    document.getElementById("hireSheep").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("hireSheep").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.buyRayCost / 2) || gameData.rayNumber >= 1) {
    document.getElementById("buyRay").style.display = "inline";
  }
  if (gameData.gold >= gameData.buyRayCost) {
    document.getElementById("buyRay").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("buyRay").style.backgroundColor = notEnoughColor;
  }
  if (gameData.gold >= (gameData.buyMergerCost / 2) || gameData.mergerNumber >= 1) {
    document.getElementById("buyMerger").style.display = "inline";
  }
  if (gameData.gold >= gameData.buyMergerCost) {
    document.getElementById("buyMerger").style.backgroundColor = regColor;
  }
  else {
    document.getElementById("buyMerger").style.backgroundColor = notEnoughColor;
  }

  if (gameData.mergerNumber == 0) {
    //loading bar
  }
}, 500)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("goldRushSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldRushSave"))
if (savegame !== null) {
  gameData = savegame;
}

var setThingsRight = window.setInterval(function() {
  document.getElementById("goldMined").innerHTML = (formatNumber((gameData.gold).toFixed(0)))+ " Gold <img src=\"Images/retro-coin.gif\" alt=\"Gold!\" class=\"retro-coin\">"
}, 1)

//==========================================================
//Math (Add commas)
//==========================================================

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//==========================================================
//Settings
//==========================================================

function restart() {
  var r = confirm("Are you SURE you want to restart? This will wipe all your progress!");
  if (r == true) {
     var rr = confirm("Are you REALLY SURE you want to restart? There is no going back!");
     if (rr == true) {
       gameData = initialGameData
       localStorage.setItem("goldRushSave", JSON.stringify(gameData))
       document.location.href = ("")
     }
  }
}

function save() {
  localStorage.setItem("goldRushSave", JSON.stringify(gameData))
}

function dark() {
  regColor = "#454545"
  notEnoughColor = "#000"

  var all = document.getElementsByClassName('info');
  for (var i = 0; i < all.length; i++) {
    all[i].style.color = '#fff';
    all[i].style.fontFamily = 'times';
    all[i].style.border = 'outset 5px lightblue';
  }

  var allo = document.getElementsByClassName('boxi');
  for (var i = 0; i < allo.length; i++) {
    allo[i].style.background = '#737373';
  }

  document.body.style.color = "#fff";
  document.body.style.background = "#383838";
  document.getElementById("playerrName").style.background = "#8f8d8d";
  document.getElementById("gain").style.background = "#737373";
}

function light() {
  document.location.href = ("")
}

var myAudio = document.getElementById("myAudio");

function music() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

function fontChange0() {
  document.getElementById("GM").style.background = "#8f8d8d";
}

function fontChange1() {
  document.getElementById("playerrName").style.background = "#8f8d8d";
}

function fontChange2() {
  document.getElementById("playerrName").style.background = "#8f8d8d";
}

//==========================================================
//News
//==========================================================

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
  //'News: ',
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
  'News: Throught  an aminzing feat of alchemy, Mt. Everest is turned into gold. Localist extreamly bothered: "Do you know how hard it is to live with a hunk of gold shimmering in your face CONSTANTLY?"',
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
  'News: Illegal criminals illegally use mass rays to turn politicians into gold. "I know it\'s illegal, but I hope they keep doing. Wait... are you a reporter?!"',
  //'News: ',
  //'News: ',
  //'News: ',
  //'News: ',
  //'News: ',
]
var mergerNews = [
  'News: Scientist figure out a way to make gold by merging neutron stars, "Eureka! Wait a moment- I think this time we actually went to far..."',
  'News: "Why, may I ask, are we MERGING NEUTRON STARS just to make gold!?! Please explain your reasoning." random man rants. ',
  //'News: ',
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
  'News: New podcast about ' + gameData.playerName  + '\'s amazing rise to success coming out! Don\'t miss it!',
  'News: Studies show that ' + gameData.playerName  + ' has made a total '  + (formatNumber(gameData.totalGold))  + ' Gold. "That\'s a lot of shiny" says researcher',
  //'News: ',
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


var news = window.setInterval(function (){
  var trueNews = allNews
  if (gameData.pickaxeNumber >= 1) {
    trueNews = trueNews.concat(pickaxeNews)
  }
  if (gameData.dwarfNumber >= 1) {
    trueNews = trueNews.concat(dwarfNews)
  }
  if (gameData.gooseNumber >= 1) {
    trueNews = trueNews.concat(gooseNews)
  }
  if (gameData.mineNumber >= 1) {
    trueNews = trueNews.concat(mineNews)
  }
  if (gameData.dragonNumber >= 1) {
    trueNews = trueNews.concat(dragonNews)
  }
  if (gameData.stoneNumber >= 1) {
    trueNews = trueNews.concat(stoneNews)
  }
  if (gameData.stationNumber >= 1) {
    trueNews = trueNews.concat(stationNews)
  }
  if (gameData.leprechaunNumber >= 1) {
    trueNews = trueNews.concat(lepNews)
  }
  if (gameData.sheepNumber >= 1) {
    trueNews = trueNews.concat(sheepNews)
  }
  if (gameData.rayNumber >= 1) {
    trueNews = trueNews.concat(rayNews)
  }
  if (gameData.mergerNumber >= 1) {
    trueNews = trueNews.concat(mergerNews)
  }
  if (gameData.gold >= 1000000) {
    trueNews = trueNews.concat(richNews)
  }
  if (gameData.mergerNumber >= 10 && gameData.gold >= 1000000000000) {
    trueNews = trueNews.concat(otherNews)
  }
  var randomallNews = trueNews[Math.floor(Math.random() * trueNews.length)];
  document.getElementById("news").innerHTML = randomallNews;
}, 12000)

//==========================================================
//Onload
//==========================================================

function gameLayout() {
//Gold per Building
  document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br> " + (formatNumber(gameData.pickaxeProfit)) + " GPS <br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  document.getElementById("gooseGolld").innerHTML = "Geese <br> " + (formatNumber(gameData.gooseProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.gooseGold)) + " GPS<br>A nice goose that lays golden egg"
  document.getElementById("mineGolld").innerHTML = "Gold Mine <br> " + (formatNumber(gameData.mineProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  document.getElementById("dragonGolld").innerHTML = "Dragon <br> " + (formatNumber(gameData.dragonProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  document.getElementById("lepGolld").innerHTML = "Leprechaun <br> " + (formatNumber(gameData.lepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  document.getElementById("rayGolld").innerHTML = "Mass Ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  document.getElementById("mergerGolld").innerHTML = "Neutron Star Merger<br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source :)."

//Building Count
  document.getElementById("bTool").innerHTML = "<img class=\"icon\" src=\"Icons/tool.png\"> Better Tools<br> Tool Level " + gameData.toolLevel + "<br>Cost: " + (formatNumber(gameData.bToolCost)) + " Gold<span class=\"spannn\">Better Tools <br> +1 gold per click<br>Better tools, better mining?</span>"
  document.getElementById("buyPickaxe").innerHTML = "<img class=\"icon\" src=\"Icons/pickaxe.png\"> Pickaxe<br> (You have " + gameData.pickaxeNumber + ") <br>Cost: " + (formatNumber(gameData.buyPickaxeCost)) + " Gold"
  document.getElementById("hireDwarf").innerHTML = "<img class=\"icon\" src=\"Icons/dwarf.png\"> Dwarf<br> (You have " + gameData.dwarfNumber + ") <br>Cost: " + (formatNumber(gameData.hireDwarfCost)) + " Gold"
  document.getElementById("hireGoose").innerHTML = "Geese<br> (You have " + gameData.gooseNumber + ") <br>Cost: " + (formatNumber(gameData.hireGooseCost)) + " Gold"
  document.getElementById("openMine").innerHTML = "Gold Mine<br> (You have " + gameData.mineNumber + ") <br>Cost: " + (formatNumber(gameData.openMineCost)) + " Gold"
  document.getElementById("hireDragon").innerHTML = "Dragon<br> (You have " + gameData.dragonNumber + ") <br>Cost: " + (formatNumber(gameData.hireDragonCost)) + " Gold"
  document.getElementById("buyStone").innerHTML = "Philosopher's Stone<br> (You have " + gameData.stoneNumber + ") <br>Cost: " + (formatNumber(gameData.buyStoneCost)) + " Gold"
  document.getElementById("openStation").innerHTML = "<img class=\"icon\" src=\"Icons/flare.png\"> Astroid-mining Station<br> (You have " + gameData.stationNumber + ") <br>Cost: " + (formatNumber(gameData.openStationCost)) + " Gold"
  document.getElementById("hireLeprechaun").innerHTML = "Leprechaun<br> (You have " + gameData.leprechaunNumber + ") <br>Cost: " + (formatNumber(gameData.hireLeprechaunCost)) + " Gold"
  document.getElementById("hireSheep").innerHTML = "Golden Sheep<br> (You have " + gameData.sheepNumber + ") <br>Cost: " + (formatNumber(gameData.hireSheepCost)) + " Gold"
  document.getElementById("buyRay").innerHTML = "Mass Ray<br> (You have " + gameData.rayNumber + ") <br>Cost: " + (formatNumber(gameData.buyRayCost)) + " Gold"
  document.getElementById("buyMerger").innerHTML = "Neutron Star Merger<br> (You have " + gameData.mergerNumber + ") <br>Cost: " + (formatNumber(gameData.buyMergerCost)) + " Gold"

  document.getElementById("playerrName").innerHTML = gameData.playerName + "'s Mine";
  if (gameData.playerName == 3) {
    gameSetup();
  }
}
window.onload = gameLayout;

//==========================================================
//Welcome Instructions
//==========================================================

var startTime = null

function gameSetup() {
  alert("This is an incremental game. To earn gold, click on the asteroid or the space bar, and when you get enough, invest it in gold producing items. Enjoy the game.")
  gameData.playerName = prompt("What is your name?(don't use your real name)")
  startTime = Date.now()
}

//==========================================================
//Console
//==========================================================

console.log("Look behind you.")
console.log((formatNumber(revisedRandId())))




function revisedRandId() {
     return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

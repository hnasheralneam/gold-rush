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

//Clicks
  clickinGold: 1,
  upgradeClickCost: 100,
  goldPerClick: 0,
  clicks: 0,

//Tools
  bToolCost: 10,
  toolLevel: 1,

//Pickaxes
  pickaxeProfit: 1,
  pickaxeGold: 0,
  buyPickaxeCost: 25,
  pickaxeNumber: 0,
  upgradePickaxeCost: 1000,

//Dwarfs
  dwarfProfit: 5,
  dwarfGold: 0,
  hireDwarfCost: 100,
  dwarfNumber: 0,
  upgradeDwarfCost: 5000,

//Gold mines
  mineProfit: 100,
  mineGold: 0,
  openMineCost: 25000,
  mineNumber: 0,
  upgradeMineCost: 125000,

//Dragons
  dragonProfit: 2000,
  dragonGold: 0,
  hireDragonCost: 150000,
  dragonNumber: 0,
  upgradeDragonCost: 625000,

//Philosopher's Stones
  stoneProfit: 10000,
  stoneGold: 0,
  buyStoneCost: 3000000,
  stoneNumber: 0,
  upgradeStoneCost: 3000000,

//Astroid-mining Station
  stationProfit: 85000,
  stationGold: 0,
  openStationCost: 250000000,
  stationNumber: 0,
  upgradeStationCost: 15000000,

//Leprechauns
  lepProfit: 1000000,
  leprechaunGold: 0,
  hireLeprechaunCost: 1000000000,
  leprechaunNumber: 0,
  upgradeLeprechaunCost: 80000000,

//Golden Sheep
  sheepProfit: 10000000,
  sheepGold: 0,
  hireSheepCost: 250000000000,
  sheepNumber: 0,
  upgradeSheepCost: 400000000,

//Mass rays
  rayProfit: 1000000000,
  rayGold: 0,
  buyRayCost: 2000000000000,
  rayNumber: 0,
  upgradeRayCost: 2000000000,

//Neutron Star Mergers
  mergerProfit: 10000000000,
  mergerGold: 0,
  buyMergerCost: 200000000000000,
  mergerNumber: 0,
  upgradeMergerCost: 10000000000,

  lastTick: Date.now(),
  playerName: 3,
}

function goldPerSecond() {
  return gameData.pickaxeGold + gameData.dwarfGold + gameData.mineGold + gameData.dragonGold + gameData.stoneGold + gameData.stationGold + gameData.leprechaunGold + gameData.sheepGold + gameData.rayGold + gameData.mergerGold + gameData.goldPerClick
}

var gameData = initialGameData

//==========================================================
//Gain Profit
//==========================================================

function collectGold() {
  gameData.gold += gameData.clickinGold
  gameData.clicks += 1
  document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
}

//Spacebar gold
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      gameData.gold += gameData.clickinGold
      document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    }
}

//==========================================================
//Purchase Buildings
//==========================================================

function bTool() {
  if (gameData.gold >= gameData.bToolCost) {
    gameData.gold -= gameData.bToolCost
    gameData.clickinGold += 1
    gameData.bToolCost *= 2
    gameData.toolLevel += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("bTools").innerHTML = "Better Tools<br> Tool Level " + gameData.toolLevel + "<br>Cost: " + (formatNumber(gameData.bToolCost)) + " Gold"
  }
}
function buyPickaxe() {
  if (gameData.gold >= gameData.buyPickaxeCost) {
    gameData.gold -= gameData.buyPickaxeCost
    gameData.pickaxeGold += gameData.pickaxeProfit
    gameData.buyPickaxeCost *= 2//(25 * Math.pow(1.15, gameData.pickaxeNumber)).toFixed(2)   //Price=BaseCost×1.15(#Owned)
    gameData.pickaxeNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("buyPickaxe").innerHTML = "Pickaxe<br> (You have " + gameData.pickaxeNumber + ") <br>Cost: " + (formatNumber(gameData.buyPickaxeCost)) + " Gold"
    document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br>" + (formatNumber(gameData.pickaxeProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  }
}
function hireDwarf() {
  if(gameData.gold >= gameData.hireDwarfCost) {
    gameData.gold -= gameData.hireDwarfCost
    gameData.dwarfGold += gameData.dwarfProfit
    gameData.hireDwarfCost *= 2
    gameData.dwarfNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("hireDwarf").innerHTML = "Dwarf<br> (You have " + gameData.dwarfNumber + ") <br>Cost: " + (formatNumber(gameData.hireDwarfCost)) + " Gold"
    document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  }
}
function openMine() {
  if(gameData.gold >= gameData.openMineCost) {
    gameData.gold -= gameData.openMineCost
    gameData.mineGold += gameData.mineProfit
    gameData.openMineCost *= 2
    gameData.mineNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("openMine").innerHTML = "Gold Mine<br> (You have " + gameData.mineNumber + ") <br>Cost: " + (formatNumber(gameData.openMineCost)) + " Gold"
    document.getElementById("mineGolld").innerHTML = "Gold Mine <br>  " + (formatNumber(gameData.mineProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  }
}
function hireDragon() {
  if(gameData.gold >= gameData.hireDragonCost) {
    gameData.gold -= gameData.hireDragonCost
    gameData.dragonGold += gameData.dragonProfit
    gameData.hireDragonCost *= 2
    gameData.dragonNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("hireDragon").innerHTML = "Dragon<br> (You have " + gameData.dragonNumber + ") <br>Cost: " + (formatNumber(gameData.hireDragonCost)) + " Gold"
    document.getElementById("dragonGolld").innerHTML = "Dragon <br>  " + (formatNumber(gameData.dragonProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  }
}
function buyStone() {
  if(gameData.gold >= gameData.buyStoneCost) {
    gameData.gold -= gameData.buyStoneCost
    gameData.stoneGold += gameData.stoneProfit
    gameData.buyStoneCost *= 2
    gameData.stoneNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("buyStone").innerHTML = "Philosopher's Stone<br> (You have " + gameData.stoneNumber + ") <br>Cost: " + (formatNumber(gameData.buyStoneCost)) + " Gold"
    document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  }
}
function openStation() {
  if(gameData.gold >= gameData.openStationCost) {
    gameData.gold -= gameData.openStationCost
    gameData.stationGold += gameData.stationProfit
    gameData.openStationCost *= 2
    gameData.stationNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("openStation").innerHTML = "Astroid-mining Station<br> (You have " + gameData.stationNumber + ") <br>Cost: " + (formatNumber(gameData.openStationCost)) + " Gold"
    document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  }
}
function hireleprechaun() {
  if(gameData.gold >= gameData.hireLeprechaunCost) {
    gameData.gold -= gameData.hireLeprechaunCost
    gameData.leprechaunGold += gameData.lepProfit
    gameData.hireLeprechaunCost *= 2
    gameData.leprechaunNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("hireLeprechaun").innerHTML = "Leprechaun<br> (You have " + gameData.leprechaunNumber + ") <br>Cost: " + (formatNumber(gameData.hireLeprechaunCost)) + " Gold"
    document.getElementById("lepGolld").innerHTML = "Leprechaun <br>  " + (formatNumber(gameData.lepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  }
}
function hireSheep() {
  if(gameData.gold >= gameData.hireSheepCost) {
    gameData.gold -= gameData.hireSheepCost
    gameData.sheepGold += gameData.sheepProfit
    gameData.hireSheepCost *= 2
    gameData.sheepNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("hireSheep").innerHTML = "Golden Sheep<br> (You have " + gameData.sheepNumber + ") <br>Cost: " + (formatNumber(gameData.hireSheepCost)) + " Gold"
    document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  }
}
function buyRay() {
  if(gameData.gold >= gameData.buyRayCost) {
    gameData.gold -= gameData.buyRayCost
    gameData.rayGold += gameData.rayProfit
    gameData.buyRayCost *= 2
    gameData.rayNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("buyRay").innerHTML = "Mass Ray<br> (You have " + gameData.rayNumber + ") <br>Cost: " + (formatNumber(gameData.buyRayCost)) + " Gold"
    document.getElementById("rayGolld").innerHTML = "Mass Ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  }
}
function buyMerger() {
  if(gameData.gold >= gameData.buyMergerCost) {
    gameData.gold -= gameData.buyMergerCost
    gameData.mergerGold += gameData.mergerProfit
    gameData.buyMergerCost *= 2
    gameData.mergerNumber += 1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("buyMerger").innerHTML = "Neutron Star Merger<br> (You have " + gameData.mergerNumber + ") <br>Cost: " + (formatNumber(gameData.buyMergerCost)) + " Gold"
    document.getElementById("mergerGolld").innerHTML = "Neutron Star Merger<br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source :)."
  }
}

//==========================================================
//Upgrades
//==========================================================

var upgrades = window.setInterval(function() {
  if (gameData.gold >= 25) {
    document.getElementById("c1").style.display = "inline-block";
  }
  if (gameData.pickaxeNumber >= 1) {
    document.getElementById("p1").style.display = "inline-block";
  }
  if (gameData.dwarfNumber >= 1) {
    document.getElementById("d1").style.display = "inline-block";
  }
  if (gameData.mineNumber >= 1) {
    document.getElementById("mi1").style.display = "inline-block";
  }
  if (gameData.dragonNumber >= 1) {
    document.getElementById("dr1").style.display = "inline-block";
  }
  if (gameData.stoneNumber >= 1) {
    document.getElementById("sto1").style.display = "inline-block";
  }
  if (gameData.stationNumber >= 1) {
    document.getElementById("sta1").style.display = "inline-block";
  }
  if (gameData.leprechaunNumber >= 1) {
    document.getElementById("l1").style.display = "inline-block";
  }
  if (gameData.sheepNumber >= 1) {
    document.getElementById("she1").style.display = "inline-block";
  }
  if (gameData.rayNumber >= 1) {
    document.getElementById("r1").style.display = "inline-block";
  }
  if (gameData.mergerNumber >= 1) {
    document.getElementById("me1").style.display = "inline-block";
  }
}, 3000)

function upgradeClick() {
  if (gameData.gold >= gameData.upgradeClickCost) { //add color if avalible
    gameData.gold -= gameData.upgradeClickCost
    gameData.clickinGold *= 2
    gameData.upgradeClickCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upClick").innerHTML = "Cost: " + (formatNumber(gameData.upgradeClickCost)) + " Gold <br> Double click revenue"
  }
}
function upgradePickaxe() {
  if (gameData.gold >= gameData.upgradePickaxeCost) { //add color if avalible
    gameData.gold -= gameData.upgradePickaxeCost
    gameData.pickaxeGold *= 2
    gameData.pickaxeProfit *=2
    gameData.upgradePickaxeCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upPickaxe").innerHTML = "Cost: " + (formatNumber(gameData.upgradePickaxeCost)) + " Gold <br> Multiplies pickaxe revenue by 2"
    document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br>" + (formatNumber(gameData.pickaxeProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  }
}
function upgradeDwarf() {
  if (gameData.gold >= gameData.upgradeDwarfCost) { //add color if avalible
    gameData.gold -=gameData.upgradeDwarfCost
    gameData.dwarfGold *= 2
    gameData.dwarfProfit *=2
    gameData.upgradeDwarfCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upDwarf").innerHTML = "Cost: " + (formatNumber(gameData.upgradeDwarfCost)) + " Gold <br>Multiplies dwarf revenue by 2"
    document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  }
}
function upgradeMine() {
  if (gameData.gold >= gameData.upgradeMineCost) { //add color if avalible
    gameData.gold -=gameData.upgradeMineCost
    gameData.mineGold *= 2
    gameData.mineProfit *=2
    gameData.upgradeMineCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upMine").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeMineCost)) + " Gold<br>Multiplies gold mine revenue by 2"
    document.getElementById("mineGolld").innerHTML = "Gold Mine <br> " + (formatNumber(gameData.mineProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  }
}
function upgradeDragon() {
  if (gameData.gold >= gameData.upgradeDragonCost) { //add color if avalible
    gameData.gold -=gameData.upgradeDragonCost
    gameData.dragonGold *= 2
    gameData.dragonProfit *=2
    gameData.upgradeDragonCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upDragon").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeDragonCost)) + " Gold<br>Multiplies dragon revenue by 2"
    document.getElementById("dragonGolld").innerHTML = "Dragon <br>  " + (formatNumber(gameData.dragonProfit)) + "  GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  }
}
function upgradeStone() {
  if (gameData.gold >= gameData.upgradeStoneCost) { //add color if avalible
    gameData.gold -=gameData.upgradeStoneCost
    gameData.stoneGold *= 2
    gameData.stoneProfit *= 2
    gameData.upgradeStoneCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upStone").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeStoneCost)) + " Gold<br>Multiplies Philosopher's Stone revenue by 2"
    document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  }
}
function upgradeStation() {
  if (gameData.gold >= gameData.upgradeStationCost) { //add color if avalible
    gameData.gold -=gameData.upgradeStationCost
    gameData.stationGold *= 2
    gameData.stationProfit *= 2
    gameData.upgradeStationCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upStation").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeStationCost)) + " Gold<br>Astroid-mining Stations twice as efficient"
    document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  }
}
function upgradeLeprechaun() {
  if (gameData.gold >= gameData.upgradeLeprechaunCost) { //add color if avalible
    gameData.gold -=gameData.upgradeLeprechaunCost
    gameData.leprechaunGold *= 2
    gameData.lepProfit *= 2
    gameData.upgradeLeprechaunCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upLeprechaun").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeLeprechaunCost)) + " Gold <br> Multiplies Leprechaun revenue by 2"
    document.getElementById("lepGolld").innerHTML = "Leprechaun <br>  " + (formatNumber(gameData.lepProfit)) + "  each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  }
}
function upgradeSheep() {
  if (gameData.gold >= gameData.upgradeSheepCost) { //add color if avalible
    gameData.gold -=gameData.upgradeSheepCost
    gameData.sheepGold *= 2
    gameData.sheepProfit *= 2
    gameData.upgradeSheepCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upSheep").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeSheepCost)) + " Gold <br> Multiplies Golden Sheep revenue by 2"
    document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  }
}
function upgradeRay() {
  if (gameData.gold >= gameData.upgradeRayCost) { //add color if avalible
    gameData.gold -=gameData.upgradeRayCost
    gameData.rayGold *= 2
    gameData.rayProfit *= 2
    gameData.upgradeRayCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upRay").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeRayCost)) + " Gold <br> Multiplies Mass Ray revenue by 2"
    document.getElementById("rayGolld").innerHTML = "Mass ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  }
}
function upgradeMerger() {
  if (gameData.gold >= gameData.upgradeMergerCost) { //add color if avalible
    gameData.gold -=gameData.upgradeMergerCost
    gameData.mergerGold *= 2
    gameData.mergerProfit *= 2
    gameData.upgradeMergerCost *= 5
    document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold)) + " Gold Mined"
    document.getElementById("upMerger").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeMergerCost)) + " Gold <br> Neutron Star Mergers twice as efficient"
    document.getElementById("mergerGolld").innerHTML = "Gold Mine <br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold"
  }
}

//==========================================================
//Acheivements
//==========================================================

var acheivments = window.setInterval(function() {
  if (gameData.clicks >= 1) {
      document.getElementById("click1").style.display = "inline-block";
  }
  if (gameData.clicks >= 10) {
      document.getElementById("click2").style.display = "inline-block";
  }
  if (gameData.clicks >= 100) {
      document.getElementById("click3").style.display = "inline-block";
  }
  if (gameData.clicks >= 1000) {
      document.getElementById("click4").style.display = "inline-block";
  }
  if (gameData.clicks >= 10000) {
      document.getElementById("click5").style.display = "inline-block";
  }
  if (gameData.clicks >= 100000) {
      document.getElementById("click6").style.display = "inline-block";
  }
  if (gameData.clicks >= 1000000) {
      document.getElementById("click7").style.display = "inline-block";
  }

  if (gameData.pickaxeNumber >= 1) {
      document.getElementById("pick1").style.display = "inline-block";
  }
  if (gameData.pickaxeNumber >= 5) {
      document.getElementById("pick2").style.display = "inline-block";
  }
  if (gameData.pickaxeNumber >= 25) {
      document.getElementById("pick3").style.display = "inline-block";
  }
  if (gameData.pickaxeNumber >= 50) {
      document.getElementById("pick4").style.display = "inline-block";
  }
  if (gameData.pickaxeNumber >= 100) {
      document.getElementById("pick5").style.display = "inline-block";
  }

  if (gameData.dwarfNumber >= 1) {
      document.getElementById("dwarf1").style.display = "inline-block";
  }
  if (gameData.dwarfNumber >= 5) {
      document.getElementById("dwarf2").style.display = "inline-block";
  }
  if (gameData.dwarfNumber >= 25) {
      document.getElementById("dwarf3").style.display = "inline-block";
  }
  if (gameData.dwarfNumber >= 50) {
      document.getElementById("dwarf4").style.display = "inline-block";
  }
  if (gameData.dwarfNumber >= 100) {
      document.getElementById("dwarf5").style.display = "inline-block";
  }

  if (gameData.mineNumber >= 1) {
      document.getElementById("mine1").style.display = "inline-block";
  }
  if (gameData.mineNumber >= 5) {
      document.getElementById("mine2").style.display = "inline-block";
  }
  if (gameData.mineNumber >= 25) {
      document.getElementById("mine3").style.display = "inline-block";
  }
  if (gameData.mineNumber >= 50) {
      document.getElementById("mine4").style.display = "inline-block";
  }
  if (gameData.mineNumber >= 100) {
      document.getElementById("mine5").style.display = "inline-block";
  }

  if (gameData.dragonNumber >= 1) {
        document.getElementById("dragon1").style.display = "inline-block";
    }
  if (gameData.dragonNumber >= 5) {
        document.getElementById("dragon2").style.display = "inline-block";
    }
  if (gameData.dragonNumber >= 25) {
        document.getElementById("dragon3").style.display = "inline-block";
    }
  if (gameData.dragonNumber >= 50) {
        document.getElementById("dragon4").style.display = "inline-block";
    }
  if (gameData.dragonNumber >= 100) {
        document.getElementById("dragon5").style.display = "inline-block";
    }

  if (gameData.stoneNumber >= 1) {
          document.getElementById("stone1").style.display = "inline-block";
      }
  if (gameData.stoneNumber >= 5) {
          document.getElementById("stone2").style.display = "inline-block";
      }
  if (gameData.stoneNumber >= 25) {
          document.getElementById("stone3").style.display = "inline-block";
      }
  if (gameData.stoneNumber >= 50) {
          document.getElementById("stone4").style.display = "inline-block";
      }
  if (gameData.stoneNumber >= 100) {
          document.getElementById("stone5").style.display = "inline-block";
      }

  if (gameData.stationNumber >= 1) {
            document.getElementById("station1").style.display = "inline-block";
        }
  if (gameData.stationNumber >= 5) {
            document.getElementById("station2").style.display = "inline-block";
        }
  if (gameData.stationNumber >= 25) {
            document.getElementById("station3").style.display = "inline-block";
        }
  if (gameData.stationNumber >= 50) {
            document.getElementById("station4").style.display = "inline-block";
        }
  if (gameData.stationNumber >= 100) {
            document.getElementById("station5").style.display = "inline-block";
        }

  if (gameData.leprechaunNumber >= 1) {
              document.getElementById("lep1").style.display = "inline-block";
          }
  if (gameData.leprechaunNumber >= 5) {
              document.getElementById("lep2").style.display = "inline-block";
          }
  if (gameData.leprechaunNumber >= 25) {
              document.getElementById("lep3").style.display = "inline-block";
          }
  if (gameData.leprechaunNumber >= 50) {
              document.getElementById("lep4").style.display = "inline-block";
          }
  if (gameData.leprechaunNumber >= 100) {
              document.getElementById("lep5").style.display = "inline-block";
          }

  if (gameData.sheepNumber >= 1) {
                document.getElementById("sheep1").style.display = "inline-block";
            }
  if (gameData.sheepNumber >= 5) {
                document.getElementById("sheep2").style.display = "inline-block";
            }
  if (gameData.sheepNumber >= 25) {
                document.getElementById("sheep3").style.display = "inline-block";
            }
  if (gameData.sheepNumber >= 50) {
                document.getElementById("sheep4").style.display = "inline-block";
            }
  if (gameData.sheepNumber >= 100) {
                document.getElementById("sheep5").style.display = "inline-block";
            }

  if (gameData.rayNumber >= 1) {
                  document.getElementById("ray1").style.display = "inline-block";
              }
  if (gameData.rayNumber >= 5) {
                  document.getElementById("ray2").style.display = "inline-block";
              }
  if (gameData.rayNumber >= 25) {
                  document.getElementById("ray3").style.display = "inline-block";
              }
  if (gameData.rayNumber >= 50) {
                  document.getElementById("ray4").style.display = "inline-block";
              }
  if (gameData.rayNumber >= 100) {
                  document.getElementById("ray5").style.display = "inline-block";
              }

  if (gameData.mergerNumber >= 1) {
                    document.getElementById("merger1").style.display = "inline-block";
                }
  if (gameData.mergerNumber >= 5) {
                    document.getElementById("merger2").style.display = "inline-block";
                }
  if (gameData.mergerNumber >= 25) {
                    document.getElementById("merger3").style.display = "inline-block";
                }
  if (gameData.mergerNumber >= 50) {
                    document.getElementById("merger4").style.display = "inline-block";
                }
  if (gameData.mergerNumber >= 100) {
                    document.getElementById("merger5").style.display = "inline-block";
                }
}, 5000)

//==========================================================
//Main Game Loop
//==========================================================

var mainGameLoop = window.setInterval(function() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now()
  gameData.gold += Math.round(goldPerSecond()  * (diff / 1000))
  document.getElementById("goldMined").innerHTML = (formatNumber(gameData.gold))+ " Gold Mined"

  if (gameData.gold >= (gameData.bToolCost / 2) || gameData.toolLevel >= 1) {
    document.getElementById("bTools").style.display = "inline";
  }
  if (gameData.gold >= gameData.bToolCost) {
    document.getElementById("bTools").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("bTools").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.buyPickaxeCost / 2) || gameData.pickaxeNumber >= 1) {
    document.getElementById("buyPickaxe").style.display = "inline";
  }
  if (gameData.gold >= gameData.buyPickaxeCost) {
    document.getElementById("buyPickaxe").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("buyPickaxe").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.hireDwarfCost / 2) || gameData.dwarfNumber >= 1) {
    document.getElementById("hireDwarf").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireDwarfCost) {
    document.getElementById("hireDwarf").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("hireDwarf").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.openMineCost / 2) || gameData.mineNumber >= 1) {
    document.getElementById("openMine").style.display = "inline";
  }
  if (gameData.gold >= gameData.openMineCost) {
    document.getElementById("openMine").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("openMine").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.hireDragonCost / 2) || gameData.dragonNumber >= 1) {
    document.getElementById("hireDragon").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireDragonCost) {
    document.getElementById("hireDragon").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("hireDragon").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.buyStoneCost / 2) || gameData.stoneNumber >= 1) {
    document.getElementById("buyStone").style.display = "inline";
  }
  if (gameData.gold >= gameData.buyStoneCost) {
    document.getElementById("buyStone").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("buyStone").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.openStationCost / 2) || gameData.stationNumber >= 1) {
    document.getElementById("openStation").style.display = "inline";
  }
  if (gameData.gold >= gameData.openStationCost) {
    document.getElementById("openStation").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("openStation").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.hireLeprechaunCost / 2) || gameData.leprechaunNumber >= 1) {
    document.getElementById("hireLeprechaun").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireLeprechaunCost) {
    document.getElementById("hireLeprechaun").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("hireLeprechaun").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.hireSheepCost / 2) || gameData.sheepNumber >= 1) {
    document.getElementById("hireSheep").style.display = "inline";
  }
  if (gameData.gold >= gameData.hireSheepCost) {
    document.getElementById("hireSheep").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("hireSheep").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.buyRayCost / 2) || gameData.rayNumber >= 1) {
    document.getElementById("buyRay").style.display = "inline";
  }
  if (gameData.gold >= gameData.buyRayCost) {
    document.getElementById("buyRay").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("buyRay").style.backgroundColor = "#333";
  }
  if (gameData.gold >= (gameData.buyMergerCost / 2) || gameData.mergerNumber >= 1) {
    document.getElementById("buyMerger").style.display = "inline";
  }
  if (gameData.gold >= gameData.buyMergerCost) {
    document.getElementById("buyMerger").style.backgroundColor = "#ffffbd";
  }
  else {
    document.getElementById("buyMerger").style.backgroundColor = "#333";
  }

  document.getElementById("playerrName").innerHTML = gameData.playerName + "'s Mine";
  document.title = (formatNumber(gameData.gold)) + " Gold";
  document.getElementById("gpc").innerHTML = (formatNumber(gameData.clickinGold)) + " Gold Per Click";
  document.getElementById("gps").innerHTML = (formatNumber(goldPerSecond())) + " Gold Per Second";
  document.getElementById("gpm").innerHTML = (formatNumber(goldPerSecond() * 60)) + " Gold Per Minute";
  document.getElementById("g0pher").innerHTML = (formatNumber(goldPerSecond() * 60 * 60)) + " Gold Per Hour";
  document.getElementById("gpd").innerHTML = (formatNumber(goldPerSecond() * 60 * 60 * 24)) + " Gold Per Day";
  document.getElementById("gpw").innerHTML = (formatNumber(goldPerSecond() * 60 * 60 * 24 * 7)) + " Gold Per Week";
  document.getElementById("gpM").innerHTML = (formatNumber(goldPerSecond() * 60 * 60 * 24 * 7 * 4)) + " Gold Per Month";
  document.getElementById("gpy").innerHTML = (formatNumber(goldPerSecond() * 60 * 60 * 24 * 7 * 4 * 12)) + " Gold Per Year";
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("goldRushSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldRushSave"))
if (savegame !== null) {
  gameData = savegame
}

//==========================================================
//Math
//==========================================================

//Add commas
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//fix pricing
//var number = 77.77777;

//console.log(number.toFixed(1))


//==========================================================
//Settings
//==========================================================

function restart() {
  gameData = initialGameData
  localStorage.setItem("goldRushSave", JSON.stringify(gameData))
  document.location.href = ("")
}

function save() {
  localStorage.setItem("goldRushSave", JSON.stringify(gameData))
}

function dark() {
  document.getElementById("bod").style.background = "#383838";
  document.getElementById("bod").style.color = "#fff";
  document.getElementById("news").style.background = "#737373";
  document.getElementById("upgrades").style.background = "#737373";
  document.getElementById("acheive").style.background = "#737373";
  document.getElementById("settings").style.background = "#737373";
  document.getElementById("b1").style.background = "#737373";
  document.getElementById("b2").style.background = "#737373";
  document.getElementById("b3").style.background = "#737373";
  document.getElementById("b4").style.background = "#737373";
  document.getElementById("bu").style.background = "#737373";
  document.getElementById("gain").style.background = "#737373";
  image = document.getElementById('gollllld');
  image.src = "goldrushDark.png";
  //document.getElementById("gain").style.background = "#737373";
  //document.getElementById("gollllld").scr = "file:///C:/Users/theho/OneDrive/Desktop/Gold%20Rush/Images/goldrushDark.png?time=1595009551290";

  document.getElementById("bTools").style.background = "#454545";
  document.getElementById("bTools").style.color = "#fff";
  document.getElementById("bTools").style.fontFamily = "times";
  document.getElementById("bTools").style.border = "outset 5px lightblue";

  document.getElementById("buyPickaxe").style.background = "#454545";
  document.getElementById("buyPickaxe").style.color = "#fff";
  document.getElementById("buyPickaxe").style.fontFamily = "times";
  document.getElementById("buyPickaxe").style.border = "outset 5px lightblue";

  document.getElementById("hireDwarf").style.background = "#454545";
  document.getElementById("hireDwarf").style.color = "#fff";
  document.getElementById("hireDwarf").style.fontFamily = "times";
  document.getElementById("hireDwarf").style.border = "outset 5px lightblue";

  document.getElementById("openMine").style.background = "#454545";
  document.getElementById("openMine").style.color = "#fff";
  document.getElementById("openMine").style.fontFamily = "times";
  document.getElementById("openMine").style.border = "outset 5px lightblue";

  document.getElementById("hireDragon").style.background = "#454545";
  document.getElementById("hireDragon").style.color = "#fff";
  document.getElementById("hireDragon").style.fontFamily = "times";
  document.getElementById("hireDragon").style.border = "outset 5px lightblue";

  document.getElementById("buyStone").style.background = "#454545";
  document.getElementById("buyStone").style.color = "#fff";
  document.getElementById("buyStone").style.fontFamily = "times";
  document.getElementById("buyStone").style.border = "outset 5px lightblue";

  document.getElementById("openStation").style.background = "#454545";
  document.getElementById("openStation").style.color = "#fff";
  document.getElementById("openStation").style.fontFamily = "times";
  document.getElementById("openStation").style.border = "outset 5px lightblue";

  document.getElementById("hireLeprechaun").style.background = "#454545";
  document.getElementById("hireLeprechaun").style.color = "#fff";
  document.getElementById("hireLeprechaun").style.fontFamily = "times";
  document.getElementById("hireLeprechaun").style.border = "outset 5px lightblue";

  document.getElementById("hireSheep").style.background = "#454545";
  document.getElementById("hireSheep").style.color = "#fff";
  document.getElementById("hireSheep").style.fontFamily = "times";
  document.getElementById("hireSheep").style.border = "outset 5px lightblue";

  document.getElementById("buyRay").style.background = "#454545";
  document.getElementById("buyRay").style.color = "#fff";
  document.getElementById("buyRay").style.fontFamily = "times";
  document.getElementById("buyRay").style.border = "outset 5px lightblue";

  document.getElementById("buyMerger").style.background = "#454545";
  document.getElementById("buyMerger").style.color = "#fff";
  document.getElementById("buyMerger").style.fontFamily = "times";
  document.getElementById("buyMerger").style.border = "outset 5px lightblue";

}

function light() {
  document.location.href = ("")
}

//==========================================================
//News
//==========================================================

var allNews = [
  'You go mining somtimes',
]
var pickaxeNews = [
  'News: New type of pickaxe coming out, looks suspiciously like normal iron.',
  'News: Purchases of pickaxes on the rise for both practical and decorative purposes.',
  'News: Gold industry gains a complete monopoly over the pickaxe industry.',
]
var dwarfNews = [
  'News: Dwarfs stop human miners from going to work, "They only get in the way."',
  'News: Reports of "Little people weilding pickaxes" increasing daily',
  'News: Human miners losing their jobs as dwarfs overtake the mining industry, "not necessarily a bad thing" says retired miner',
  'News: Scientist fear dwarfs will "take complete controll of the universe", robots disappointed.',
  'News: Dwarfs rights movment spreading across the globe, dwarfs demand equality and voting rights.',
  'News: Gold mine collapses, dwarfs demand safer workplaces.',
]
var mineNews = [
  'News: Mines opening everywhere, environmentalists worried.',
  'News: Coal and diamond mines going out of business as gold mines reign supreme.',
  'News: "Maybe we should stop drilling holes in the earth." says random man.',
  'News: Mines inhabited by creatures from the dawn of time, all journalists investingating mysteriously vanished.',
]
var dragonNews = [
  'News: Dragon eats poodle, owner furious: "The monster! I\'ll have his skin for my handbag!"',
  'News: Gold dragons cause havoc worldwide as they search for gold-hoarding locations.',
  'News: Scientist warn people to stay indoors during dragon breeding season."It\'s for your own overall health."',
  'News: Global dragon-disease pandemic continuing unhindered, doctors searching for cure.',
  'New: Dragon babysitters needed becase all parents busy hoarding gold.',
  'News: Sales of dragon scale jackets skyrocketing, encouraging dragon products market.',
  'News: Grass-fed dragon milk, new lactose-free substitute to cow milk.',
]
var stoneNews = [
  'News: geologist strongly against turning rocks into gold; "You shall not steal our invaluable specimins!"'
]
var stationNews = [

]
var lepNews = [
  'News: Leprechaun becomes politician, world leaders upset.',
  'News: Rainbows occuring more and more often, leprechaun suspected.',
]
var sheepNews = [
  'News: New golden sheep breeds coming out, including golden-merino, golden-lincon and golden-corriedale.',
  'News: Market sees a dramatic upturn in the sales of golden fleece jackets.',
]
var rayNews = [
  'News: Warning: do not stand in front of mass ray... actually, on second thought, do. (hehe, more gold)',
  'News: Mass rays wreak havoc, turning multiple minor plantets into soild gold.',
]
var mergerNews = [
  'News: Scientist figure out a way to make gold by merging neutron stars, "Eureka! Wait a moment- I think this time we actually went to far..."',
]

var news = window.setInterval(function (){
  var trueNews = allNews
  if (gameData.pickaxeNumber >= 1) {
    trueNews = trueNews.concat(pickaxeNews)
  }
  if (gameData.dwarfNumber >= 1) {
    trueNews = trueNews.concat(dwarfNews)
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
  var randomallNews = trueNews[Math.floor(Math.random() * trueNews.length)];
  document.getElementById("news").innerHTML = randomallNews;
}, 12000)

/*
8 news per item
if much gold ->
'News: Ordinary household items more commonly made of gold to deal with gold surplus.',
'News: Random woman asks: "What are we going to do with all this gold?", everyone ignores her.',
'News: Rumered discoveries of Otherworld portals disrupting world peace.',
*/
//==========================================================
//Onload
//==========================================================

function gameLayout() {
//Upgrade Costs
  document.getElementById("upClick").innerHTML = "Cost: " + (formatNumber(gameData.upgradeClickCost)) + " Gold <br> Double click revenue"
  document.getElementById("upPickaxe").innerHTML = "Cost: " + (formatNumber(gameData.upgradePickaxeCost)) + " Gold <br> Multiplies pickaxe revenue by 2"
  document.getElementById("upDwarf").innerHTML = "Cost: " + (formatNumber(gameData.upgradeDwarfCost)) + " Gold<br> Multiplies dwarf revenue by 2"
  document.getElementById("upMine").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeMineCost)) + " Gold<br> Multiplies gold mine revenue by 2"
  document.getElementById("upDragon").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeDragonCost)) + " Gold<br> Multiplies dragon revenue by 2"
  document.getElementById("upStone").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeStoneCost)) + " Gold<br>Multiplies Philosopher's Stone revenue by 2"
  document.getElementById("upStation").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeStationCost)) + " Gold<br>Astroid-mining Stations twice as efficient"
  document.getElementById("upLeprechaun").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeLeprechaunCost)) + " Gold <br> Multiplies Leprechaun revenue by 2"
  document.getElementById("upSheep").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeSheepCost)) + " Gold <br> Multiplies Golden Sheep revenue by 2"
  document.getElementById("upRay").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeRayCost)) + " Gold <br> Multiplies Mass Ray revenue by 2"
  document.getElementById("upMerger").innerHTML = "Cost: " +  (formatNumber(gameData.upgradeMergerCost)) + " Gold <br> Neutron Star Mergers twice as efficient"

//Gold per Building
  document.getElementById("pickaxeGolld").innerHTML = "Pickaxe <br> " + (formatNumber(gameData.pickaxeProfit)) + " GPS <br> Producing " + (formatNumber(gameData.pickaxeGold)) + " GPS<br>A sturdy pickaxe to mine gold with"
  document.getElementById("dwarfGolld").innerHTML = "Dwarf  <br> " + (formatNumber(gameData.dwarfProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dwarfGold)) + " GPS<br>An assistant to help you mine gold"
  document.getElementById("mineGolld").innerHTML = "Gold Mine <br> " + (formatNumber(gameData.mineProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mineGold)) + " GPS<br>A new mine to mine gold in"
  document.getElementById("dragonGolld").innerHTML = "Dragon <br> " + (formatNumber(gameData.dragonProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.dragonGold)) + " GPS<br>A nice dragon to steal gold and hoard it"
  document.getElementById("stoneGolld").innerHTML = "Philosopher's Stone <br> " + (formatNumber(gameData.stoneProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stoneGold)) + " GPS<br>An alchemy stone that turns ordinary rocks into gold"
  document.getElementById("stationGolld").innerHTML = "Astroid-mining Station <br> " + (formatNumber(gameData.stationProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.stationGold)) + " GPS<br>A space station that mines astroids for gold"
  document.getElementById("lepGolld").innerHTML = "Leprechaun <br> " + (formatNumber(gameData.lepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.leprechaunGold)) + " GPS<br>Uses magical leprechaun powers to find gold at the end of rainbows"
  document.getElementById("sheepGolld").innerHTML = "Golden Sheep <br> " + (formatNumber(gameData.sheepProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.sheepGold)) + " GPS<br>A cute round fluffy sheep with golden fleece"
  document.getElementById("rayGolld").innerHTML = "Mass Ray <br> " + (formatNumber(gameData.rayProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.rayGold)) + " GPS<br>Turns mass into gold"
  document.getElementById("mergerGolld").innerHTML = "Neutron Star Merger<br> " + (formatNumber(gameData.mergerProfit)) + " GPS each<br> Producing " + (formatNumber(gameData.mergerGold)) + " GPS<br>Merges neutron stars to create gold (find what you want at it's source :)."

//Building Count
  document.getElementById("bTools").innerHTML = "Better Tools<br> Tool Level " + gameData.toolLevel + "<br>Cost: " + (formatNumber(gameData.bToolCost)) + " Gold"
  document.getElementById("buyPickaxe").innerHTML = "Pickaxe<br> (You have " + gameData.pickaxeNumber + ") <br>Cost: " + (formatNumber(gameData.buyPickaxeCost)) + " Gold"
  document.getElementById("hireDwarf").innerHTML = "Dwarf<br> (You have " + gameData.dwarfNumber + ") <br>Cost: " + (formatNumber(gameData.hireDwarfCost)) + " Gold"
  document.getElementById("openMine").innerHTML = "Gold Mine<br> (You have " + gameData.mineNumber + ") <br>Cost: " + (formatNumber(gameData.openMineCost)) + " Gold"
  document.getElementById("hireDragon").innerHTML = "Dragon<br> (You have " + gameData.dragonNumber + ") <br>Cost: " + (formatNumber(gameData.hireDragonCost)) + " Gold"
  document.getElementById("buyStone").innerHTML = "Philosopher's Stone<br> (You have " + gameData.stoneNumber + ") <br>Cost: " + (formatNumber(gameData.buyStoneCost)) + " Gold"
  document.getElementById("openStation").innerHTML = "Astroid-mining Station<br> (You have " + gameData.stationNumber + ") <br>Cost: " + (formatNumber(gameData.openStationCost)) + " Gold"
  document.getElementById("hireLeprechaun").innerHTML = "Leprechaun<br> (You have " + gameData.leprechaunNumber + ") <br>Cost: " + (formatNumber(gameData.hireLeprechaunCost)) + " Gold"
  document.getElementById("hireSheep").innerHTML = "Golden Sheep<br> (You have " + gameData.sheepNumber + ") <br>Cost: " + (formatNumber(gameData.hireSheepCost)) + " Gold"
  document.getElementById("buyRay").innerHTML = "Mass Ray<br> (You have " + gameData.rayNumber + ") <br>Cost: " + (formatNumber(gameData.buyRayCost)) + " Gold"
  document.getElementById("buyMerger").innerHTML = "Neutron Star Merger<br> (You have " + gameData.mergerNumber + ") <br>Cost: " + (formatNumber(gameData.buyMergerCost)) + " Gold"

  document.getElementById("upClick").style.display = "inline-block";
  document.getElementById("playerrName").innerHTML = gameData.playerName + "'s Mine";
  if (gameData.playerName == 3) {
    gameSetup();
  }
}
window.onload = gameLayout;

//==========================================================
//Welcome Instructions
//==========================================================

function gameSetup() {
  alert("This is an incremental game. To earn gold, click on the asteroid or the space bar, and when you get enough, invest it in gold producing items. Enjoy the game.")
  gameData.playerName = prompt("What is your name?(don't use your real name)")
}

//==========================================================
//Console
//==========================================================

console.log("Look behind you.")

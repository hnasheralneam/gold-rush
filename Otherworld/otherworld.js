//==========================================================
//Copywrite and Opening Information
//==========================================================

//Copyright meeeeee 2020 A.D.
// If you continue you shall get the majority of the game spoiled for you. Also, it's a bit messy

//==========================================================
//A Warm Welcome
//==========================================================

//alert("Welcome to the Otherworld. Have a nice trip.")
//var username = prompt ("What shall you be called while you are in the Otherworld? (this is important, but don't use you're real name)");
//console.log("Hello, " + username)


//==========================================================
//Game Data
//==========================================================

var gameData = {
  otherStars: 0,
  otherStarsPerSecond: 0,

  exploreSystemCost: 100,
  systemCount: 0,
  exploreSClusterCost: 500,
  sClusterCount: 0,
  exploreNebulaCost: 1000,
  nebulaCount: 0,
  exploreBlackCost: 5000,
  blackCount: 0,
  exploreGalaxyCost: 25000,
  galaxyCount: 0,
  explorePCluster: 100000,
  pClusterCount: 0,
  exploreGClusterCost: 800000,
  gClusterCount: 0,
  exploreGSClusteCost: 4500000,
  gSClusterCount: 0,
  exploreGWallCost: 50000000,
  gWallCount: 0,
  exploreUniverseCost: 1000000000000,
  universeCount: 0,

  lastTick: Date.now()
}

//==========================================================
//Gain Profit
//==========================================================

function collectOtherStar() {
  gameData.otherStars += 1
  document.getElementById("otherStars").innerHTML = (formatNumber(gameData.otherStars)) + " Otherstars"
}

//==========================================================
//Purchase Buildings
//==========================================================

function exploreSystem() {
  if (gameData.otherStars >= gameData.exploreSystemCost) {
    gameData.otherStars -= gameData.exploreSystemCost
    gameData.otherStarsPerSecond += 5
    gameData.exploreSystemCost *= 1.5
    gameData.systemCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreSystem").innerHTML = "Solar System<br> (You have " + gameData.systemCount + ") <br>Cost: " + (formatNumber(gameData.exploreSystemCost)) + " Otherstars"
  }
}
function exploreSCluster() {
  if (gameData.otherStars >= gameData.exploreSClusterCost) {
    gameData.otherStars -= gameData.exploreSClusterCost
    gameData.otherStarsPerSecond += 10
    gameData.exploreSClusterCost *= 1.5
    gameData.sClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreSCluster").innerHTML = "Star Cluster<br> (You have " + gameData.sClusterCount + ") <br>Cost: " + (formatNumber(gameData.exploreSClusterCost
function exploreSCluster() {
  if(gameData.otherStars >= gameData.exploreSClusterCost) {
    gameData.otherStars -= gameData.exploreSClusterCost
    gameData.otherStarsPerSecond += 15
    gameData.exploreSClusterCost *= 1.5
    gameData.sClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreSCluster").innerHTML = "Star Cluster<br> (You have " + gameData.sClusterCount + ") <br>Cost: " + (formatNumber(gameData.exploreSClusterCost)) + " Otherstars"
  }
}
function exploreNebula() {
  if (gameData.otherStars >= gameData.exploreNebulaCost) {
    gameData.otherStars -= gameData.exploreNebulaCost
    gameData.otherStarsPerSecond += 50
    gameData.exploreNebulaCost *= 1.5
    gameData.nebulaCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreNebula").innerHTML = "Nebula<br> (You have " + gameData.nebulaCount + ") <br>Cost: " + (formatNumber(gameData.exploreNebulaCost)) + " Otherstars"
  }
}
function exploreBlack() {
  if (gameData.otherStars >= gameData.exploreBlackCost) {
    gameData.otherStars -= gameData.exploreBlackCost
    gameData.otherStarsPerSecond += 125
    gameData.exploreBlackCost *= 1.5
    gameData.blackCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreBlack").innerHTML = "Back Hole<br> (You have " + gameData.blackCount + ") <br>Cost: " + (formatNumber(gameData.exploreBlackCost)) + " Otherstars"
  }
}
function exploreGalaxy() {
  if (gameData.otherStars >= gameData.exploreGalaxyCost) {
    gameData.otherStars -= gameData.exploreGalaxyCost
    gameData.otherStarsPerSecond += 300
    gameData.exploreGalaxyCost *= 1.5
    gameData.galaxyCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreGalaxy").innerHTML = "Galaxy<br> (You have " + gameData.galaxyCount + ") <br>Cost: " + (formatNumber(gameData.exploreGalaxyCost)) + " Otherstars"
  }
}
function explorePCluster() {
  if (gameData.otherStars >= gameData.explorePClusterCost) {
    gameData.otherStars -= gameData.explorePClusterCost
    gameData.otherStarsPerSecond += 500
    gameData.explorePClusterCost *= 1.5
    gameData.pClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("explorePCluster").innerHTML = "Protocluster<br> (You have " + gameData.pClusterCount + ") <br>Cost: " + (formatNumber(gameData.explorePClusterCost)) + " Otherstars"
  }
}
function exploreGCluster() {
  if (gameData.otherStars >= gameData.exploreGClusterCost) {
    gameData.otherStars -= gameData.exploreGClusterCost
    gameData.otherStarsPerSecond += 1250
    gameData.exploreGClusterCost *= 1.5
    gameData.gClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreGCluster").innerHTML = "Galaxy Cluster<br> (You have " + gameData.gClusterCount + ") <br>Cost: " + (formatNumber(gameData.exploreGClusterCost)) + " Otherstars"
  }
}
function exploreGSCluster() {
  if (gameData.otherStars >= gameData.exploreGSClusterCost) {
    gameData.otherStars -= gameData.exploreGSClusterCost
    gameData.otherStarsPerSecond += 5000
    gameData.exploreGSClusterCost *= 1.5
    gameData.gSClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreGSCluster").innerHTML = "Galaxy Supercluster<br> (You have " + gameData.gSClusterCount + ") <br>Cost: " + (formatNumber(gameData.exploreGSClusterCost)) + " Otherstars"
  }
}
function exploreGWall() {
  if (gameData.otherStars >= gameData.exploreGWallCost) {
    gameData.otherStars -= gameData.exploreGWallCost
    gameData.otherStarsPerSecond += 20000
    gameData.exploreGWallCost *= 1.5
    gameData.gWallCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreGWall").innerHTML = "Galaxy Walls<br> (You have " + gameData.gWallCount + ") <br>Cost: " + (formatNumber(gameData.exploreGWallCost)) + " Otherstars"
  }
}
function exploreUniverse() {
  if (gameData.otherStars >= gameData.exploreUniverseCost) {
    gameData.otherStars -= gameData.exploreUniverseCost
    gameData.otherStarsPerSecond += 1000000
    gameData.exploreUniverseCost *= 1.5
    gameData.universeCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreUniverse").innerHTML = "Universe <br> (You have " + gameData.universeCount + ") <br>Cost: " + (formatNumber(gameData.exploreUniverseCost)) + " Otherstars"
  }
}

//==========================================================
//Main Game Loop
//==========================================================

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

var mainGameLoop = window.setInterval(function() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now()
  gameData.otherStars += Math.round(gameData.otherStarsPerSecond  * (diff / 1000))
  document.getElementById("otherStars").innerHTML = (formatNumber(gameData.otherStars)) + " Otherstars"
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("otherworldSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("otherworldSave"))
if (savegame !== null) {
  gameData = savegame
}

//==========================================================
//Console
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
//Console
//==========================================================

console.log("So you've made it this far.")

//==========================================================
//Copywrite and Opening Information
//==========================================================

//Copyright meeeeee 2020 A.D.
// If you continue you shall get the majority of the game spoiled for you. Also, it's a bit messy

//==========================================================
//A Warm Welcome
//==========================================================

alert("Welcome to the Otherworld. Have a nice trip.")
var username = prompt ("What shall you be called while you are in the Otherworld? (this is important, but don't use you're real name)");
console.log("Hello, " + username)


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
  if (gameData.otherStars >= gameData.exploreSystemCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreSystemCost
    gameData.otherStarsPerSecond += 5
    gameData.exploreSystemCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.systemCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreSystem").innerHTML = "Solar System<br> (You have " + gameData.systemCount + ") <br>Cost: " + (formatNumber(gameData.exploreSystemCost)) + " Otherstars"
  }
}
function exploreSCluster() {
  if (gameData.otherStars >= gameData.exploreSClusterCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreSClusterCost
    gameData.otherStarsPerSecond += 5
    gameData.exploreSClusterCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.sClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreSCluster").innerHTML = "Star Cluster<br> (You have " + gameData.sClusterCount + ") <br>Cost: " + (formatNumber(gameData.exploreSClusterCost)) + " Otherstars"
  }
}
function exploreSCluster() {
  if(gameData.otherStars >= gameData.exploreSClusterCost) {
    gameData.otherStars -=gameData.exploreSClusterCost
    gameData.otherStarsPerSecond += 15
    gameData.exploreSClusterCost *= 2
    gameData.sClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreSCluster").innerHTML = "Star Cluster<br> (You have " + gameData.sClusterCount + ") <br>Cost: " + (formatNumber(gameData.exploreSClusterCost)) + " Otherstars"
  }
}
function exploreNebula() {
  if (gameData.otherStars >= gameData.exploreNebulaCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreNebulaCost
    gameData.otherStarsPerSecond += 50
    gameData.exploreNebulaCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.nebulaCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreNebula").innerHTML = "Nebula<br> (You have " + gameData.nebulaCount + ") <br>Cost: " + (formatNumber(gameData.exploreNebulaCost)) + " Otherstars"
  }
}
function exploreBlack() {
  if (gameData.otherStars >= gameData.exploreBlackCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreBlackCost
    gameData.otherStarsPerSecond += 125
    gameData.exploreBlackCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.blackCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreBlack").innerHTML = "Back Hole<br> (You have " + gameData.blackCount + ") <br>Cost: " + (formatNumber(gameData.exploreBlackCost)) + " Otherstars"
  }
}
function exploreGalaxy() {
  if (gameData.otherStars >= gameData.exploreGalaxyCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreGalaxyCost
    gameData.otherStarsPerSecond += 300
    gameData.exploreGalaxyCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.galaxyCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreGalaxy").innerHTML = "Galaxy<br> (You have " + gameData.galaxyCount + ") <br>Cost: " + (formatNumber(gameData.exploreGalaxyCost)) + " Otherstars"
  }
}
function explorePCluster() {
  if (gameData.otherStars >= gameData.explorePClusterCost) { //add color if avalible
    gameData.otherStars -=gameData.explorePClusterCost
    gameData.otherStarsPerSecond += 500
    gameData.explorePClusterCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.pClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("explorePCluster").innerHTML = "Protocluster<br> (You have " + gameData.pClusterCount + ") <br>Cost: " + (formatNumber(gameData.explorePClusterCost)) + " Otherstars"
  }
}
function exploreGCluster() {
  if (gameData.otherStars >= gameData.exploreGClusterCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreGClusterCost
    gameData.otherStarsPerSecond += 1250
    gameData.exploreGClusterCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.gClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreGCluster").innerHTML = "Galaxy Cluster<br> (You have " + gameData.gClusterCount + ") <br>Cost: " + (formatNumber(gameData.exploreGClusterCost)) + " Otherstars"
  }
}
function exploreGSCluster() {
  if (gameData.otherStars >= gameData.exploreGSClusterCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreGSClusterCost
    gameData.otherStarsPerSecond += 5000
    gameData.exploreGSClusterCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.gSClusterCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreGSCluster").innerHTML = "Galaxy Supercluster<br> (You have " + gameData.gSClusterCount + ") <br>Cost: " + (formatNumber(gameData.exploreGSClusterCost)) + " Otherstars"
  }
}
function exploreGWall() {
  if (gameData.otherStars >= gameData.exploreGWallCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreGWallCost
    gameData.otherStarsPerSecond += 20000
    gameData.exploreGWallCost *= 2 //Price=BaseCost×1.15(#Owned)
    gameData.gWallCount += 1
    document.getElementById("otherStars").innerHTML = gameData.otherStars + " Otherstars"
    document.getElementById("exploreGWall").innerHTML = "Galaxy Walls<br> (You have " + gameData.gWallCount + ") <br>Cost: " + (formatNumber(gameData.exploreGWallCost)) + " Otherstars"
  }
}
function exploreUniverse() {
  if (gameData.otherStars >= gameData.exploreUniverseCost) { //add color if avalible
    gameData.otherStars -=gameData.exploreUniverseCost
    gameData.otherStarsPerSecond += 1000000
    gameData.exploreUniverseCost *= 2 //Price=BaseCost×1.15(#Owned)
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

console.log("So you've made it this far.")

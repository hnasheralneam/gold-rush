//==========================================================
//Copywrite and Opening Information
//==========================================================

//Copyright meeeeee 2020 A.D.
// If you continue you shall get the majority of the game spoiled for you. Also, it's a bit messy

//==========================================================
//A Warm Welcome
//==========================================================

function gameSetup() {
   alert("Welcome to the Otherworld. Have a nice trip.");
   let username = prompt ("What shall you be called while you are in the Otherworld?");
   otherData.playerName = username;
   console.log("Hello, " + username);
   document.getElementById("playerrName").innerHTML = "Hail Lord " + otherData.playerName;
}

//==========================================================
//Game Data
//==========================================================

let initialOtherData = {
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
  explorePClusterCost: 100000,
  pClusterCount: 0,
  exploreGClusterCost: 800000,
  gClusterCount: 0,
  exploreGSClusterCost: 4500000,
  gSClusterCount: 0,
  exploreGWallCost: 50000000,
  gWallCount: 0,
  exploreUniverseCost: 1000000000000,
  universeCount: 0,

  playerName: null,
  lastTick: Date.now()
}

let otherData = initialOtherData;

//==========================================================
//Gain Profit
//==========================================================

function collectOtherStar() {
  otherData.otherStars += 1;
  document.getElementById("otherStars").innerHTML = otherData.otherStars + " Otherstars";
}

//==========================================================
//Purchase Buildings
//==========================================================

function exploreAsset(asset, assetCount, amount) {
   if (otherData.otherStars >= otherData["explore" + asset + "Cost"]) {
      otherData.otherStars -= otherData["explore" + asset + "Cost"];
      otherData.otherStarsPerSecond += amount;
      otherData["explore" + asset + "Cost"] *= 1.5;
      otherData[assetCount + "Count"]++;
   }
}

function exploreBlack() {
   if (otherData.otherStars >= otherData.exploreBlackCost) {
      otherData.otherStars -= otherData.exploreBlackCost;
      otherData.otherStarsPerSecond += 125;
      otherData.exploreBlackCost *= 1.5;
      otherData.blackCount += 1;
   }
}
function exploreGalaxy() {
   if (otherData.otherStars >= otherData.exploreGalaxyCost) {
      otherData.otherStars -= otherData.exploreGalaxyCost;
      otherData.otherStarsPerSecond += 300;
      otherData.exploreGalaxyCost *= 1.5;
      otherData.galaxyCount += 1;
   }
}
function explorePCluster() {
   if (otherData.otherStars >= otherData.explorePClusterCost) {
      otherData.otherStars -= otherData.explorePClusterCost;
      otherData.otherStarsPerSecond += 500;
      otherData.explorePClusterCost *= 1.5;
      otherData.pClusterCount += 1;
   }
}
function exploreGCluster() {
   if (otherData.otherStars >= otherData.exploreGClusterCost) {
      otherData.otherStars -= otherData.exploreGClusterCost;
      otherData.otherStarsPerSecond += 1250;
      otherData.exploreGClusterCost *= 1.5;
      otherData.gClusterCount += 1;
   }
}
function exploreGSCluster() {
   if (otherData.otherStars >= otherData.exploreGSClusterCost) {
      otherData.otherStars -= otherData.exploreGSClusterCost;
      otherData.otherStarsPerSecond += 5000;
      otherData.exploreGSClusterCost *= 1.5;
      otherData.gSClusterCount += 1;
   }
}
function exploreGWall() {
   if (otherData.otherStars >= otherData.exploreGWallCost) {
      otherData.otherStars -= otherData.exploreGWallCost;
      otherData.otherStarsPerSecond += 20000;
      otherData.exploreGWallCost *= 1.5;
      otherData.gWallCount += 1;
   }
}
function exploreUniverse() {
   if (otherData.otherStars >= otherData.exploreUniverseCost) {
      otherData.otherStars -= otherData.exploreUniverseCost;
      otherData.otherStarsPerSecond += 1000000;
      otherData.exploreUniverseCost *= 1.5;
      otherData.universeCount += 1;
   }
}

//==========================================================
//Set Basic Values
//==========================================================

let infoLoop = window.setInterval(function() {
   // Building Count
   document.getElementById("exploreSystem").innerHTML = "Solar System<br> (You have " + otherData.systemCount + ") <br>Cost: " + (otherData.exploreSystemCost).toFixed(0) + " Otherstars";
   document.getElementById("exploreSCluster").innerHTML = "Star Cluster<br> (You have " + otherData.sClusterCount + ") <br>Cost: " + (otherData.exploreSClusterCost).toFixed(0) + " Otherstars";
   document.getElementById("exploreNebula").innerHTML = "Nebula<br> (You have " + otherData.nebulaCount + ") <br>Cost: " + (otherData.exploreNebulaCost).toFixed(0) + " Otherstars";
   document.getElementById("exploreBlack").innerHTML = "Back Hole<br> (You have " + otherData.blackCount + ") <br>Cost: " + (otherData.exploreBlackCost).toFixed(0) + " Otherstars";
   document.getElementById("exploreGalaxy").innerHTML = "Galaxy<br> (You have " + otherData.galaxyCount + ") <br>Cost: " + (otherData.exploreGalaxyCost).toFixed(0) + " Otherstars";
   document.getElementById("explorePCluster").innerHTML = "Protocluster<br> (You have " + otherData.pClusterCount + ") <br>Cost: " + (otherData.explorePClusterCost).toFixed(0) + " Otherstars";
   document.getElementById("exploreGCluster").innerHTML = "Galaxy Cluster<br> (You have " + otherData.gClusterCount + ") <br>Cost: " + (otherData.exploreGClusterCost).toFixed(0) + " Otherstars";
   document.getElementById("exploreGSCluster").innerHTML = "Galaxy Supercluster<br> (You have " + otherData.gSClusterCount + ") <br>Cost: " + (otherData.exploreGSClusterCost).toFixed(0) + " Otherstars";
   document.getElementById("exploreGWall").innerHTML = "Galaxy Walls<br> (You have " + otherData.gWallCount + ") <br>Cost: " + (otherData.exploreGWallCost).toFixed(0) + " Otherstars";
   document.getElementById("exploreUniverse").innerHTML = "Universe <br> (You have " + otherData.universeCount + ") <br>Cost: " + (otherData.exploreUniverseCost).toFixed(0) + " Otherstars";

   // Reset otherstar display
   document.getElementById("otherStars").innerHTML = (otherData.otherStars).toFixed(0) + " Otherstars";
   document.querySelector(".OPL").textContent = (otherData.otherStarsPerSecond).toFixed(0) + " Otherstars";
}, 500)

//==========================================================
//Main Game Loop
//==========================================================

let mainGameLoop = window.setInterval(function() {
   diff = Date.now() - otherData.lastTick;
   otherData.lastTick = Date.now();
   otherData.otherStars += Math.round(otherData.otherStarsPerSecond  * (diff / 1000));
   document.getElementById("otherStars").innerHTML = Math.round(otherData.otherStars) + " Otherstars";
}, 1000)

let saveGameLoop = window.setInterval(function() {
   localStorage.setItem("otherworldSave", JSON.stringify(otherData));
}, 15000)

let savegame = JSON.parse(localStorage.getItem("otherworldSave"));
if (savegame !== null) {
   otherData = savegame;
}

//==========================================================
//Settings
//==========================================================

function restart() {
   let areYouSure = confirm("Are you SURE you want to restart? This will wipe all your progress!");
   if (areYouSure == true) {
      let areYouReallySure = confirm("Are you REALLY SURE you want to restart? There is no going back!");
      if (areYouReallySure == true) {
         otherData = initialOtherData;
         localStorage.setItem("otherworldSave", JSON.stringify(otherData));
         document.location.href = ("");
      }
   }
}

function save() {
   localStorage.setItem("otherworldSave", JSON.stringify(otherData));
}

//==========================================================
//Console
//==========================================================

function gameLayout() {
   document.getElementById("playerrName").innerHTML = "Hail Lord " + otherData.playerName;
   if (otherData.playerName == null) {
      gameSetup();
   }
}

window.onload = gameLayout;

//==========================================================
//Console
//==========================================================

console.log("So you've made it this far.")

// Gold Rush v2
// Started APRIL 11, 2023 by Hamza
// The code is better now [citation needed]
// "Inspired" by Cookie Clicker

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Game data and information
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Game information
const GameInfo = {
   pickaxe: {
       descr: "it mines things for you (lazy)",
       upgrades: [
           // Format: [title, descr, required buildings of type, cost]
           ["Sharper Pickaxes", "Pickaxes become 15% sharper!", 2, 400],
           ["Handle Grips", "Your unpaid workers won't get blisters anymore!", 10, 4500]
       ]
   },
   dwarf: {
       descr: "it mines things for you - no salary required!",
       upgrades: [
           ["Paid Vacation", "Don't worry, it's not very long", 2, 1200],
           ["Dwarf Academy", "Mining is a complex art, and requires lots of training", 10, 7400]
       ]
   },
   goose: {
       descr: "lays golden eggs",
       upgrades: [
           ["Softer Nests", "They're more comfortable!", 2, 6000],
           ["Healthier Diets", "Improves the Gold-to-lead ratio!", 10, 24000]
       ]
   },
   mine: {
       descr: "a mine, with plenty of Gold for the taking",
       upgrades: [
           ["Deeper Mines", "Down, down, down down", 2, 15000],
           ["Narrower Shafts", "'Cause dwarves don't have rights!", 10, 80000]
       ]
   },
   dragon: {
       descr: "a nice dragon, it steals Gold for you",
       upgrades: [
           ["Dragon Babysitters", "So the parents can spend more time away from home!", 2, 120000],
           ["Increased Greed", "Umm...ok. Don't worry about it!", 10, 460000]
       ]
   }
}
// News
const news = [
   [
       "You like the shiny twinkle of Gold",
       "Mmm, Gold",
       "Random person starts a Gold mining corporation"
   ],
   [
       "Pickaxes are good for mining Gold!"
   ],
   [
       "Dwarves protest by the thousands for 'Dwarve Rights'"
   ],
   [
       "Geese - they lay golden eggs! How? Who cares!"
   ],
   [
       "Mines are pretty deep"
   ],
   [
       "Dragons scare people when flying in the sky"
   ]
];
// Inital data set seperatly for clearing save
const InitGameData = {
   test: "99",
   gold: 0,
   goldPerClick: 1,
   toolLevel: 1,
   improveToolCost: 200,
   topGold: 67, // So pickaxe will be shown immediately
   dateStarted: new Date(),
   settings: {
       affordableCountdown: {
           upgrades: true,
           buildings: true
       }
   },
   pickaxe: {
       amount: 0,
       cost: 150,
       profit: .2,
       upgrades: [false, false]
   },
   dwarf: {
       amount: 0,
       cost: 300,
       profit: 1,
       upgrades: [false, false]
   },
   goose: {
       amount: 0,
       cost: 1000,
       profit: 4,
       upgrades: [false, false]
   },
   mine: {
       amount: 0,
       cost: 8000,
       profit: 12,
       upgrades: [false, false]
   },
   dragon: {
       amount: 0,
       cost: 30000,
       profit: 35,
       upgrades: [false, false]
   }
}
let GameData;

let buildings = ["pickaxe", "dwarf", "goose", "mine", "dragon"];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Save
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Check if save exists
let saveCheck = JSON.parse(localStorage.getItem("goldrushsave"));
if (!Object.is(saveCheck, null)) {
   // Sets data object to save
   GameData = JSON.parse(localStorage.getItem("goldrushsave"));
}
else {
   // If save does not exist, it sets it to intal value
   GameData = InitGameData;
   save();
}

// Set a loop for the save function
const saveLoop = setInterval(save, 1000);

// Saves GameData object to localstorage
function save() { localStorage.setItem("goldrushsave", JSON.stringify(GameData)); }

// Clear save
function clearSave() {
   if (confirm("Are you sure you want to clear your save?")) {
       if (confirm("You can't undo this!")) {
           GameData = InitGameData;
           save();
           location.reload();
       }
   }
}

// Exports JSON save object
function exportData() {
   // Selects textbox from DOM, sets it's text as the JSON save, and copies it
   let textboxElement = document.querySelector(".exportdata");
   textboxElement.value = JSON.stringify(GameData);
   textboxElement.select();
   textboxElement.setSelectionRange(0, 99999); // For mobile
   navigator.clipboard.writeText(textboxElement.value);
   notify("Copied save data to clipboard!");
}

// Imports JSON save
function importData() {
   // Two confirmation popups
   if (confirm("This will delete your current save! Do you want to continue?")) {
       if (confirm("You can't undo this!")) {
           // Takes save through prompt, saves, and reloads
           let inputedData = prompt("Enter your save...");
           GameData = JSON.parse(inputedData);
           save();
           location.reload();
       }
   }
}

// Adds new game data to old saves
for (const [key, value] of Object.entries(InitGameData)) {
   if (typeof GameData[key] == "undefined") GameData[key] = value;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Gold
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Based on counter code from Mozilla Web Docs
// This is seperatly to keep the gold varible safe from the global scope
const Game = (() => {
   let gold = 0;
   // Updates gold in save varibles and locally
   function changeBy(num) {
       gold += num;
       gold = Math.round(gold * 10) / 10;
       GameData.gold = gold;
       refreshDisplay();
   }
   function substract(num) {
       gold -= num;
       gold = Math.round(gold * 10) / 10;
       GameData.gold = gold;
       refreshDisplay();
   }
   function set(num) {
       gold = num;
       GameData.gold = gold;
       refreshDisplay();
   }
   // Updates values across game
   function refreshDisplay() {
       // Updates Gold display on page
       document.querySelector(".goldOwned").textContent = formatNum(gold) + " Gold";
       // And the detailed number
       document.querySelector(".goldOwned").title = gold.toLocaleString() + " Gold";
       // Updates page title to display Gold
       document.title = `Gold Rush 2 | ${formatNum(gold)} Gold`;
       // Runs building availability, to check if buildings can be afforded
       buildingAvailability();
       // Checks if current Gold is record high
       if (gold > GameData.topGold) GameData.topGold = gold;
       // Checks if upgrades are now affordable
       upgrades();
       // Updates GPS and other values on page
       updatePage();
   }
   // Passes varibles back from closure
   return {
       add(num) { changeBy(num); },
       substract(num) { substract(num); },
       set(num) { set(num) },
       updatePage() { updatePage; }
   };
})();

// Adds gold per click amount to gold
function mineGold() {
   Game.add(GameData.goldPerClick);
}

// Mine gold on spacebar press
document.body.onkeyup = (e) => { if (e.key == " ") mineGold(); }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Buildings
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Improving tools will increase how much gold is gained when mining
function improveTools() {
   // If player has enough gold
   if (GameData.gold >= GameData.improveToolCost) {
       // Remove cost, multiply GPC by 2, increase tool level and double cost
       Game.substract(GameData.improveToolCost);
       GameData.goldPerClick++;
       GameData.toolLevel++;
       GameData.improveToolCost *= 2;
       updatePage();
   }
}

// General function for the purchase of Gold-producing items
function obtain(item) {
   if (document.querySelector(`.${item}`).dataset.disabled == "false") {
       Game.substract(GameData[item]["cost"]);
       GameData[item]["cost"] = Math.round(GameData[item]["cost"] * 1.15);
       GameData[item]["amount"]++;
       updatePage();
   }
}

// Checks to determine visiblity of buildings
function buildingAvailability() {
   // Finds if you can afford improving tools
   if (GameData.improveToolCost > GameData.gold) document.querySelector(".tools").dataset.disabled = true;
   else document.querySelector(".tools").dataset.disabled = false;
   if (GameData.settings.affordableCountdown.buildings) document.querySelector(".tools").querySelector(".canbuyin").textContent = "can afford " + affordableIn(GameData["improveToolCost"]);
   // For changing color
   if (GameData.improveToolCost > GameData.gold) document.querySelector(".tools").classList.add("cantafford");
   else document.querySelector(".tools").classList.remove("cantafford");
   buildings.forEach((building) => {
       // Finds whether building can be afforded
       if (GameData[building]["cost"] > GameData.gold) document.querySelector(`.${building}`).dataset.disabled = true;
       else document.querySelector(`.${building}`).dataset.disabled = false;
       // Chooses whether to display or hide building
       if (GameData[building]["cost"] <= GameData.topGold * 2.25) document.querySelector(`.${building}`).style.display = "inline-block";
       else document.querySelector(`.${building}`).style.display = "none";
       // For changing color
       if (GameData[building]["cost"] > GameData.gold) document.querySelector(`.${building}`).classList.add("cantafford");
       else document.querySelector(`.${building}`).classList.remove("cantafford");
       // Finds when building is affordable
       if (GameData.settings.affordableCountdown.buildings) document.querySelector(`.${building}`).querySelector(".canbuyin").textContent = "can afford " + affordableIn(GameData[building]["cost"]);
   });
}

// Calculates time until building is affordable
function affordableIn(amount) {
   if (amount <= GameData.gold) return "now";
   let amountNeeded = amount - GameData.gold;
   let secondsNeeded = amountNeeded / calcGPS();
   if (calcGPS() == 0) return "never";
   return "in " + formatTime(secondsNeeded * 1000);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// PROFIT!
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Run every second to provide Gold from buildings
const profitLoop = setInterval(() => {
   // Adds GPS to Gold variable
   Game.add(calcGPS());
}, 1000);

// Loops through all buildings and finds total profits from all revenue sources
function calcGPS() {
   let gps = 0;
   buildings.forEach((building) => {
       gps += GameData[building]["profit"] * GameData[building]["amount"];
   });
   return gps;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Update page
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Updates page to reflect GameData values
function updatePage() {
   document.querySelector(".otherGoldInfo").textContent = `${formatNum(GameData.goldPerClick)} Gold per Click and ${formatNum(calcGPS())} Gold per Second`;
   document.querySelector(".tools .name").textContent = `Improve Tools - Costs ${formatNum(GameData.improveToolCost)} Gold (lvl. ${formatNum(GameData.toolLevel)})`;
   // Loops through all buildings and updates information on page
   buildings.forEach((building) => {
       document.querySelector(`.${building} .name`).textContent = `${capitalize(building)} - Costs ${formatNum(GameData[building]["cost"])} Gold (you've got ${formatNum(GameData[building]["amount"])})`;
       document.querySelector(`.${building} .info`).textContent = `produces ${formatNum(GameData[building]["profit"])} GPS each, ${formatNum(GameData[building]["profit"] * GameData[building]["amount"])} GPS together and ${percent(GameData[building]["profit"] * GameData[building]["amount"], calcGPS())}% of your total GPS`;
   });
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Upgrades
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Checks if upgrades are affordable, complete, or hidden
function upgrades() {
   buildings.forEach((building) => {
       for (let i = 0; i < GameInfo[building]["upgrades"].length; i++) {
           // If upgrade is not completed
           if (!GameData[building]["upgrades"][i]) {
               let upgradeEl = document.querySelector(`.upgrade-${building}-${i}`);
               // If buildings of type meets requirement
               if (GameData[building]["amount"] >= GameInfo[building]["upgrades"][i][2]) {
                   upgradeEl.classList.remove("canafford");
                   upgradeEl.classList.remove("cantafford");
                   if (GameData.gold >= GameInfo[building]["upgrades"][i][3]) upgradeEl.classList.add("canafford");
                   else upgradeEl.classList.add("cantafford");
               }
           }
       }
   });
}

// Purchase upgrades
function buyUpgrade(building, index) {
   if (GameData.gold >= GameInfo[building]["upgrades"][index][3]) {
       // Removes cost from Gold
       Game.substract(GameInfo[building]["upgrades"][index][3]);
       // Doubles profits of building
       GameData[building]["profit"] *= 2;
       // Sets upgrade as complete and removes DOM element
       GameData[building]["upgrades"][index] = true;
       document.querySelector(`.upgrade-${building}-${index}`).remove();
   }
}

// Creates the DOM elements for each upgrade
function createUpgradeElements() {
   // Loops through buildings
   buildings.forEach((building) => {
       // Loops through all upgrades
       for (let i = 0; i < GameInfo[building]["upgrades"].length; i++) {
           // If not complete, create and insert element
           if (!GameData[building]["upgrades"][i]) {
               let el = document.createElement("DIV");
               document.querySelector(".upgrades").appendChild(el);
               el.outerHTML = `
               <div class="upgrade upgrade-${building}-${i}" onclick="buyUpgrade('${building}', ${i})">
                   <h4>${GameInfo[building]["upgrades"][i][0]}</h4>
                   <p>${GameInfo[building]["upgrades"][i][1]}</p>
                   <i>${capitalize(building)} profits x2</i>
                   <p>Costs ${formatNum(GameInfo[building]["upgrades"][i][3])} Gold</p>
                   <p class="canaffordin"></p>
               </div>
               `;
               // Update when it's affordable
               if (GameData.settings.affordableCountdown.upgrades) {
                   let updateText = setInterval(() => {
                       if (typeof document.querySelector(`.upgrade-${building}-${i}`) == "undefined") clearInterval(updateText);
                       document.querySelector(`.upgrade-${building}-${i}`).querySelector(".canaffordin").textContent = "can afford " + affordableIn(GameInfo[building]["upgrades"][i][3]);
                   }, 1000);
               }
           }
       }
   });
   // Then calls the upgrades function to make visible if available
   upgrades();
}

// Adds news for viewer enjoyment
function getNews() {
   // buildings, news
   let options = news[0];
   buildings.forEach((building, i) => {
       if (GameData[building]["amount"] > 0) options = options.concat(news[i + 1]);
   });
   document.querySelector(".news").textContent = options[Math.floor(Math.random() * options.length)];
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Onpageload
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Creates upgrade DOM elements
createUpgradeElements();
// When page finishes loading, update amount of gold displayed on page
Game.add(GameData.gold);
// And update page with all other values
updatePage();
// And check building availability;
buildingAvailability();
// And set building descriptions
buildings.forEach((building) => { document.querySelector(`.${building} .hover`).textContent = GameInfo[building]["descr"]; });
// And get some fresh news
getNews();
// And make sure the news stays fresh
let refreshNews = setInterval(() => { getNews(); }, 15000);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Useful functions and other code
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Remove and uppercase first character, then return with rest
function capitalize(word) { return word.charAt(0).toUpperCase() + word.slice(1); }

// Calculates percentage
function percent(part, whole) { return Math.round(((part / whole) * 100) * 10) / 10; }

// Let those player know they're being watched
let messages = ["No cheating!", "The garage door is open.", "I can't believe you switched to T-Mobile! How could you!", "C'mon, Windows? Why not Linux?"];
console.log(messages[Math.floor(Math.random() * messages.length)]);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Ideas and such
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*

// Issues
- Goes into negatives if clicks buy to quickly

// Feature ideas
- Dark theme
- Multibuy buildings
- Sell buildings

// Gold Rush features to consider adding
- Mobile
- Player name
- Earn while you're gone (last tick)
- Alerts
- Random events
- Game stats (total gold, started, gold spent, gold per minute, total clicks)
- Better tool upgrades by total clicks
- Settings (how long until affordable, how often to refresh news)

*/
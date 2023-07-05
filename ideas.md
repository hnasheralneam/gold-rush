# Ideas and such


## Issues
- Goes into negatives if clicks buy to quickly
- Does not show player name and gold in news

## Feature ideas
- Add images to upgrades
- Add images to buildings
- Handle clicking upgrades
- Multibuy buildings
- Sell buildings
- Buy max
- Buy max upgrades
- Make news for only the rich
- No need to save price of buildings, calculate it each time
- Turn settings into on/off buttons
- Fix upgrades look
- Sort upgrades by cost
- Start time not working
- Implement time played






Old code, needs to be fixed

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Disasters & Enchancements
//
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*
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
*/


/*

let alert = document.querySelector(".alert");
let bonusNumber = 1; // multiplier for bonus gold, should re-impelement

function getCost(asset) {
   return (GameData[asset]["cost"] * Math.pow(1.15, GameData[asset]["cost"])).toFixed(0);
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Research

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


*/
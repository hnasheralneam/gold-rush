//==========================================================
// Summoning Circle
//==========================================================

const summoningData = {
   level: 1,
   product: "pickaxe",
   time: [24, "hours"],
   amount: 1,
   storage: 1,
   timeReady: "Not Started",
   timeLeft: "Not Started",
   inStorage: 0,
   // Times
   storage1Ready: Infinity,
   storage2Ready: Infinity,
   storage3Ready: Infinity,
   storage4Ready: Infinity,
   storage5Ready: Infinity,
   storage6Ready: Infinity,
   storage7Ready: Infinity,
   storage8Ready: Infinity,
   storage9Ready: Infinity
}

setInterval(() => {
   if (Date.now() >= summoningData.timeReady || summoningData.timeReady === "Not Started") {
      summoningData.timeReady = "waiting";
      summoningData.timeLeft = "Not operating";
      summoningProductionIsReady();
   }
   document.querySelector(".summoning-level").textContent = `Level: ${summoningData.level}`;
   document.querySelector(".summoning-product").textContent = `Producing: ${summoningData.product}`;
   document.querySelector(".summoning-time").textContent = `Time: ${summoningData.time[0] + " " + summoningData.time[1]}`;
   document.querySelector(".summoning-amount").textContent = `Amount: ${summoningData.amount}`;
   document.querySelector(".summoning-storage").textContent = `Storage: ${summoningData.storage}`;
   document.querySelector(".summoning-time-left").textContent = `Time Left: ${summoningData.timeLeft}`;
   document.querySelector(".summoning-in-storage").textContent = `In Storage: ${summoningData.inStorage}`;
}, 1000);

function summoningProductionIsReady() { summoningData.inStorage++; }
function collectSummoningStorage() {
   if (summoningData.inStorage === summoningData.storage) {
      gameData[summoningData.product + "Number"] += summoningData.inStorage;
      summoningData.inStorage = 0;
      startNewSummoningProduction();
   }
}
function startNewSummoningProduction() {
   for (let i = summoningData.storage; i > 0; i--) {
      let timeUntil = getSummoningTime() * i;
      console.log(timeUntil,  Date.now());
      summoningData[`storage${i}Ready`] = Date.now() + timeUntil;
      console.log(summoningData[`storage${i}Ready`]/.0000036);
   }
   // set time and everything
}

function getSummoningTime() {
   if (summoningData.time[1] === "hours") { return summoningData.time[0] * .0000036; }
}









// minutes until affordable

function displayTime(endTime, display) {
   if (!Number.isFinite(endTime)) { return; }
   let timeDisplay = document.querySelector(display);
   let countDownInterval;
   let secondsLeftms;
   let setCountDown = (endTime) => {
      secondsLeftms = endTime - Date.now();
      let secondsLeft = Math.round(secondsLeftms / 1000);
      let hours = Math.floor(secondsLeft / 3600);
      let minutes = Math.floor(secondsLeft / 60) - (hours * 60);
      let seconds = secondsLeft % 60;
      if (secondsLeft < 0) { resetCountDown(); return; }
      if (hours < 10) { hours = `0${hours}`; }
      if (minutes < 10) { minutes = `0${minutes}`; }
      if (seconds < 10) { seconds = `0${seconds}`; }
      timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
   };
   if (Date.now() < endTime) {
      setCountDown(endTime);
      countDownInterval = setInterval(() => { setCountDown(endTime); }, 1000);
   }
   function resetCountDown() {
      clearInterval(countDownInterval);
      timeDisplay.textContent = '00:00:00';
   }
}

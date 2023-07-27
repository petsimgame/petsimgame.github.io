let petName = "寵物";
let hunger = 100;
let happiness = 100;
let level = 1;
let gameCount = 0;
let feedCount = 0;

// 更新寵物狀態並顯示到網頁上
function updateStatus() {
  document.getElementById("petName").innerText = petName;
  document.getElementById("hunger").innerText = hunger;
  document.getElementById("happiness").innerText = happiness;
  document.getElementById("level").innerText = level;
  document.getElementById("feedCount").innerText = feedCount;
  document.getElementById("gameCount").innerText = gameCount;
}

// 更新等級
function updateLevel() {
  // 每10次遊戲和餵食增加一等級
  let totalActions = gameCount + feedCount;
  level = Math.floor(totalActions / 10) + 1;
  updateStatus();
}

// 餵食
function feedPet() {
  // 餵食邏輯
  hunger += 10;
  happiness += 5;

  // 更新餵食次數
  feedCount++;

  updateStatus();
  updateLevel();
}

// 遊戲
function playWithPet() {
  // 遊戲邏輯
  happiness += 10;

  // 更新遊戲次數
  gameCount++;

  updateStatus();
  updateLevel();
}

updateStatus();

let hunger = 100;
let happiness = 100;

function updateStatus() {
  document.getElementById("hunger").innerText = hunger;
  document.getElementById("happiness").innerText = happiness;
}

function feedPet() {
  if (hunger < 100) {
    hunger += 10;
    updateStatus();
    alert("寵物吃飽啦！");
  } else {
    alert("寵物已經很飽了，不想再吃了！");
  }
}

function playWithPet() {
  if (happiness < 100) {
    happiness += 10;
    updateStatus();
    alert("寵物很開心！");
  } else {
    alert("寵物已經很開心了，不想再玩了！");
  }
}
// 定義等級、遊戲次數和餵食次數的變數
let level = 1;
let gameCount = 0;
let feedCount = 0;

// 更新等級和顯示到網頁上
function updateLevel() {
  // 每10次遊戲和餵食增加一等級
  level = 1 + Math.floor((gameCount + feedCount) / 10);
  document.getElementById("level").innerText = level;
}
// 遊戲
function playWithPet() {
  // 遊戲邏輯
  // ...

  // 更新遊戲次數
  gameCount++;

  // 更新等級
  updateLevel();
}

// 餵食
function feedPet() {
  // 餵食邏輯
  // ...

  // 更新餵食次數
  feedCount++;

  // 更新等級
  updateLevel();
}

updateStatus();

let hunger = 100;
let happiness = 100;
let petName = "寵物";

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

function changePetName() {
  const inputElement = document.getElementById("nameInput");
  const newName = inputElement.value.trim();

  if (newName === "") {
    alert("請輸入有效的名字！");
  } else {
    petName = newName;
    document.getElementById("petName").innerText = petName;
    alert("寵物的名字已成功更改！");
  }

  inputElement.value = "";
}

function decreaseValues() {
  hunger -= 5;
  happiness -= 5;
  updateStatus();
}

// 設定計時器，每10秒執行一次遞減
setInterval(decreaseValues, 10000);
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
  // 更新顯示
  document.getElementById("gameCount").innerText = gameCount;
  // 更新等級
  updateLevel();
}

// 餵食
function feedPet() {
  // 餵食邏輯
  // ...

  // 更新餵食次數
  feedCount++;
  // 更新顯示
  document.getElementById("feedCount").innerText = feedCount;
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
// 獲取本地存儲的遊戲次數、餵食次數和等級
const savedGameCount = localStorage.getItem("gameCount");
const savedFeedCount = localStorage.getItem("feedCount");
const savedLevel = localStorage.getItem("level");

// 如果有保存的數據，則使用它們來初始化變數，否則使用預設值
gameCount = savedGameCount ? parseInt(savedGameCount) : 0;
feedCount = savedFeedCount ? parseInt(savedFeedCount) : 0;
level = savedLevel ? parseInt(savedLevel) : 1;

// 更新等級和顯示到網頁上
updateLevel();

// 在遊戲結束或頁面關閉前將數據保存到本地存儲
function saveData() {
  localStorage.setItem("gameCount", gameCount);
  localStorage.setItem("feedCount", feedCount);
  localStorage.setItem("level", level);
}

window.addEventListener("beforeunload", function() {
  saveData();
});

updateStatus();

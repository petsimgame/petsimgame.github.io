let petName = "寵物"; // 這裡預設為寵物，玩家選擇寵物後會更新名字
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
function changePet() {
  const petSelect = document.getElementById("petSelect");
  const selectedPet = petSelect.value;

  // 更新目前寵物的名字和圖片路徑
  switch (selectedPet) {
    case "dog":
      petName = "狗";
      document.getElementById("petImage").src = "dog.png";
      break;
    case "cat":
      petName = "貓";
      document.getElementById("petImage").src = "cat.png";
      break;
    case "rabbit":
      petName = "兔子";
      document.getElementById("petImage").src = "rabbit.png";
      break;
    default:
      petName = "寵物";
      document.getElementById("petImage").src = ""; // 沒有選擇寵物時清空圖片
  }

  // 重新設置寵物狀態
  hunger = 100;
  happiness = 100;
  level = 1;
  gameCount = 0;
  feedCount = 0;

  // 更新網頁上的寵物狀態顯示
  updateStatus();
}


// 設定計時器，每10秒執行一次遞減
setInterval(decreaseValues, 10000);

updateStatus();

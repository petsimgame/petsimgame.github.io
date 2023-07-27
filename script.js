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

updateStatus();
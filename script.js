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
function changePet() {
  const petSelect = document.getElementById("petSelect");
  const selectedPet = petSelect.value;

  // 更新目前寵物的名字
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

updateStatus();

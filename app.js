const sketchBoard = document.querySelector(".sketchBoard");
const rangeValue = document.querySelector(".rangeValue");
const areaSelector = document.getElementById("areaSelector");

const colorSelector = document.getElementById("cSelect");
const normalBtn = document.getElementById("normalMode");
const randomBtn = document.getElementById("randomMode");
const eraserBtn = document.getElementById("eraserMode");
const clearBtn = document.getElementById("clearAll");

let activeBtnType = "normal";

function setBgColor() {
  if (activeBtnType == "normal") {
    return colorSelector.value;
  } else if (activeBtnType == "random") {
    return getRandomColor();
  } else if (activeBtnType == "eraser") {
    return "#FFFFFF";
  }
}

function createBlock(blockAmount) {
  for (let i = 0; i < blockAmount * blockAmount; i++) {
    const myDiv = document.createElement("div");

    myDiv.addEventListener(
      "mouseover",
      function (event) {
        // highlight the mouseover target
        event.target.style.backgroundColor = setBgColor();
        event.target.style.borderColor = setBgColor();
      },
      false
    );
    myDiv.style.width = `${sketchBoard.clientWidth / blockAmount}px`;
    myDiv.style.height = `${sketchBoard.clientHeight / blockAmount}px`;
    sketchBoard.appendChild(myDiv);
  }
}

function clearBlock() {
  sketchBoard.innerHTML = "";
}

function activeButton(activeType, selectedType) {
  function checker(type) {
    if (type === "normal") {
      return normalBtn;
    } else if (type === "random") {
      return randomBtn;
    } else if (type === "eraser") {
      return eraserBtn;
    }
  }
  if (activeType != selectedType) {
    checker(activeType).classList.remove("active");
    checker(selectedType).classList.add("active");
    activeBtnType = selectedType;
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createBlock(parseInt(areaSelector.value));

areaSelector.onmousemove = (e) => {
  rangeValue.textContent = e.target.value + " x " + e.target.value;
};

areaSelector.onchange = () => {
  clearBlock();
  createBlock(parseInt(areaSelector.value));
};

clearBtn.onclick = () => {
  clearBlock();
  createBlock(parseInt(areaSelector.value));
  activeButton(activeBtnType, "normal");
};

normalBtn.onclick = () => {
  activeButton(activeBtnType, "normal");
};

randomBtn.onclick = () => {
  activeButton(activeBtnType, "random");
};

eraserBtn.onclick = () => {
  activeButton(activeBtnType, "eraser");
};

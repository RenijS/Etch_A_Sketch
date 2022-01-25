const sketchBoard = document.querySelector(".sketchBoard");
const rangeValue = document.querySelector(".rangeValue");
const areaSelector = document.getElementById("areaSelector");

const colorSelector = document.getElementById("cSelect");
const normalBtn = document.getElementById("normalMode");
const randomBtn = document.getElementById("randomMode");
const eraserBtn = document.getElementById("eraserMode");
const clearBtn = document.getElementById("clearAll");

function createBlock(blockAmount) {
  for (let i = 0; i < blockAmount * blockAmount; i++) {
    const myDiv = document.createElement("div");
    myDiv.addEventListener(
      "mouseover",
      function (event) {
        // highlight the mouseover target
        event.target.style.backgroundColor = colorSelector.value;
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
};

const sketchBoard = document.querySelector(".sketchBoard");
const rangeValue = document.querySelector(".rangeValue");
const areaSelector = document.getElementById("areaSelector");

for (let i = 0; i < 256; i++) {
  const myDiv = document.createElement("div");
  const width = sketchBoard.clientWidth / 16;
  const height = sketchBoard.clientHeight / 16;
  console.log(
    width +
      " $$ " +
      height +
      " ,, " +
      sketchBoard.clientWidth +
      sketchBoard.clientHeight
  );
  myDiv.style.width = `${width}px`;
  myDiv.style.height = `${height}px`;
  sketchBoard.appendChild(myDiv);
}

areaSelector.addEventListener("input", (area) => {
  rangeValue.textContent = areaSelector.value + " * " + areaSelector.value;
});

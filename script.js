const startColor = document.getElementById("start");
const stopColor = document.getElementById("stop");

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;

startColor.addEventListener("click", () => {
  interval = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
});

stopColor.addEventListener("click", () => {
  clearInterval(interval);
});

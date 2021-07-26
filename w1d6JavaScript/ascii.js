import ANIMATIONS from "./animations.js";

window.onload = () => {
  "use strict";
  callOnWindowLoad();
};

function callOnWindowLoad() {
  "use strict";

  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const animationBtn = document.getElementById("animation");
  const fontsizeBtn = document.getElementById("fontsize");
  const turboBtn = document.getElementById("turbo");
  const textArea = document.getElementById("text-area");

  /* default textArea font-size */
  textArea.style.fontSize = "medium";

  /* Animation Type Event Listener */
  animationBtn.addEventListener("change", setAnimationType);

  /* Start Animation Event Listener */
  startBtn.addEventListener("click", startAnimation);

  /* Stop Animation Event Listener */
  stopBtn.addEventListener("click", stopAnimation);

  /* Turbo Event Listener */
  turboBtn.addEventListener("change", setUnsetTurbo);

  /* Set Text Size */
  fontsizeBtn.addEventListener("change", setTextSize);

  let animationType = animationBtn.value; // default animation type is Blank

  function setAnimationType(e) {
    animationType = e.target.value;
  }

  let animationTimerID;
  let frameSpeed = 250; // default frame speed
  let currentFrame = 0;

  function startAnimation() {
    animationTimerID = setInterval(animationFunc, `${frameSpeed}`);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    animationBtn.disabled = true; // prevent user from changing animation during  some ongoing animation
  }

  function animationFunc() {
    let animationArr = ANIMATIONS[`${animationType}`].split("=====\n");
    const animationFrameCount = animationArr.length;
    textArea.value = animationArr[currentFrame];
    currentFrame = currentFrame == animationFrameCount - 1 ? 0 : ++currentFrame;
  }

  function stopAnimation() {
    clearInterval(animationTimerID);
    textArea.value = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    animationBtn.disabled = false;
  }

  function setUnsetTurbo() {
    clearInterval(animationTimerID);
    frameSpeed = turboBtn.checked ? 50 : 250; // turbo frame speed is 50 ms
    animationTimerID = setInterval(animationFunc, `${frameSpeed}`);
  }

  function setTextSize(e) {
    textArea.style.fontSize = `${e.target.value}`;
  }
}

let hands = document.querySelectorAll(".hand i");
let digital = document.querySelector(".digital");

setInterval(() => {
  let now = new Date();

  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hr = now.getHours();

  // Calculate rotation
  let secDeg = sec * 6; // 360/60
  let minDeg = min * 6 + sec * 0.1; // 6/60
  let hrDeg = hr * 30 + min * 0.5; // 30/60

  // Apply rotation
  hands[2].style.transform = `rotate(${secDeg}deg)`;
  hands[1].style.transform = `rotate(${minDeg}deg)`;
  hands[0].style.transform = `rotate(${hrDeg}deg)`;

  // Digital clock
  let h = String(hr).padStart(2, "0");
  let m = String(min).padStart(2, "0");
  let s = String(sec).padStart(2, "0");

  digital.innerText = `${h}:${m}:${s}`;
}, 1000);

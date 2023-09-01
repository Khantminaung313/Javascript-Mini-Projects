let countdown = document.querySelector(".countdown");

const startMinutes = 10;
let time = startMinutes * 60;

setInterval(updatedCountdown, 1000);

function updatedCountdown() {
  let m = Math.floor(time / 60);
  let s = time % 60;

  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  countdown.innerHTML = `${m} : ${s}`;
  
  if (m === "00" && s === "00") {
    time = time;
  } else {
    time--;
  }
}

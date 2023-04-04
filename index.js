const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

function toggleDarkMode() {
        let hour = document.getElementById("hour");
        hour.classList.toggle("dark-mode");
        let minutes = document.getElementById("minutes");
        minutes.classList.toggle("dark-mode");
        let seconds = document.getElementById("seconds");
        seconds.classList.toggle("dark-mode");
        
        let button = document.getElementsByTagName("button")[0];
        button.classList.toggle("dark-mode");

if (button.classList.contains("dark-mode")) {
          button.textContent = "dark mode";
        } else {
          button.textContent = "light mode";
        }
        
      }


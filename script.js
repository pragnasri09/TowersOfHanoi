const intro = document.getElementById("intro");
const visualizer = document.getElementById("visualizer");
const openBtn = document.getElementById("openVisualizer");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const diskInput = document.getElementById("diskCount");
const explanation = document.getElementById("explanation");
const movesText = document.getElementById("moves");

const rods = {
  A: document.getElementById("Source"),
  B: document.getElementById("Auxiliary"),
  C: document.getElementById("Destination")
};

let moves = [];
let index = 0;

openBtn.onclick = () => {
  intro.classList.add("hidden");
  visualizer.classList.remove("hidden");
};

resetBtn.onclick = () => {
  Object.values(rods).forEach(r => r.innerHTML = `<span>${r.id}</span>`);
  explanation.innerText = "Enter the number of disks and start the visualization.";
  movesText.innerText = "Total Moves: —";
  moves = [];
  index = 0;
};

function createDisks(n) {
  for (let i = n; i >= 1; i--) {
    const d = document.createElement("div");
    d.className = "disk";
    d.style.width = `${40 + i * 25}px`;
    rods.A.appendChild(d);
  }
}

function hanoi(n, from, to, aux) {
  if (n === 1) {
    moves.push({ from, to });
    return;
  }
  hanoi(n - 1, from, aux, to);
  moves.push({ from, to });
  hanoi(n - 1, aux, to, from);
}

function animate() {
  if (index >= moves.length) {
    explanation.innerText = "Visualization completed successfully.";
    return;
  }

  const { from, to } = moves[index];
  const disk = rods[from].querySelector(".disk:last-child");
  rods[to].appendChild(disk);

  explanation.innerText = `Moving disk from Rod ${from} to Rod ${to}`;
  index++;

  setTimeout(animate, 900);
}

startBtn.onclick = () => {
  const n = parseInt(diskInput.value);
  if (!n || n < 1 || n > 6) {
    alert("Enter a value between 1 and 6");
    return;
  }

  resetBtn.click();
  createDisks(n);
  hanoi(n, "A", "C", "B");

  movesText.innerText = `Total Moves: ${Math.pow(2, n) - 1}`;
  setTimeout(animate, 1000);
};

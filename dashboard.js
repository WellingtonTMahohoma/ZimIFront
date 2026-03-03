const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

const projects = [
  {
    title: "PROJECT 1",
    description: "COLLABORATION WEBSITE (HOME WEBSITE)",
    status: "current",
    progress: 70,
    members: 6,
    started: "07/02/2026",
    finished: "-",
    current: "07/02/2026"
  }
];

const container = document.getElementById("projectContainer");

/* COUNTS */
function updateCounts() {
  const c = s => projects.filter(p => p.status === s).length;
  document.getElementById("count-all").textContent = projects.length;
  document.getElementById("count-current").textContent = c("current");
  document.getElementById("count-completed").textContent = c("completed");
  document.getElementById("count-future").textContent = c("future");
  document.getElementById("count-standby").textContent = c("standby");
}

/* RENDER */
function render(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="project-row">

        <!-- Card 1 -->
        <div class="card">
          <span class="status">ACTIVE</span>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>

        <!-- Card 2 (Progress + Key + Members merged) -->
        <div class="card progress-card">

          <div class="progress-key">
            <span class="key completed">Completed</span>
            <span class="key in-progress">In Progress</span>
          </div>

          <div class="progress-ring" style="--progress:${p.progress}">
            ${p.progress}%
          </div>

          <p class="active-members">ACTIVE MEMBERS: ${p.members}</p>
          <a href="/project-members.html" class="members-link">VIEW MEMBERS -></a>

        </div>

        <!-- Card 3 -->
        <div class="card">
          <p>STARTED<br>${p.started}</p>
          <p>FINISHED<br>${p.finished}</p>
          <p>CURRENT<br>${p.current}</p>
        </div>

      </div>
    `;
  });
}

/* FILTER */
document.querySelectorAll(".side-item").forEach(item => {
  item.onclick = () => {
    document.querySelectorAll(".side-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const f = item.dataset.filter;
    render(f === "all" ? projects : projects.filter(p => p.status === f));
  };
});

updateCounts();
render(projects);
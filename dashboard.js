const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

let projects = JSON.parse(localStorage.getItem("projects")) || [];

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
          <h3><a href="project.html" class="project-link">${p.title}</a></h3>
          <p>${p.description}</p>

          <button onclick="updateProgress(${projects.indexOf(p)})">Update</button>
          <button onclick="deleteProject(${projects.indexOf(p)})">Delete</button>

        </div>

        <div class="card progress-card">

          <div class="progress-key">
            <span class="key completed">Completed</span>
            <span class="key in-progress">In Progress</span>
          </div>

          <div class="progress-ring" style="--progress:${p.progress}">
            ${p.progress}%
          </div>

          <p class="active-members">ACTIVE MEMBERS: ${p.members}</p>
          <a href="user_profiles.html" class="members-link">VIEW MEMBERS -></a>

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

function deleteProject(index){

let projects = JSON.parse(localStorage.getItem("projects")) || [];
let confirmDelete = confirm("Are you sure you want to delete this project?");

if(!confirmDelete) return;

projects.splice(index,1);

localStorage.setItem("projects", JSON.stringify(projects));

location.reload();

}

function updateProgress(index){

let projects = JSON.parse(localStorage.getItem("projects")) || [];

let newProgress = prompt("Enter new progress %");

if(newProgress !== null){

projects[index].progress = newProgress;


/* completion logic */

if(projects[index].progress >= 100){

projects[index].progress = 100;

projects[index].status = "completed";

projects[index].finished = new Date().toLocaleDateString();

}

localStorage.setItem("projects", JSON.stringify(projects));

location.reload();

}

}


updateCounts();
render(projects);


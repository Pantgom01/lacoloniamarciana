const missions = [
  {
    id:"01",
    image:"assets/images/Mision1.png",
    title:"Nivel de agua",
    icon:"💧"
  },
  {
    id:"02",
    image:"assets/images/Mision2.png",
    title:"Humedad",
    icon:"🌱"
  }
];

const missionCodes = ["AAA","BBB"];
const missionPoints = [50,75];

const teams = ["Astrofísicos","Ingenieros"];

let selectedMission = 0;
let selectedTeam = teams[0];

let teamProgress = {
  "Astrofísicos": {completed:[], score:0},
  "Ingenieros": {completed:[], score:0}
};

function $(id){
  return document.getElementById(id);
}

function renderGrid(){
  $("mission-grid").innerHTML = missions.map((m,i)=>`
    <div class="mission-button" onclick="selectMission(${i})">
      ${m.icon} ${m.title}
    </div>
  `).join("");
}

function selectMission(i){
  selectedMission = i;
  renderCard();
}

function renderCard(){
  const m = missions[selectedMission];
  $("mission-card").innerHTML = `
    <h2>${m.title}</h2>
    <img src="${m.image}" width="100%">
  `;
}

function validate(){
  const code = $("code-input").value;

  if(code === missionCodes[selectedMission]){
    teamProgress[selectedTeam].completed.push(selectedMission);
    teamProgress[selectedTeam].score += missionPoints[selectedMission];
    alert("Correcto!");
  } else {
    alert("Error");
  }
}

function renderTeams(){
  $("team-select").innerHTML = teams.map(t=>`
    <option>${t}</option>
  `).join("");
}

$("validate-btn").onclick = validate;
$("reset-btn").onclick = ()=>location.reload();

renderGrid();
renderCard();
renderTeams();

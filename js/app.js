  	const API_URL = "https://script.google.com/macros/s/AKfycbwtwR1mtAdTTNkjLZsmc6_wRCeBbrw6uuZGMIGzyo1eKm_w9uJwUKi2Mp5PqgZbHTec/exec";
    const missions = [
      {id:"01", image:"assets/images/Mision1.png", title:"Nivel de agua", icon:"💧", subtitle:"Control del Tanque de Agua", objective:"Detectar si un depósito está lleno o vacío y activar un servomotor para abrir o cerrar la compuerta.", materials:["micro:bit","IoT:bit","sensor de nivel de agua","servomotor","pantalla OLED"], sensors:["Sensor de nivel de agua","Servomotor","OLED"], challenge:"La colonia depende de un sistema de riego automatizado. Debéis medir el nivel del tanque principal, activar las compuertas correctas y asegurar que el agua llegue a los cultivos de forma segura.", logic:["Medir nivel con precisión","Abrir o cerrar compuerta con servomotor","Mostrar estado en OLED"], instructions:["Conecta el sensor de nivel y el servomotor a la IoT:bit.","Configura MakeCode para que el servomotor actúe según el nivel de agua.","Muestra el estado en la pantalla OLED."], puzzle:"Pieza de puzle: 1"},
      {id:"02", image:"assets/images/Mision2.png", title:"Humedad del suelo", icon:"🌱", subtitle:"Riego de Cultivos Marcianos", objective:"Medir humedad, mostrar aviso en OLED y simular la activación de riego.", materials:["micro:bit","IoT:bit","sensor de humedad del suelo","servomotor","pantalla OLED"], sensors:["Sensor de humedad","OLED","Servomotor"], challenge:"Los cultivos presentan estrés por humedad irregular. Debéis activar un sistema de riego inteligente que garantice condiciones óptimas para cada zona del invernadero.", logic:["Monitorizar humedad en tiempo real","Mostrar estado en OLED","Activar servomotor si el suelo está seco"], instructions:["Conecta el sensor de humedad a la IoT:bit.","Programa MakeCode para leer la humedad.","Muestra el estado en OLED y activa el servomotor si está seco."], puzzle:"Pieza de puzle: 1"},
      {id:"03", image:"assets/images/Mision3.png", title:"Panel de control", icon:"🖥️", subtitle:"Panel de Control de la Base", objective:"Integrar varios datos de sensores y mostrarlos de forma clara y ordenada en un tablero central con navegación por pulsador.", materials:["micro:bit","IoT:bit","pantalla OLED","pulsador","sensores de misiones previas"], sensors:["OLED","Pulsador","Datos de varios sensores"], challenge:"La colonia necesita un panel de control central que permita supervisar el rover, el tanque de agua y los cultivos. Debéis integrar la información en un único tablero central.", logic:["Recoger datos de varios sensores","Mostrar información en pantallas sucesivas","Navegar con pulsador"], instructions:["Integra los datos de varios sensores individuales.","Muestra la información en OLED de forma clara.","Añade un pulsador para navegar entre las pantallas disponibles."], puzzle:"Pieza de puzle: 1"},
      {id:"04", image:"assets/images/Mision4.png", title:"Distancia segura", icon:"📏", subtitle:"Rover Marciano – Evitar Obstáculos", objective:"Detectar obstáculos, calcular la distancia segura y evitar colisiones con el rover.", materials:["micro:bit","IoT:bit","sensor sonar"], sensors:["Sensor sonar"], challenge:"La superficie de Marte está llena de rocas, cráteres y zonas inestables. Debéis guiar al rover para que evite colisiones y llegue sin daños a su destino.", logic:["Detectar obstáculos","Calcular distancia segura","Evitar colisiones"], instructions:["Conecta el sensor sonar a la IoT:bit.","Programa MakeCode para medir distancias.","Activa una respuesta cuando el rover esté demasiado cerca de un obstáculo."], puzzle:"Pieza de puzle: 1"},
      {id:"05", image:"assets/images/Mision5.png", title:"Temperatura crítica", icon:"🌡️", subtitle:"Termostato de la Estación", objective:"Medir temperatura, humedad y presión, y mostrar sus valores en la pantalla OLED.", materials:["micro:bit","IoT:bit","sensor DHT11","pantalla OLED"], sensors:["DHT11","OLED"], challenge:"Los sistemas de climatización fallaron durante la tormenta de polvo. Debéis supervisar la temperatura y la humedad de la estación para proteger cultivos, experimentos y exploradores.", logic:["Leer temperatura y humedad","Visualizar valores en OLED","Supervisar condiciones críticas"], instructions:["Conecta el sensor DHT11 a la IoT:bit.","Programa MakeCode para leer temperatura y humedad.","Muestra los valores en la pantalla OLED."], puzzle:"Pieza de puzle: 1"},
      {id:"06", image:"assets/images/Mision6.png", title:"Luz ambiental", icon:"💡", subtitle:"Luz ambiental", objective:"Medir el nivel de luminosidad y accionar iluminación artificial a través de un LED amarillo externo.", materials:["micro:bit","sensor de luz interno","LED amarillo externo"], sensors:["Sensor de luz interno","LED amarillo externo"], challenge:"La iluminación artificial ha sufrido interferencias. Debéis monitorizar la intensidad lumínica y activar mecanismos auxiliares para garantizar el crecimiento óptimo de los cultivos.", logic:["Medir luminosidad","Activar iluminación auxiliar","Mantener la cantidad justa de luz"], instructions:["Usa el sensor de luz interno de la micro:bit.","Conecta un LED amarillo externo.","Programa MakeCode para encender el LED cuando la luz sea insuficiente."], puzzle:"Pieza de puzle: 1"},
      {id:"07", image:"assets/images/Mision7.png", title:"Estabilizar antena de comunicación", icon:"📡", subtitle:"Estabilizar antena de comunicación", objective:"Detectar una inclinación específica de la micro:bit y activar el LED verde como confirmación de transmisión.", materials:["micro:bit","sensor de inclinación interno","LED verde externo"], sensors:["Inclinación micro:bit","LED verde externo"], challenge:"La antena principal ha quedado desincronizada. Debéis inclinar la micro:bit con precisión para enviar una señal manual codificada y restablecer la comunicación orbital.", logic:["Detectar inclinación en mg","Comprobar rango válido","Confirmar transmisión con LED verde"], instructions:["Usa el acelerómetro interno de la micro:bit.","Define el rango exacto de inclinación en MakeCode.","Activa el LED verde cuando la orientación sea correcta."], puzzle:"Pieza de puzle: 1"},
      {id:"08", image:"assets/images/Mision8.png", title:"Alineación del Escudo Magnético", icon:"🧭", subtitle:"Alineación del Escudo Magnético", objective:"Orientar el núcleo del escudo con precisión usando la brújula de la micro:bit y activar el LED rojo cuando la alineación sea correcta.", materials:["micro:bit","brújula interna","LED rojo externo"], sensors:["Brújula / magnetómetro interno","LED rojo externo"], challenge:"El escudo magnético ha perdido su orientación. Debéis orientar la micro:bit hasta alcanzar el ángulo correcto para proteger la colonia de la radiación cósmica.", logic:["Leer ángulo del magnetómetro","Comparar con el rango permitido","Confirmar alineación con LED rojo"], instructions:["Calibra la brújula de la micro:bit.","Lee el ángulo en MakeCode.","Activa el LED rojo cuando el escudo esté alineado correctamente."], puzzle:"Pieza de puzle: 1"}
    ];
    const missionCodes = ["TANQUE-AGUA","SUELO-HUMEDO","BASE-PANEL","SONAR-SEGURO","TERMOSTATO-ROJO","LUZ-OLED","ANTENA-VERDE","ESCUDO-NORTE"];
    const missionPoints = [50,75,100,125,150,175,200,250];
    const teams = ["Astrofísicos","Astrobiólogos","Geólogos Planetarios","Ingenieros de Comunicaciones", "Sanitarios", "Programadores", "Técnicos Robóticos", "Biotecnólogos",   "Ingenieros de Navegación", "Analistas de Datos", "Especialistas en IA", "Exploradores de Superficie"];
    const teacherPassword = "COMANDANTE-ARES";

    let selectedMission = 0, selectedTeam = teams[0], teacherMode = false;
    let teamProgress = Object.fromEntries(teams.map(team => [team, {unlockedMissions:[0], completedMissions:[], score:0}]));

    const $ = (id) => document.getElementById(id);
    const currentTeamData = () => teamProgress[selectedTeam];
    const isUnlocked = (i) => currentTeamData().unlockedMissions.includes(i);
    const isCompleted = (i) => currentTeamData().completedMissions.includes(i);

	async function cargarDatos() {
	  const res = await fetch(API_URL);
	  const data = await res.json();

	  data.forEach(row => {
	    if (teamProgress[row.equipo]) {
	      teamProgress[row.equipo].score = Number(row.puntos);
	      try {
	        teamProgress[row.equipo].completedMissions = JSON.parse(row.completadas || "[]");
	      } catch {
	        teamProgress[row.equipo].completedMissions = [];
	      }

	      // desbloqueadas = completadas + siguiente
	      const max = Math.max(-1, ...teamProgress[row.equipo].completedMissions);
	      teamProgress[row.equipo].unlockedMissions = [0];
	      for (let i = 1; i <= max + 1; i++) {
	        teamProgress[row.equipo].unlockedMissions.push(i);
	      }
	    }
	  });

	  renderAll();
	}

    function renderMissionGrid() {
      $("mission-grid").innerHTML = missions.map((m,i) => {
        const unlocked = isUnlocked(i), completed = isCompleted(i), active = selectedMission===i;
        return `<button class="mission-button ${active && unlocked ? "active" : ""} ${!unlocked ? "locked" : ""}" data-index="${i}" ${!unlocked ? "disabled" : ""}>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:1.9rem;">${completed ? "✅" : unlocked ? m.icon : "🔒"}</span>
            <span style="width:12px;height:12px;border-radius:50%;background:${completed ? "#8df0b2" : unlocked ? "#ffd36a" : "rgba(255,255,255,0.18)"};"></span>
          </div>
          <div class="mission-meta">Misión ${m.id}</div>
          <div style="margin-top:6px; font-weight:700; line-height:1.4;">${m.title}</div>
          <div class="mission-state">${completed ? "Sistema reparado" : unlocked ? "Disponible" : "Bloqueada"}</div>
        </button>`;
      }).join("");
      document.querySelectorAll(".mission-button").forEach(btn => {
        btn.addEventListener("click", () => {
          const index = Number(btn.dataset.index);
          if (!isUnlocked(index)) return;
          selectedMission = index;
          renderAll();
        });
      });
    }

    function renderMissionCard() {
      const m = missions[selectedMission];
      $("mission-card").innerHTML = `
        <div style="display:flex; justify-content:space-between; gap:16px; align-items:flex-start; flex-wrap:wrap;">
          <div>
            <div class="mission-tag">Misión ${m.id}</div>
            <div class="mission-title"><span>${m.icon}</span><span>${m.title}</span></div>
            <div style="margin-top:8px; color:rgba(255,255,255,0.7); font-weight:600;">${m.subtitle}</div>
          </div>
          <div class="panel-dark" style="padding:10px 14px; font-size:14px; color:rgba(255,255,255,0.72);">${isCompleted(selectedMission) ? "Superada" : isUnlocked(selectedMission) ? "Activa" : "Bloqueada"}</div>
        </div>
        <div style="margin-top:22px;">
          <div class="small-title">Narrativa</div>
          <p style="color:rgba(255,255,255,0.82); line-height:1.7;">${m.challenge}</p>
        </div>
        <div style="margin-top:22px;">
          <div class="small-title">Objetivo</div>
          <p style="color:rgba(255,255,255,0.86); line-height:1.7;">${m.objective}</p>
        </div>
        <div class="mission-columns">
          <div class="panel-dark" style="padding:16px;">
            <div style="font-weight:700; color:#9ee9ff;">Materiales</div>
            <ul class="list" style="margin-top:10px;">${m.materials.map(item => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div class="panel-dark" style="padding:16px;">
            <div style="font-weight:700; color:#bff6d4;">Sensores y lógica</div>
            <ul class="list" style="margin-top:10px;">${m.sensors.map(item => `<li>${item}</li>`).join("")}${m.logic.map(item => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="panel-dark" style="padding:16px; margin-top:18px;">
          <div style="font-weight:700; color:#d4b7ff;">Instrucciones básicas</div>
          <ul class="list" style="margin-top:10px;">${m.instructions.map(item => `<li>${item}</li>`).join("")}</ul>
          <button class="resource-btn" type="button" onclick="openMissionImage('${m.image}', 'Misión ${m.id}: ${m.title}')">🖼️ Ver esquema visual de bloques</button>
          <div class="resource-caption">Abre la imagen de referencia de esta misión para que el alumnado pueda consultarla mientras programa en MakeCode.</div>
          <div class="chip-wrap"><span class="chip">${m.puzzle}</span><span class="chip">MakeCode</span><span class="chip">IoT:bit</span></div>
        </div>`;
    }

    function renderCommanderPanel() {
      $("team-select").innerHTML = teams.map(team => `<option value="${team}" ${team===selectedTeam ? "selected":""}>${team}</option>`).join("");
      $("selected-mission-title").textContent = `${missions[selectedMission].id} · ${missions[selectedMission].title}`;
      $("selected-mission-points").textContent = `Valor: ${missionPoints[selectedMission]} puntos`;
      $("selected-mission-state").textContent = isCompleted(selectedMission) ? "Sistema restaurado" : isUnlocked(selectedMission) ? "Lista para completar" : "Bloqueada";
      $("active-team").textContent = selectedTeam;
      $("active-team-inline").textContent = selectedTeam;
      const validateBtn = $("validate-btn");
      validateBtn.disabled = !isUnlocked(selectedMission) || isCompleted(selectedMission);
      validateBtn.textContent = isCompleted(selectedMission) ? "Misión ya superada" : "Validar misión y desbloquear la siguiente";
      $("team-select").onchange = (e) => {
        selectedTeam = e.target.value;
        if (!isUnlocked(selectedMission)) selectedMission = currentTeamData().unlockedMissions[0] ?? 0;
        renderAll();
      };
    }

    function renderBoard() {
      $("board-grid").innerHTML = missions.map((m,i) => `
        <div class="panel-dark board-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:1.8rem;">${isCompleted(i) ? "✅" : isUnlocked(i) ? m.icon : "🔒"}</span>
            <span style="width:12px;height:12px;border-radius:50%;background:${isCompleted(i) ? "#8df0b2" : isUnlocked(i) ? "#ffd36a" : "rgba(255,255,255,0.18)"};"></span>
          </div>
          <div style="margin-top:12px; color:rgba(255,255,255,0.62); font-size:13px;">Misión ${m.id}</div>
          <div style="margin-top:4px; font-weight:700; line-height:1.4;">${m.title}</div>
          <div class="dashed-box">Estado de ${selectedTeam}: ${isCompleted(i) ? "Superada" : isUnlocked(i) ? "Disponible" : "Bloqueada"}<br>Puntos: ${missionPoints[i]}</div>
        </div>`).join("");
      $("sequence-list").innerHTML = missions.map((m,i) => `<div class="sequence-item ${isCompleted(i) ? "done" : ""}">${m.id} · ${m.title}</div>`).join("");
    }

    function renderRanking() {
      const ranking = Object.entries(teamProgress).map(([team, data]) => [team, data.score]).sort((a,b)=>b[1]-a[1]);
      $("ranking-list").innerHTML = ranking.map(([team, score], i) => `<div class="ranking-item"><div class="rank-left"><div class="rank-num">${i+1}</div><div>${team}</div></div><strong style="color:#9ee9ff;">${score} pts</strong></div>`).join("");
    }

    function renderStatus() {
      $("status-energy").textContent = isCompleted(0) ? "Restablecido" : "Inestable";
      $("status-crops").textContent = isCompleted(1) ? "Estables" : "Pendiente";
      $("status-radar").textContent = isCompleted(2) ? "Operativo" : "Parcial";
      $("status-comms").textContent = isCompleted(7) ? "Alineados" : "Desalineados";
      const completedCount = currentTeamData().completedMissions.length;
      const progress = Math.round((completedCount / missions.length) * 100);
      $("completed-count").textContent = `${completedCount}/8`;
      $("progress-fill").style.width = `${progress}%`;
      $("all-complete-banner").style.display = completedCount === missions.length ? "block" : "none";
      $("completion-box").style.display = completedCount === missions.length ? "block" : "none";
      $("help-box").style.display = completedCount === missions.length ? "none" : "block";
    }

    function setUnlockMessage(text, type) {
      const box = $("unlock-message");
      box.className = `message ${type}`;
      box.textContent = text;
      box.style.display = "block";
    }
	async function guardarDatos(team) {
	  await fetch(API_URL, {
	    method: "POST",
	    body: JSON.stringify({
	      equipo: team,
	      puntos: teamProgress[team].score,
	      completadas: teamProgress[team].completedMissions
	    })
	  });
	}
    function validateCurrentMission() {
      if (!isUnlocked(selectedMission) || isCompleted(selectedMission)) return;
      const typedCode = $("code-input").value.trim().toUpperCase();
      const expectedCode = missionCodes[selectedMission];
      if (typedCode !== expectedCode) {
        setUnlockMessage(`Código incorrecto para la misión ${missions[selectedMission].id}. Usa la clave de mando correcta.`, "error");
        return;
      }
      teamProgress[selectedTeam].completedMissions.push(selectedMission);
      teamProgress[selectedTeam].score += missionPoints[selectedMission];
      const nextIndex = selectedMission + 1;
      if (nextIndex < missions.length && !teamProgress[selectedTeam].unlockedMissions.includes(nextIndex)) {
        teamProgress[selectedTeam].unlockedMissions.push(nextIndex);
        setUnlockMessage(`Misión ${missions[selectedMission].id} completada. ${selectedTeam} obtiene ${missionPoints[selectedMission]} puntos y se habilita la misión ${missions[nextIndex].id}.`, "info");
        selectedMission = nextIndex;
      } else {
        setUnlockMessage(`Misión ${missions[selectedMission].id} completada. ${selectedTeam} obtiene ${missionPoints[selectedMission]} puntos. Todas las misiones de este equipo han sido restauradas.`, "success");
      }
      $("code-input").value = "";
      renderAll();
      guardarDatos(selectedTeam);
    }

    function resetProgress() {
      selectedMission = 0; selectedTeam = teams[0]; teacherMode = false;
      teamProgress = Object.fromEntries(teams.map(team => [team, {unlockedMissions:[0], completedMissions:[], score:0}]));
      $("code-input").value = ""; $("teacher-password").value = ""; $("unlock-message").style.display = "none"; $("teacher-error").style.display = "none";
      renderAll();
    }

async function resetComoEscritura() {
  // 1. Reset local
  teamProgress = Object.fromEntries(
    teams.map(team => [
      team,
      {
        unlockedMissions: [0],
        completedMissions: [],
        score: 0
      }
    ])
  );

  selectedMission = 0;
  selectedTeam = teams[0];
  renderAll();

  // 2. Enviar reset como si fuera guardado normal
  for (const team of teams) {
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        equipo: team,
        puntos: 0,
        completadas: []
      })
    });
  }

  console.log("Reset enviado como escrituras normales");
}
	
	function resetAll() {
  		resetProgress();  // Tu función que reinicia la página
  		resetComoEscritura();     // La que reinicia la hoja de cálculo
	}

    function renderTeacherArea() {
      const teacherArea = $("teacher-area"), login = $("teacher-login"), btn = $("teacher-toggle-btn");
      if (teacherMode) {
        login.style.display = "none"; teacherArea.style.display = "block"; btn.textContent = "Cerrar Centro de Control de Misiones";
        $("teacher-grid").innerHTML = missions.map((m,i) => `<div class="teacher-card"><div style="display:flex; justify-content:space-between; align-items:center; gap:10px;"><span style="font-size:1.7rem;">${m.icon}</span><span style="font-size:12px; padding:6px 10px; border-radius:999px; background:rgba(0,0,0,0.2);">Misión ${m.id}</span></div><div style="margin-top:12px; font-weight:700;">${m.title}</div><p style="margin-top:10px;">Código: <strong>${missionCodes[i]}</strong></p><p>Puntos: ${missionPoints[i]}</p><p>Equipos que la han superado: ${teams.filter(team => teamProgress[team].completedMissions.includes(i)).length}</p></div>`).join("");
      } else {
        login.style.display = "block"; teacherArea.style.display = "none"; btn.textContent = "Abrir Centro de Control de Misiones";
      }
    }

    function toggleTeacherMode() {
      const input = $("teacher-password").value, errorBox = $("teacher-error");
      if (teacherMode) {
        teacherMode = false; errorBox.style.display = "none"; renderTeacherArea(); return;
      }
      if (input === teacherPassword) {
        teacherMode = true; errorBox.style.display = "none"; renderTeacherArea();
      } else {
        errorBox.textContent = "Clave de acceso incorrecta."; errorBox.style.display = "block";
      }
    }

    function openMissionImage(src, title) {
      const modal = $("imageModal");
      $("imageModalImg").src = src;
      $("imageModalTitle").textContent = title;
      modal.classList.add("open");
    }

    function closeMissionImage(event) {
      if (event && event.target && event.target.closest(".image-modal-content")) return;
      const modal = $("imageModal");
      modal.classList.remove("open");
      $("imageModalImg").src = "";
    }

    function renderAll() {
      renderMissionGrid(); renderMissionCard(); renderCommanderPanel(); renderBoard(); renderRanking(); renderStatus(); renderTeacherArea();
    }

    $("validate-btn").addEventListener("click", validateCurrentMission);
    $("reset-btn").addEventListener("click", resetAll);
    $("teacher-toggle-btn").addEventListener("click", toggleTeacherMode);
    $("code-input").addEventListener("keydown", (e) => { if (e.key === "Enter") validateCurrentMission(); });
    $("teacher-password").addEventListener("keydown", (e) => { if (e.key === "Enter") toggleTeacherMode(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMissionImage(); });

    cargarDatos();
    // refresco automático cada 5 segundos
	setInterval(cargarDatos, 5000);


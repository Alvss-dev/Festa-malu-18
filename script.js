// Contador de confirmações (simulado)
let confirmados = 0;

document.getElementById('rsvpForm').addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(this);
  const presenca = formData.get('presenca');

  if(presenca === "Sim"){
    confirmados++;
    document.getElementById('counter').innerText = confirmados + " pessoas já confirmaram 🎉";
  }

  // Mensagem amigável
  document.getElementById('mensagem').innerHTML = 
    "<p>Presença confirmada! A Malu espera você para comemorar esse momento especial 🌊💙</p>";

  // ===== Envio por EmailJS ou Formspree =====
  // Exemplo com Formspree:
  fetch("https://formspree.io/f/SEU_ENDPOINT", {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => console.log("Enviado!"));

  this.reset();
});
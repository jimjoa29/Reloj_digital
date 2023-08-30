const hora = document.querySelector("#horas");
const minuto = document.querySelector("#minutos");
const segundo = document.querySelector("#segundos");

document.addEventListener("DOMContentLoaded", (e) => {
  obtenerTiempo();
});

const obtenerTiempo = () => {
  setInterval(() => {
    const date = new Date();
    const horas = date.getHours();
    const minutos = date.getMinutes();
    const segundos = date.getSeconds();

    mostrarTiempo(horas, minutos, segundos);
  }, 1000);
};

const mostrarTiempo = (horas, minutos, segundos) => {
  hora.innerHTML = `${horas}`;
  minuto.innerHTML = `${minutos}`;
  segundo.innerHTML = `${segundos}`;
};

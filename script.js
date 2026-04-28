// Simple modal logic
const openBtn = document.querySelector("#open-modal");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-modal")

openBtn.addEventListener("click", () => {modal.showModal();});
closeBtn.addEventListener("click", () => {modal.close()});
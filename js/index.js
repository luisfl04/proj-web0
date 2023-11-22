const openmodal = document.getElementById("open-modal")
const modal = document.getElementById("modal")

const ToggleModal = () => {
    modal.classList.toggle("")
}

[openmodal].forEach((elem) => {
    elem.addEventListener("click", ToggleModal)
})
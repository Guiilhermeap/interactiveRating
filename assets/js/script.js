const cardFirst = document.querySelector(".card__first")
const cardSecond = document.querySelector(".card__second")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".numeros__circulo")

submitButton.addEventListener("click", () => {
    cardSecond.classList.remove("hidden")
    cardFirst.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
let homeScoreThing = 0
let homeEl = document.getElementById("homeScore")

function homeAddOne() {
    homeScoreThing += 1
    homeEl.textContent = homeScoreThing
}
function homeAddTwo() {
    homeScoreThing += 2
    homeEl.textContent = homeScoreThing
}
function homeAddThree() {
    homeScoreThing += 3
    homeEl.textContent = homeScoreThing
}


let guestScoreThing = 0
let guestEl = document.getElementById("guestScore")

function guestAddOne() {
    guestScoreThing += 1
    guestEl.textContent = guestScoreThing
}
function guestAddTwo() {
    guestScoreThing += 2
    guestEl.textContent = guestScoreThing
}
function guestAddThree() {
    guestScoreThing += 3
    guestEl.textContent = guestScoreThing
}
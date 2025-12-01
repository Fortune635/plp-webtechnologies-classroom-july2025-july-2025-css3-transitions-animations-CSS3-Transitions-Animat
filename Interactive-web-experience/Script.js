/* ===== Dark Mode Toggle ===== */
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/* ===== Animated Box Function ===== */
function toggleAnimation(boxId) {
    const box = document.getElementById(boxId);
    box.classList.toggle("active");
}

/* ===== Flip Card Function ===== */
function flipCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle("flip");
}

/* ===== Loader Toggle Function ===== */
function toggleLoader(loaderId) {
    const loader = document.getElementById(loaderId);
    loader.classList.toggle("active");
}

/* ===== Modal Functions ===== */
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add("active");
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("active");
}

/* ===== Example Function with Parameters & Return ===== */
function calculateArea(width, height) {
    return width * height;
}
console.log("Box area:", calculateArea(50, 100)); // Example usage

/* ===== Demonstrating Scope ===== */
let globalVar = "I am global";
function testScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}
testScope();
console.log(globalVar);
// console.log(localVar); // Uncommenting this will cause an error (localVar not accessible)

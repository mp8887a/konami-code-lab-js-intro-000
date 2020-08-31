const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
// Write your JavaScript code inside the init() function
var index = 0;
const getElement = document.querySelector('body');

getElement.addEventListener('keydown', function(e) {
    if (code[index] === e.key) {
        index++;

        if (index === codes.length) {
            alert("CONGRATS!");
            index = codes.length;
        }
    } else {
        index = 0;
    }
})
}

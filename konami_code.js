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
    if (code[index] === e.which || code[index] === e.detail) {
        index++;

        if (index === 10) {
            alert("CONGRATS!");
            index = 0;
        }
    } else {
        index = 0;
    }
})
}

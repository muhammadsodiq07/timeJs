let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elButton = document.querySelector(".btn");
let div = document.querySelector(".div");

elButton.addEventListener("click", () => {
  let span = document.createElement("span");
  span.className = 'span';
  span.append(document.createTextNode(elInput.value));
  div.appendChild(span);

  let count = elInput.value;

  setInterval(() => {
    setTimeout(() => {
      span.textContent = count;
      count--;
      if(count === -1) {
        span.style.display = "none";
      }
    })
  }, 1000);
  elInput.value = "";
});
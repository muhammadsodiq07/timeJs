let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elButton = document.querySelector(".btn");
let div = document.querySelector(".div");
let main = document.querySelector(".mainDiv").style.display = 'none';
let load = document.querySelector(".load").style.display = 'block'



setTimeout(() => {
  document.querySelector(".load").style.display = 'none';
  document.querySelector(".mainDiv").style.display = 'block';
},4000)

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



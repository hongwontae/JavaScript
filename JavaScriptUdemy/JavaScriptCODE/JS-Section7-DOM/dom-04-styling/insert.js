const apple = document.querySelector(".insertAdjacentElement");

const beforebegin = document.createElement("h3");
beforebegin.innerText = "beforebegin";

const afterbegin = document.createElement("h3");
afterbegin.innerText = "afterbegin";

const beforeend = document.createElement("h3");
beforeend.innerText = "beforeend";

const afterend = document.createElement("h3");
afterend.innerText = "afterend";

apple.insertAdjacentElement("beforebegin", beforebegin);
apple.insertAdjacentElement("afterbegin", afterbegin);
apple.insertAdjacentElement("beforeend", beforeend);
apple.insertAdjacentElement("afterend", afterend);
const body = document.querySelector("body");
const navData = [
  { num: "00", text: "Home", url: "/" },
  { num: "01", text: "Destination", url: "/destination.html" },
  { num: "02", text: "Crew", url: "/crew.html" },
  { num: "03", text: "Technology", url: "/technology.html" },
];

body.textContent = "";

const navContainer = document.createElement("div");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const logo = document.createElement("img");
const line = document.createElement("div");

navContainer.classList.add("nav-container");
line.classList.add("line");

logo.setAttribute("src", "../images/shared/logo.svg");
logo.setAttribute("alt", "Logo");

body.appendChild(navContainer);
navContainer.appendChild(nav);
nav.appendChild(logo);
nav.appendChild(line);
nav.appendChild(ul);

function addLinkItem(num, text, url, parent) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  const numberSpan = document.createElement("span");
  const textSpan = document.createElement("span");

  textSpan.textContent = text;
  numberSpan.textContent = num;

  numberSpan.classList.add("nav-number");
  textSpan.classList.add("nav-text");

  link.setAttribute("href", url);
  link.appendChild(numberSpan);
  link.appendChild(textSpan);
  li.appendChild(link);
  parent.appendChild(li);
}

navData.forEach((item) => addLinkItem(item.num, item.text, item.url, ul));

async function getData() {
  try {
    const response = await fetch("../data-json/data.json");
    const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

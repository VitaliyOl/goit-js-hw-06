const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const image = images.map(
  (element) =>
    `<li> <img src = ${element.url} alt = ${element.alt} width = '220' height = '180'></img> </li>`
);

const galeryRef = document.querySelector(".gallery");

galeryRef.insertAdjacentHTML("afterbegin", image);

galeryRef.style.listStyleType = "none";
galeryRef.style.display = "flex";

// newGalery.setAttribute("style", display: flex;", "list-style-type:none;);

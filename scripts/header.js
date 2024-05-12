let allLinks = document.querySelectorAll(".nav-link");
let studio = document.querySelector("#nav-link-one");
let portfolio = document.querySelector("#nav-link-two");
let contacts = document.querySelector("#nav-link-three");
for (const link of allLinks) {
	link.addEventListener("click", function (event) {
		localStorage.setItem("page", event.target.textContent);
	});
}

let get = localStorage.getItem("page");
let colorOcean = getComputedStyle(document.documentElement).getPropertyValue("--color-ocean");

if (get == "Studio") {
	studio.style.color = colorOcean;
	studio.classList.add("active");
} else if (get == "Portfolio") {
	portfolio.style.color = colorOcean;
	portfolio.classList.add("active");
} else if (get == "Contacts") {
	contacts.style.color = colorOcean;
	contacts.classList.add("active");
}

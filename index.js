let burgersItem = document.getElementById("burgers");
let sidesItem = document.getElementById("sides");
let drinksItem = document.getElementById("drinks");

let homeNav = document.getElementById("home");
let orderNav = document.getElementById("order");
let companyNav = document.getElementById("company");
let faqNav = document.getElementById("faq");
let contactNav = document.getElementById("contact");

burgersItem.classList.add("menuButtonChecked");

const handleMenuItemClick = (element) => {
  switch (element.id) {
    case "burgers":
      burgersItem.classList.add("menuButtonChecked");
      sidesItem.classList.remove("menuButtonChecked");
      drinksItem.classList.remove("menuButtonChecked");
      break;
    case "sides":
      burgersItem.classList.remove("menuButtonChecked");
      sidesItem.classList.add("menuButtonChecked");
      drinksItem.classList.remove("menuButtonChecked");
      break;
    case "drinks":
      burgersItem.classList.remove("menuButtonChecked");
      sidesItem.classList.remove("menuButtonChecked");
      drinksItem.classList.add("menuButtonChecked");
      break;
  }
};

const handelNavigationClick = (element) => {
  switch (element.id) {
    case "home":
      homeNav.classList.add("navChecked");
      orderNav.classList.remove("navChecked");
      companyNav.classList.remove("navChecked");
      faqNav.classList.remove("navChecked");
      contactNav.classList.remove("navChecked");
      break;
    case "order":
      homeNav.classList.remove("navChecked");
      orderNav.classList.add("navChecked");
      companyNav.classList.remove("navChecked");
      faqNav.classList.remove("navChecked");
      contactNav.classList.remove("navChecked");
      break;
    case "company":
      homeNav.classList.remove("navChecked");
      orderNav.classList.remove("navChecked");
      companyNav.classList.add("navChecked");
      faqNav.classList.remove("navChecked");
      contactNav.classList.remove("navChecked");
      break;
    case "faq":
      homeNav.classList.remove("navChecked");
      orderNav.classList.remove("navChecked");
      companyNav.classList.remove("navChecked");
      faqNav.classList.add("navChecked");
      contactNav.classList.remove("navChecked");
      break;
    case "contact":
      homeNav.classList.remove("navChecked");
      orderNav.classList.remove("navChecked");
      companyNav.classList.remove("navChecked");
      faqNav.classList.remove("navChecked");
      contactNav.classList.add("navChecked");
      break;
  }
};

burgersItem.addEventListener("click", () => handleMenuItemClick(burgersItem));
sidesItem.addEventListener("click", () => handleMenuItemClick(sidesItem));
drinksItem.addEventListener("click", () => handleMenuItemClick(drinksItem));

homeNav.addEventListener("click", () => handelNavigationClick(homeNav));
orderNav.addEventListener("click", () => handelNavigationClick(orderNav));
companyNav.addEventListener("click", () => handelNavigationClick(companyNav));
faqNav.addEventListener("click", () => handelNavigationClick(faqNav));
contactNav.addEventListener("click", () => handelNavigationClick(contactNav));

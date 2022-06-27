import searchApi from "./API/fetchdata";
import markup from "./templates/markup";
const input = document.querySelector(".form");

input.addEventListener("submit", handleSubmit);
function handleSubmit (event) {
    event.preventDefault();
    const target = event.target.weatherinp.value;
    searchApi(target).then(data => markup(data))

}


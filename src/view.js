import getCar from "./js/getCars";
import renderCars from "./js/renderCars";
import openModal from "./js/modal";

const data = getCar();

renderCars(data);

openModal()
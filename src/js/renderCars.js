export default function renderCars(data){
    const render = document.querySelector('.viewCars');
    const markup = data.map((car) => _createMarkup(car)).join("")
    render.insertAdjacentHTML("beforeend", markup)
}

function _createMarkup ({mark, model, year, price, tell, image}){
    const car = `<li class="itemList">
  <img src="${image}" alt="" />
  <p>${mark}</p>
  <p>${model}</p>
  <p>${year}</p>
  <p>${price}</p>
   <p>${tell}</p>
</li>`
return car;
}

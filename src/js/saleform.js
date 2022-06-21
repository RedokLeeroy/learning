
export default function createForm () {
    const container = document.querySelector(".container");
    const mark = `<form action="submit" class = "form-mark">
  <label for="mark">Марка<input name="mark" id="mark" type="text" /></label>
  <label for="model">Модель<input name="model" id="model" type="text" /></label>
  <label for="year">Рік виготовлення<input name="year" id="year" type="text" /></label>
  <label for="price">Вартість<input name="price" id="price" type="text" /></label>
  <label for="tell">Телефон<input name="tell" id="tell" type="text" /></label>
  <label for="image">Фото<input name="image" id="image" type="text" /></label> 
  <button type="submit" >Відправити форму</button>
</form>`
container.insertAdjacentHTML("beforeend", mark)
}
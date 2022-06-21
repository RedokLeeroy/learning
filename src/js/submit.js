export default function formSubmit() {
    const formMark = document.querySelector('.form-mark');
    formMark.addEventListener('submit', handFormSubmit);
}

function handFormSubmit(event) {
        event.preventDefault();
        const {mark, model, year, price, tell, image} = event.target.elements;
        const carObj = {
            mark: mark.value,
            model: model.value,
            year: year.value,
            price: price.value,
            tell: tell.value,
            image: image.value
        }
        const storageKey = 'cars';
        const cars = JSON.parse(localStorage.getItem(storageKey));
        cars.push(carObj);
        localStorage.setItem(storageKey, JSON.stringify(cars))
        event.target.reset();
    }

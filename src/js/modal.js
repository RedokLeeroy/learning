import * as basicLightbox from 'basiclightbox'
import 'basicLightbox/src/styles/main.scss';
export default function openModal (){

const  modal = document.querySelector(".viewCars");

modal.addEventListener("click", handlerOpenModal);
function handlerOpenModal (event) {
const instance = basicLightbox.create(`
    <div class="modal">

    </div>
`)
instance.show()
}

}


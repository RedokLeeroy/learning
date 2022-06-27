const refs = {
  list: document.querySelector('.list'),
  input: document.querySelector('.form'),
};

export default function markup({ current, location }) {
  const markup = `<img src="${current.condition.icon}" alt="${current.condition.text}" />
<p>${current.condition.text}</p>
<p>${location.name}</p>
<p>${current.temp_c}</p>`;
  refs.list.innerHTML = markup;
}

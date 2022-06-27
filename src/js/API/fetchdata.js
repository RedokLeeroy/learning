const baseURL = "http://api.weatherapi.com/v1/current.json"
const key = "ebf0482e0efe4310b7f140703222706"
const lang = "uk"

export default function searchApi (city){
 const data = fetch(`${baseURL}?key=${key}&q=${city}&lang=${lang}`).then(response => response.json())
 return data;
} 
export default function getCar (){
    const data = JSON.parse(localStorage.getItem('cars'));
    return data;
}
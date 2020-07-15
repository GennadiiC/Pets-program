/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pets = [
  {name: 'Joey', type: 'Dog', breed: 'Australian Shephard', age: '25', photo: 'img/aussie.jpg'},
  {name: 'Sausage', type: 'Dog', breed: 'Taksa', age: '88', photo: 'img/dachshund.jpg'},
  {name: 'Shlyapa', type: 'Dog', breed: 'Golden Retriever', age: '43', photo: 'img/golden.jpg'},
  {name: 'Murka', type: 'Cat', breed: 'Persian', age: '21', photo: 'img/persian.jpg'},
  {name: 'Jorge', type: 'Dog', breed: 'Pug', age: '39', photo: 'img/pug.jpg'},
  {name: 'Meowtiger', type: 'Cat', breed: 'Tigretta', age: '1112', photo: 'img/tabby.jpg'},
];
  
let html= ``;
  
for (let i = 0; i < pets.length; i++) {
  html += `<h2>${pets[i].name}</h2> 
           <h3>${pets[i].type} | ${pets[i].breed}</h3> 
           <p>Age: ${pets[i].age}</p>
           <img src="${pets[i].photo}" alt="${pets[i].breed}">`;
}

document.querySelector('main').innerHTML = html;
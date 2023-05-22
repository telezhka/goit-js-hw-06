import"./modulepreload-polyfill-ec808ebb.js";/* empty css               */const t=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Group of Horses Running"}],o=document.querySelector(".gallery"),r=({url:e,alt:s})=>`
    <li class="gallery-item">
      <img src="${e}" alt="${s}" class="gallery-image">
    </li>
  `,l=e=>{const s=e.map(r).join("");o.insertAdjacentHTML("beforeend",s)};l(t);

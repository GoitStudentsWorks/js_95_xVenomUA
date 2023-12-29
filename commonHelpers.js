import{o as u,g as S,i as E,p as L}from"./assets/subscription-179ff2f3.js";import"./assets/vendor-611745ce.js";const w="/js_95_xVenomUA/assets/yellowBasket-88cc64a6.png",C={FILTERS_KEY:"filters",CART_KEY:"cart"},q=document.querySelector("span#cart-counter"),_=document.querySelector(".js-cart-block"),y=document.querySelector(".cart-list-block"),x=document.querySelector(".cart-delete-btn"),I=document.querySelector(".cart-form"),m=document.querySelector(".modal-backdrop-two");x.addEventListener("click",$);function $(){localStorage.removeItem("cart"),l()}function p(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}async function l(){let t=await p(C.CART_KEY);if(q.textContent=t.length,t.length===0){_.innerHTML=B(),u();return}M()}l();async function M(){const e=p("cart").map(c=>c._id);y.innerHTML="";try{let c=0,s=[],a=[],r=[];for(let o=0;o<e.length;o+=1){const i=await S(e[o]),v=A(i,e[o]);y.innerHTML+=v;const f=JSON.parse(localStorage.getItem("cart"));c+=i.price,s.push(i.price),T.textContent=`${Number(c.toFixed(2))}`,O(".cart-close").then(d=>{r.push(f[o]._id),localStorage.setItem("cart1",JSON.stringify(a)),d.forEach(h=>{h.addEventListener("click",b=>{const k=b.currentTarget.id;r=r.filter(n=>n!==k),a=[];for(let n=0;n<r.length;n+=1)a.push({_id:r[n],quantity:1});localStorage.setItem("cart",JSON.stringify(a)),l()})})}).catch(d=>{console.error(d.message)})}}catch(c){console.log(c)}}function O(t){return new Promise((e,c)=>{const s=document.querySelectorAll(t);if(s.length>0)e(s);else{const a=new MutationObserver(()=>{const r=document.querySelectorAll(t);r.length>0&&(a.disconnect(),e(r))});a.observe(document.documentElement,{childList:!0,subtree:!0})}})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("cart"),window.addEventListener("scroll",function(){})});function A(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
        <li class="cart-card-container" data-productlist-id="${t._id}">
          <div class="cart-image-container">
            <img src="${t.img}" alt="${t.name}" class="">
          </div>
        
        <div class="cart-info">
          <div class="cart-descript-text">
          <div class="cart-div-new">
            <p class="cart-prod-name">${t.name}</p>
            <button type="button" id="${t._id}" class="cart-close">
              <svg class="cart-close-icon" width="10.125" height="10.125">
                <use href="${E}#icon-close"></use>
              </svg>
            </button>
            </div>
          <div class="cart-frame">
  
          <div class="category-cont">
              <ul class="cart-text-cat">
              <li>
              <p class="cart-category-text">Category:
              <span class=" cart-category-black">${t.category}</span></p>
              </li>
              <li class="cart-text-size">

            <p class="cart-size-text">Size:
              <span class="cart-size-black">${t.size}</span></p></li>
              
          </div>
  
            <div class="cart-price">
            <p class="cart-card-price">$${t.price}</p>
          </div>
          </div>
        </div>
      </div>
      </li>
      <hr class="cart-line">
    `}function B(){return` 
  <div class="js-cart-block">
  <div class="cart-empty-new">
  <div class="cart-empty-basket">
  <img class="cart-basket-img"
                src="${w}"
                alt="yellow basket"
                loading="lazy"
                width="132"
                height="114"
              />
  </div>
  <div class="cart-empty-desc">
              <ul class="cart-desc-ul">
                <li>
                  <p class="cart-empty-text">
                    Your basket is <span class="cart-text-span">
                    empty...</span>
                  </p>
                </li>
                <li>
                  <p class="cart-gray-text">
                    Go to the main page to select your favorite <br /> products and add
                    them to the cart.
                  </p>
                </li>
              </ul>
            </div>
            </div>
  `}const T=document.querySelector("span#your-order-total-price");I.addEventListener("submit",j);async function j(t){t.preventDefault();const e=document.querySelector(".error-message"),c=document.querySelector(".cart-email-input").value;u();const s=p("cart"),a=z(c,s);try{const r=await L(a);g(!0),document.body.style.overflow="hidden",localStorage.removeItem("cart"),u(),l()}catch{e.style.display="block",setTimeout(()=>e.style.display="none",2e3)}}function z(t,e){return{email:t,products:e.map(c=>({productId:c._id,amount:c.quantity}))}}function g(t=!0){m.classList.toggle("is-hidden-basket",!t),t&&D(),document.body.style.overflow="scroll"}function D(){document.querySelector(".modal-close-btn-basket").addEventListener("click",()=>g(!1)),m.addEventListener("click",e=>{e.target===m&&g(!1)})}
//# sourceMappingURL=commonHelpers.js.map

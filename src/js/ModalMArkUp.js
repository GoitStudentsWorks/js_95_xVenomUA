export function ModalMarkUP(productInfo) {
    const { _id, name, category, size, popularity, desc, price, img } = productInfo;
    const id = document.querySelector('.shop-btn-card');
    const nameCard = document.querySelector('.shop-h-name');
    const categoryCard = document.querySelector('.shop-span-category');
    const sizeCard = document.querySelector('.shop-span-size');
    const popularityCard = document.querySelector('.shop-span-popularity');
    const descCard = document.querySelector('.shop-text-discription');
    const priceCard = document.querySelector('.shop-h-price');
    const imgCard = document.querySelector('.shop-img');
    id.dataset.idcards = _id;
    nameCard.textContent = name;
    categoryCard.textContent = category;
    sizeCard.textContent = size;
    popularityCard.textContent = popularity;
    descCard.textContent = desc;
    priceCard.textContent = `$${price}`;
    imgCard.src = img;
    imgCard.alt = name;
}
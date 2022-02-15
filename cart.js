//For ADD TO CART
function myCart(no) {
    localStorage.setItem('id',JSON.stringify( no))
    window.location = "cart.html";

    const items = [{
    id: "1",
    name: "Branded shoes",
    image: './img1.jpg',
    price: 5000,
    quantity: 0

}, {
    id: "2",
    name: "Ray-Ban Glasses",
    image: './img2.jpg',
    price: 10000,
    quantity: 0

}, {
    id: "3",
    name: "Wallet",
    image: './img3.jpg',
    price: 2000,
    quantity: 0

}, {
    id: "4",
    name: "Wrist Watch",
    image: './img4.jpg',
    price: 2000,
    quantity: 0

}, {
    id: "5",
    name: "Perfume",
    image: './img5.jpg',
    price: 5000,
    quantity: 0

}, {
    id: "6",
    name: "Cigeratte Case",
    image: './img6.jpg',
    price: 1000,
    quantity: 0

}, {
    id: "7",
    name: "Jacket",
    image: './img7.jpg',
    price: 12000,
    quantity: 0

}, {
    id: "8",
    name: "Helmet",
    image: './img8.jpg',
    price: 5000,
    quantity: 0
}];
}


items.forEach((v)=>{
    if(v.id === localStorage.getItem('id')){
        // let a =document.getElementById('cart-item-image').getAttribute("src");
        document.getElementById('cart-item-title').innerText = v.name;
        document.getElementById('cart-item-image').src = v.image;
        document.getElementById('cart-price').innerText = v.price;
        // a.value = v.image;
        console.log(v)
        // console.log(a)
    }
})


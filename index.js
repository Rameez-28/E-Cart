// let arr = [{id: '1',imgUrl: './img1.jpg',title: 'branded shose',rs: '2000', des: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},{},{}]

// var sidenav= document.getElementById('sidenav');
// var menubar= document.getElementById('menubar');

// sidenav.style.width="0px";
// menubar.onclick=function(){
//     if(sidenav.style.width=="0px"){
//         sidenav.style.width="250px";
//     }
//     else{
//         sidenav.style.width="0px";
//     }
// }




function myfunction() {
    window.location = "shoes.html";
}

function cal() {
    var shoeAmt = 5000;
    var qtyOfPrd = document.getElementById('val').value;
    var show = qtyOfPrd * shoeAmt;
    document.getElementById("bill").innerHTML = (`Your Total Bill is Rs.${show}`);

}
// For ADD TO CART
// function myCart(no) {
//     localStorage.setItem('id',JSON.stringify( no))
//     window.location = "cart.html";
// }



//Array for store Items

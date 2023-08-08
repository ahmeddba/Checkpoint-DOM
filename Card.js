//Creating a class for Cards
let Panier = [];
 class Card {
    constructor(Name, price,img) {
        this.Name = Name;
        this.price = price;
        this.img = img;
        this.quantity = 0;
        this.like = false;
      }
}

//creating instances of card class
let card1 = new Card("hat", 140,"casquette.jpg");
let card2 = new Card("shoes", 240,"shoes.jpg");
let card3 = new Card("perfume", 200,"parfum.jpg");

//Show cards when reload the page
setTimeout(() => {
    showCards();
}, 1);
//loading the cards in array
Panier.push(card1,card2,card3);

//Showing the cards in the div containerr
function showCards(){
Panier.forEach(element => {
    if(!element.like){
    document.querySelector(".Containerr").innerHTML  +=`
    <div class="cr card w-75">
        <img src="${element.img}" alt="img of a hat" height="100%" width="200">
        <div class="card-body cr2">
        <h5 class="card-title"> ${element.Name}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <div class="adding">
            <div class="inter">
            <button class="plus-btn">
            <i class="plus fas fa-plus-circle"></i>
          </button>
                <p class="qtt" style="display: inline-block;">${element.quantity}</p>
                <button class="moins-btn">
                <i  class="moins fas fa-minus-circle"></i>
                </button>
                <button class="delete-btn">
                <i  class="del fas fa-trash-alt"></i>
</button>
<button class="like-btn">

                <i  class="like fas fa-heart"></i>
           </button>
                </div>
            <p class="price"> ${element.price}$</p>
        </div>
    </div>
    </div>`;
}else{

    document.querySelector(".Containerr").innerHTML  +=`
    <div class="cr card w-75">
        <img src="${element.img}" alt="img of a hat" height="100%" width="200">
        <div class="card-body cr2">
        <h5 class="card-title"> ${element.Name}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <div class="adding">
            <div class="inter">
            <button class="plus-btn">
            <i class="plus fas fa-plus-circle"></i>
          </button>
                <p class="qtt" style="display: inline-block;">${element.quantity}</p>
                <button class="moins-btn">
                <i  class="moins fas fa-minus-circle"></i>
                </button>
                <button class="delete-btn">
                <i  class="del fas fa-trash-alt"></i>
</button>
<button class="like-btn">

<i class="fas fa-heart" style="color: #ff0000;"></i>
           </button>
                </div>
            <p class="price"> ${element.price}$</p>
        </div>
    </div>
    </div>`;

}}

);
ShowTotalPrice();
addProduct();
decreaseProduct();
removeProduct();
likeProduct();
}


function addProduct(){
    let btnPlus = document.querySelectorAll('.plus-btn');
    btnPlus.forEach((btnn,i)  => {
        btnn.addEventListener('click' , () => {
            Panier[i].quantity ++;
    console.log(Panier[i].quantity);
    document.querySelector(".Containerr").innerHTML="";
    showCards();
        })
    })
}

function decreaseProduct(){
    let btnPlus = document.querySelectorAll('.moins-btn');
    btnPlus.forEach((btnn,i)  => {
        btnn.addEventListener('click' , () => {
            Panier[i].quantity --;
            if(Panier[i].quantity < 0)Panier[i].quantity=0;
    console.log(Panier[i].quantity);
    document.querySelector(".Containerr").innerHTML="";
    showCards();
        })
    })
}

function removeProduct(){
    let btnPlus = document.querySelectorAll('.delete-btn');
    btnPlus.forEach((btnn,i)  => {
        btnn.addEventListener('click' , () => {
            Panier.splice(i,1);
    document.querySelector(".Containerr").innerHTML="";
    showCards();
        })
    })

}

function likeProduct(){
    let btnPlus = document.querySelectorAll('.like-btn');
    btnPlus.forEach((btnn,i)  => {
        btnn.addEventListener('click' , () => {
            if(!Panier[i].like){
                Panier[i].like =true;
                console.log(Panier[i].like);

             document.querySelector(".Containerr").innerHTML="";
    showCards();
            }else{
                Panier[i].like =false;
                console.log(Panier[i].like );
                document.querySelector(".Containerr").innerHTML="";
    showCards();
            }

        })
    })
}

function ShowTotalPrice(){
    let total=0;
    Panier.forEach(element =>{
        total += element.price * element.quantity;
    });

    document.querySelector('#tot').innerHTML =`Total price: ${total}$`;
}

/*function addToCart(element){
    let mainEl = element.closest('.description');
    let price = mainEl.querySelector('.price').innerText;           /* just selection 
    let quantity = mainEl.querySelector('input').value;
    let velicina = document.getElementById('size').value;

    let cartItems = document.querySelector('.cart-items');
    let totalDiv = document.querySelector('.total'); 

    if(parseInt(quantity) > 0){
        price = price.substring();
        price = parseInt(price);
        console.log(price);

        let total = price * parseInt(quantity);

        cartItems.innerHTML += `<div class='cart-total'>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <h4>Ukupno: ${total},00 RSD</h4>
                                    <!-- <h4>     Veličina: ${velicina}</h4> -->
                                    <button onclick="finishPurchase()">Naruči</button>
                                </div> `

        element.innerText = 'Dodato u korpu';
        element.setAttribute('disabled', 'true')

        totalDiv.style.display = 'none'; 
        localStorage.setItem('total', total);
        localStorage.setItem('velicina', velicina);
    }
    else{
        alert('Odaberi količinu!')
    }

}*/

function addToCart(element) {
    let mainEl = element.closest('.description');
    let price = mainEl.querySelector('.price').innerText;
    let quantity = mainEl.querySelector('input').value;
    let velicina = document.getElementById('size').value;

    let cartItems = document.querySelector('.cart-items');
    let totalDiv = document.querySelector('.total');

    if (parseInt(quantity) > 0) {
        price = parseInt(price);
        let total = price * parseInt(quantity);

        cartItems.innerHTML += `<div class='cart-total'>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <h4>Ukupno: ${total},00 RSD</h4>
                                    <button onclick="finishPurchase()">Naruči</button>
                                </div> `

        element.innerText = 'Dodato u korpu';
        element.setAttribute('disabled', 'true')

        totalDiv.style.display = 'none';
        localStorage.setItem('total', total);
        localStorage.setItem('velicina', velicina);
        localStorage.setItem('quantity', quantity); // Dodato
    } else {
        alert('Odaberi količinu!');
    }
}

function finishPurchase() {
    // Preusmeri na checkout.html
    window.location.href = 'checkout.html';
}
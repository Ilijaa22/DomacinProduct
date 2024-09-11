/* // Učitaj podatke iz localStorage
const total = localStorage.getItem('total');
const velicina = localStorage.getItem('velicina');

// Proveri da li podaci postoje i prikazuj ih ili ih obradi
if (total && velicina) {
    document.getElementById('orderSummary').innerHTML = `
        <h3>Vaša narudžbina</h3>
        <p>Ukupno: ${total},00 RSD</p>
        <p>Veličina: ${velicina}</p>
    `;
} else {
    // Ako podaci nisu pronađeni
    document.getElementById('orderSummary').innerText = "Nema podataka o narudžbini.";
}

 // Kada je forma poslata
 document.getElementById('orderForm').addEventListener('submit', function(event) {
  // Uzimanje sadržaja iz orderSummary i smeštanje u skriveno polje forme
  var orderSummaryContent = document.getElementById('orderSummary').innerText;
  document.getElementById('orderSummaryInput').value = orderSummaryContent;
}); */

// Učitaj podatke iz localStorage
const total = localStorage.getItem('total');
const velicina = localStorage.getItem('velicina');
const kolicina = localStorage.getItem('quantity'); // Dodato

// Proveri da li podaci postoje i prikazuj ih ili ih obradi
if (total && velicina && kolicina) {  // Izmenjeno
    document.getElementById('orderSummary').innerHTML = `
        <h3>Vaša narudžbina</h3>
        <p>Ukupno: ${total},00 RSD</p>
        <p>Veličina: ${velicina}</p>
    `;

    // Postavi vrednosti skrivenih input polja
    document.getElementById('shirtSize').value = velicina;
    document.getElementById('shirtQuantity').value = kolicina;
} else {
    // Ako podaci nisu pronađeni
    document.getElementById('orderSummary').innerText = "Nema podataka o narudžbini.";
}


(function() {
  'use strict';
  window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
              // Proveri validnost forme
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();

                  // Prikaži invalid-feedback za svako nevalidno polje
                  var invalidFields = form.querySelectorAll(':invalid');
                  invalidFields.forEach(function(field) {
                      var feedback = field.nextElementSibling; // pretpostavlja se da je 'invalid-feedback' odmah posle inputa
                      if (feedback && feedback.classList.contains('invalid-feedback')) {
                          feedback.style.display = 'block'; // Prikaži poruku greške
                      }
                  });
              } else {
                  // Forma je validna, dozvoli slanje
                  form.classList.remove('was-validated');
              }

              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();

 
  
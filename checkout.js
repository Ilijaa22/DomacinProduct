const total = localStorage.getItem('total');
const velicina = localStorage.getItem('velicina');
const kolicina = localStorage.getItem('quantity');

if (total && velicina && kolicina) {  
    document.getElementById('orderSummary').innerHTML = `
        <h3>Vaša narudžbina</h3>
        <p>Ukupno: ${total},00 RSD</p>
        <p>Veličina: ${velicina}</p>
    `;

    document.getElementById('shirtSize').value = velicina;
    document.getElementById('shirtQuantity').value = kolicina;
} else {
    document.getElementById('orderSummary').innerText = "Nema podataka o narudžbini.";
}


(function() {
  'use strict';
  window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();

                  var invalidFields = form.querySelectorAll(':invalid');
                  invalidFields.forEach(function(field) {
                      var feedback = field.nextElementSibling; 
                      if (feedback && feedback.classList.contains('invalid-feedback')) {
                          feedback.style.display = 'block'; 
                      }
                  });
              } else {
                  form.classList.remove('was-validated');
              }

              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();

 
  

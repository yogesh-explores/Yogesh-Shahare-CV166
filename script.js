document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      document.getElementById('formStatus').innerHTML = '<p>Thank you, ' + name + '. Your message has been sent!</p>';
      document.getElementById('formStatus').style.color = 'green';
  } else {
      document.getElementById('formStatus').innerHTML = '<p>Please fill out all fields.</p>';
      document.getElementById('formStatus').style.color = 'red';
  }
});

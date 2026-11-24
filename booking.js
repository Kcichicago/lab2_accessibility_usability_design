// MPLS Dog Boarding: validates a stay request and simulates a successful response.

const form = document.getElementById('booking-form');
const ownerName = document.getElementById('owner-name');
const email = document.getElementById('email');
const dogName = document.getElementById('dog-name');
const dropoff = document.getElementById('dropoff');
const pickup = document.getElementById('pickup');
const status = document.getElementById('booking-status');
const fields = [ownerName, email, dogName, dropoff, pickup];

function todayValue() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

function formatDate(value) {
  const parts = value.split('-');
  const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
}

function updateDateMinimums() {
  const today = todayValue();
  dropoff.min = today;
  pickup.min = dropoff.value && dropoff.value > today ? dropoff.value : today;
}

function setError(field, message) {
  const error = document.getElementById(field.id + '-error');
  error.textContent = message ? 'Error: ' + message : '';
  if (message) {
    field.setAttribute('aria-invalid', 'true');
  } else {
    field.removeAttribute('aria-invalid');
  }
}

function dateProblem(field, label, today) {
  if (!field.value) {
    return 'Choose a ' + label + ' date.';
  }
  if (field.value < today) {
    return 'That date has passed. Choose today or a later date.';
  }

  const parts = field.value.split('-');
  const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  if (date.getDay() === 0) {
    return 'We are closed on Sundays. Choose a different ' + label + ' date.';
  }
  return '';
}

const dateParams = new URLSearchParams(window.location.search);
const requestedDropoff = dateParams.get('dropoff');
const requestedPickup = dateParams.get('pickup');
if (requestedDropoff && /^\d{4}-\d{2}-\d{2}$/.test(requestedDropoff)) {
  dropoff.value = requestedDropoff;
}
if (requestedPickup && /^\d{4}-\d{2}-\d{2}$/.test(requestedPickup)) {
  pickup.value = requestedPickup;
}

updateDateMinimums();

form.addEventListener('submit', function (event) {
  event.preventDefault();
  updateDateMinimums();
  status.textContent = '';

  fields.forEach(function (field) {
    setError(field, '');
  });

  const problems = [];
  function recordProblem(field, message) {
    if (message) {
      setError(field, message);
      problems.push(field);
    }
  }

  recordProblem(ownerName, ownerName.value.trim() ? '' : 'Enter your name.');
  if (!email.value.trim()) {
    recordProblem(email, 'Enter your email address.');
  } else if (email.validity.typeMismatch || email.value.lastIndexOf('.') <= email.value.indexOf('@')) {
    recordProblem(email, 'Enter an email like name@example.com.');
  }
  recordProblem(dogName, dogName.value.trim() ? '' : "Enter your dog's name.");

  const today = todayValue();
  const dropoffProblem = dateProblem(dropoff, 'drop off', today);
  const pickupProblem = dateProblem(pickup, 'pick up', today);
  recordProblem(dropoff, dropoffProblem);
  recordProblem(pickup, pickupProblem);

  if (!dropoffProblem && !pickupProblem && pickup.value < dropoff.value) {
    recordProblem(pickup, 'Pick up is before drop off. Choose a pick up date on or after drop off.');
  }

  if (problems.length > 0) {
    problems[0].focus();
    return;
  }

  // Replace this simulated response with the real Node.js request later.
  const requestedDogName = dogName.value.trim();
  const requestedDropoff = formatDate(dropoff.value);
  const requestedPickup = formatDate(pickup.value);
  status.textContent = 'Request received for ' + requestedDogName + ', ' + requestedDropoff + ' to ' + requestedPickup + '. We will reply within one business day. Your stay is not confirmed until we contact you.';
  form.reset();
  updateDateMinimums();
});

fields.forEach(function (field) {
  field.addEventListener('input', function () {
    status.textContent = '';
    setError(field, '');
    if (field === dropoff || field === pickup) {
      updateDateMinimums();
      setError(dropoff, '');
      setError(pickup, '');
    }
  });
});

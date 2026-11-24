// MPLS Dog Boarding: services page
// Builds a price estimate from the choices on the page and checks a pair of dates.

const serviceBoxes = document.querySelectorAll('input[name="service"]');
const sizeSelect = document.getElementById('size');
const dropoff = document.getElementById('dropoff');
const pickup = document.getElementById('pickup');

const emptyNote = document.getElementById('empty-note');
const chosenList = document.getElementById('chosen-list');
const subtotalOut = document.getElementById('subtotal');
const sizeLabel = document.getElementById('size-label');
const sizeAmount = document.getElementById('size-amount');
const totalOut = document.getElementById('total');
const estimateStatus = document.getElementById('estimate-status');
const dateStatus = document.getElementById('date-status');
const requestLink = document.querySelector('.summary a.btn');

const clearButton = document.getElementById('clear');
const clearConfirm = document.getElementById('clear-confirm');

function money(amount) {
  return '$' + amount.toFixed(2);
}

// Redraw the summary from whatever is ticked and selected right now.
// Returns the total so callers can mention it in a status message.
function updateEstimate() {
  const size = sizeSelect.options[sizeSelect.selectedIndex];
  const factor = Number(size.dataset.factor);
  let subtotal = 0;

  chosenList.textContent = '';

  serviceBoxes.forEach(function (box) {
    if (!box.checked) {
      return;
    }
    const price = Number(box.dataset.price);
    subtotal += price;

    const item = document.createElement('li');
    const name = document.createElement('span');
    name.textContent = box.dataset.name + ', ' + money(price);

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'link-button';
    remove.textContent = 'Remove ' + box.dataset.name;
    remove.addEventListener('click', function () {
      box.checked = false;
      const total = updateEstimate();
      estimateStatus.textContent = box.dataset.name + ' removed. Estimated total is ' + money(total) + '.';
      box.focus();
    });

    item.append(name, remove);
    chosenList.append(item);
  });

  const extra = subtotal * (factor - 1);
  const total = subtotal + extra;
  const percent = Math.round((factor - 1) * 100);

  emptyNote.hidden = subtotal > 0;
  subtotalOut.textContent = money(subtotal);
  sizeLabel.textContent = 'Size: ' + size.dataset.label + (percent > 0 ? ', adds ' + percent + '%' : ', no extra charge');
  sizeAmount.textContent = money(extra);
  totalOut.textContent = money(total);

  return total;
}

serviceBoxes.forEach(function (box) {
  box.addEventListener('change', function () {
    const total = updateEstimate();
    const action = box.checked ? ' added. ' : ' removed. ';
    estimateStatus.textContent = box.dataset.name + action + 'Estimated total is ' + money(total) + '.';
  });
});

sizeSelect.addEventListener('change', function () {
  const total = updateEstimate();
  const size = sizeSelect.options[sizeSelect.selectedIndex];
  estimateStatus.textContent = 'Size set to ' + size.dataset.label.toLowerCase() + '. Estimated total is ' + money(total) + '.';
});

// ----- Dates -----

function toDate(value) {
  const parts = value.split('-');
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
}

function longDate(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
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

function dateProblem(value, label) {
  if (!value) {
    return 'Choose a ' + label + ' date.';
  }
  const date = toDate(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) {
    return 'That date has passed. Choose today or a later date.';
  }
  if (date.getDay() === 0) {
    return 'We are closed on Sundays. Choose a different ' + label + ' date.';
  }
  return '';
}

document.getElementById('check-dates').addEventListener('click', function () {
  let dropoffProblem = dateProblem(dropoff.value, 'drop off');
  let pickupProblem = dateProblem(pickup.value, 'pick up');

  if (!dropoffProblem && !pickupProblem && toDate(pickup.value) < toDate(dropoff.value)) {
    pickupProblem = 'Pick up is before drop off. Choose a pick up date on or after the drop off date.';
  }

  setError(dropoff, dropoffProblem);
  setError(pickup, pickupProblem);

  if (dropoffProblem || pickupProblem) {
    requestLink.href = 'book.html';
    dateStatus.textContent = '';
    (dropoffProblem ? dropoff : pickup).focus();
    return;
  }

  requestLink.href = 'book.html?dropoff=' + dropoff.value + '&pickup=' + pickup.value;

  const start = toDate(dropoff.value);
  const end = toDate(pickup.value);
  const nights = Math.round((end - start) / 86400000);
  const length = nights === 0 ? 'a same day visit' : nights + (nights === 1 ? ' night' : ' nights');

  dateStatus.textContent = longDate(start) + ' to ' + longDate(end) + ' is ' + length +
    '. We are open on both days. Request a stay and we will confirm your spot.';
});

// Typing a new date clears an old error or result for that pair of dates.
[dropoff, pickup].forEach(function (field) {
  field.addEventListener('input', function () {
    setError(field, '');
    dateStatus.textContent = '';
    requestLink.href = 'book.html';
  });
});

// ----- Clear everything, with a confirmation step -----

clearButton.addEventListener('click', function () {
  clearConfirm.hidden = false;
  document.getElementById('clear-no').focus();
});

document.getElementById('clear-no').addEventListener('click', function () {
  clearConfirm.hidden = true;
  estimateStatus.textContent = 'Nothing was cleared.';
  clearButton.focus();
});

document.getElementById('clear-yes').addEventListener('click', function () {
  document.getElementById('estimate-form').reset();
  setError(dropoff, '');
  setError(pickup, '');
  dateStatus.textContent = '';
  requestLink.href = 'book.html';
  clearConfirm.hidden = true;
  updateEstimate();
  estimateStatus.textContent = 'Estimate cleared.';
  serviceBoxes[0].focus();
});

updateEstimate();

const popupWindow = document.querySelector('.containers');
const topContent = document.createElement('div');
topContent.className = 'top-content';
popupWindow.appendChild(topContent);

const imageContainer = document.createElement('div');
imageContainer.className = 'image-container';
topContent.appendChild(imageContainer);

const faTimes = document.createElement('i');
faTimes.className = 'fa fa-times';
faTimes.id = 'close-popup';
topContent.appendChild(faTimes);

const reservations = document.createElement('div');
reservations.className = 'reservations';
popupWindow.appendChild(reservations);

const h2Reserve = document.createElement('h2');
h2Reserve.innerText = 'Reservations';
reservations.appendChild(h2Reserve);

const span00 = document.createElement('span');
span00.innerText = ' ';
h2Reserve.appendChild(span00);

const span0 = document.createElement('span');
span0.innerText = '(';
h2Reserve.appendChild(span0);

const span1 = document.createElement('span');
span1.id = 'counter';
span1.innerText = '';
h2Reserve.appendChild(span1);

const span2 = document.createElement('span');
span2.innerText = ')';
h2Reserve.appendChild(span2);

const form = document.createElement('form');
form.action = '#';
form.id = 'form';
popupWindow.appendChild(form);

const h2Form = document.createElement('h2');
h2Form.innerText = 'Add a reservations';
form.appendChild(h2Form);

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'name';
inputName.className = 'name';
inputName.placeholder = 'Your name';
form.appendChild(inputName);

const inputStartDate = document.createElement('input');
inputStartDate.type = 'date';
inputStartDate.name = 'date';
inputStartDate.className = 'startDate';
inputStartDate.placeholder = 'Start date';
form.appendChild(inputStartDate);

const inputEndDate = document.createElement('input');
inputEndDate.type = 'date';
inputEndDate.name = 'date';
inputEndDate.className = 'endDate';
inputEndDate.placeholder = 'End date';
form.appendChild(inputEndDate);

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.id = 'reserveBtn';
submitBtn.innerText = 'Reservations';
form.appendChild(submitBtn);

const closeBtn = document.getElementById('close-popup');
const reserveBtn = document.getElementById('reserveBtn');
const reserveContainer = document.querySelector('.reservations');

const reservationsBox = document.createElement('ul');
reservationsBox.className = 'reservations-box';
reserveContainer.appendChild(reservationsBox);

let count = 0;
reserveBtn.addEventListener('click', () => {
  count += 1;
  document.getElementById('counter').innerHTML = count;
});

const testButton = document.getElementById('testButton');
testButton.addEventListener('click', () => {
  popupWindow.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
  popupWindow.remove();
  window.location.reload();
});
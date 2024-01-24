
import roomsInitialization from "../utils/roomsInitialization.js";



let roomsArray = roomsInitialization.map((item) => item);


const roomTemplate = document.querySelector('.room-pattern').content;
const rooms = document.querySelector('.rooms-content');

function createRooms(data) {
  console.log(roomTemplate.querySelector('.room'));
  const roomElement = roomTemplate.querySelector('.room').cloneNode(true);
  const roomLink = roomElement.querySelector('.room__image');
  roomLink.src = data.link;
  roomLink.alt = data.name;
  const roomTitle = roomElement.querySelector('.room__title');
  roomTitle.textContent = data.name;
  const roomText = roomElement.querySelector('.room__text');
  roomText.textContent = data.text;
  const roomCost = roomElement.querySelector('.room__price');
  roomCost.textContent = data.cost;
  const buttonTake = roomElement.querySelector('.reservation');
  const content = roomElement.querySelector('.room__content');
  createEventForButton(buttonTake, content);
  createEventForName(roomTitle);
  if (data.discount) {
    createEventForContent(content);
  }
  createEventForContentNonReserved(content);
  if (data.isChoise) {
    mouseoutContentDefoult(content);
  }
  rooms.append(roomElement);
}

function createEventForContentNonReserved(element) {
  element.addEventListener('click', () => clickContent(element));
}

function clickContent(element) {
  const reservedBlock = element.querySelector('.reserved');
  if (reservedBlock.style.display == 'flex') {
    element.style.background = 'linear-gradient(rgba(10, 34, 64, 0.1), rgba(10, 34, 64, 1))';
    reservedBlock.style.display = 'none';
    const reservationButton = element.querySelector('.reservation');
    if (reservationButton.classList.contains('checked-button')) {
      reservationButton.classList.remove('checked-button');
    }
    reservationButton.classList.add('defoult-button');
    const priceBlock = element.querySelector('.price-block');
    priceBlock.style.display = 'flex';
  }
}

function createEventForContent(element) {
  element.addEventListener('mouseover', () => {
    const reserved = element.querySelector('.reserved');
    if (reserved.style.display == 'none' || reserved.style.display == false) {
      mouseoverContent(element);
    }
  });
}

function mouseoverContent(element) {
  const checkDiscount = element.querySelector('.discount')
  checkDiscount.style.display = 'flex';
}

function createEventForName(element) {
  element.addEventListener('click', clickName);
  element.addEventListener('mouseover', mouseoverName)
  element.addEventListener('mouseout', mouseoutName)
}

function clickName() {
  if (this.classList.contains('room__title-mousover')) {
    this.classList.remove('room__title-mousover');
    this.classList.add('room__title-checked');
  } else {
    if (this.classList.contains('room__title-checked')) {
      this.classList.remove('room__title-checked');
      this.classList.add('room__title-mousover');
    }
  }
}

function mouseoverName() {
  if (this.classList.contains('room__title')) {
    this.classList.remove('room__title');
    this.classList.add('room__title-mousover');
  }
}

function mouseoutName() {
  if (this.classList.contains('room__title-mousover')) {
    this.classList.remove('room__title-mousover');
    this.classList.add('room__title');
  }
}
//////////////
function clickRoom(element, content) {
  clickRoom1(element);
  content.addEventListener('mouseleave', () => mouseoutContent(element, content))
}

function clickRoom1(element) {
  if (element.classList.contains('mousover-button')) {
    element.classList.remove('mousover-button');
    element.classList.add('checked-button');
  } else {
    if (element.classList.contains('checked-button')) {
      element.classList.remove('checked-button');
      element.classList.add('mousover-button');
    }
  }
}

function mouseoutContent(button, element) {
  if (button.classList.contains('checked-button')) {
    const priceBlock = element.querySelector('.price-block');
    priceBlock.style.display = 'none';
    const reservedBlock = element.querySelector('.reserved');
    reservedBlock.style.display = 'flex';
    element.style.background = 'rgba(255, 255, 255, 0.4)';
    const discount = element.querySelector('.discount');
    discount.style.display = 'none';
  }
}

function mouseoutContentDefoult(content) {
  const priceBlock = content.querySelector('.price-block');
  priceBlock.style.display = 'none';
  const reservedBlock = content.querySelector('.reserved');
  reservedBlock.style.display = 'flex';
  content.style.background = 'rgba(255, 255, 255, 0.4)';
  const discount = content.querySelector('.discount');
  discount.style.display = 'none';
}

function mouseoverRoom() {
  if (this.classList.contains('defoult-button')) {
    this.classList.remove('defoult-button');
    this.classList.add('mousover-button');
  }
}

function mouseoutRoom() {
  if (this.classList.contains('mousover-button')) {
    this.classList.remove('mousover-button');
    this.classList.add('defoult-button');
  }
}

function createEventForButton(element, content) {
  element.addEventListener('click', () => clickRoom(element, content));
  element.addEventListener('mouseover', mouseoverRoom)
  element.addEventListener('mouseout', mouseoutRoom)
}

roomsArray.forEach(room => {
  createRooms(room);
});

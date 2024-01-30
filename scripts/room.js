
import roomsInitialization from "../utils/roomsInitialization.js";



let roomsArray = [];
for (let i = 0; i < roomsInitialization.length; i++) {
  roomsArray.push(roomsInitialization[i]);
}

const roomTemplate = document.querySelector('.room-pattern').content;
const rooms = document.querySelector('.rooms-content');

function createRooms(data) {
  const roomElement = roomTemplate.querySelector('.room').cloneNode(true);
  const roomLink = roomElement.querySelector('.room__image');
  const roomTitle = roomElement.querySelector('.room__title');
  const roomText = roomElement.querySelector('.room__text');
  const roomCost = roomElement.querySelector('.room__price');
  const buttonTake = roomElement.querySelector('.reservation');
  const roomContent = roomElement.querySelector('.room__content');
  const reservedTitle = roomElement.querySelector('.room__Reserved .room__title');
  const reservedText = roomElement.querySelector('.room__Reserved .room__text');
  roomLink.src = data.link;
  roomLink.alt = data.name;
  reservedTitle.textContent = data.name;
  reservedText.textContent = data.text;
  roomTitle.textContent = data.name;
  roomCost.textContent = data.cost;
  roomText.textContent = data.text;
  createEventForButton(buttonTake, roomContent);
  createEventForName(roomTitle);
  createEventForContentReserved(roomContent);
  if (data.discount) {
    createEventForContent(roomContent);
  }
  if (data.isChoise) {
    toggleRoom(roomContent, false);
  }
  rooms.append(roomElement);
}

for (let i = 0; i < roomsArray.length; i++) {
  createRooms(roomsArray[i]);
}

function createEventForContentReserved(element) {
  element.addEventListener('click', () => {
    const reservedBlock = element.querySelector('.room__Reserved');
    if (reservedBlock.style.display == 'flex') {
      toggleRoom(element, true);
      const reservationButton = element.querySelector('.reservation');
      reservationButton.classList.remove('checked-button');
      reservationButton.classList.add('defoult-button');
    }
  });
}

function createEventForContent(element) {
  element.addEventListener('mouseover', () => {
    const checkDiscount = element.querySelector('.discount');
    checkDiscount.style.display = 'flex';
  });
}

function createEventForName(element) {
  element.addEventListener('click', () => swap(element, 'room__title-mousover', 'room__title-checked'));
  element.addEventListener('mouseover', () => swap(element, 'room__title-mousover', 'room__title'))
  element.addEventListener('mouseout', () => swap(element, 'room__title-mousover', 'room__title'))
}

function createEventForButton(element, content) {
  element.addEventListener('click', () => clickRoom(element, content));
  element.addEventListener('mouseover', () => swap(element, 'mousover-button', 'defoult-button'))
  element.addEventListener('mouseout', () => swap(element, 'mousover-button', 'defoult-button'))
}

function clickRoom(element, content) {
  swap(element, 'mousover-button', 'checked-button')
  content.addEventListener('mouseleave', () => {
    if (element.classList.contains('checked-button')) {
      toggleRoom(content, false);
    }
  })
}

function toggleRoom(element, isReserved) {
  const reserved = element.querySelector('.room__Reserved');
  const nonReserved = element.querySelector('.room__nonReserved');

  if (isReserved) {
    reserved.style.display = 'none';
    nonReserved.style.display = 'flex';
  } else {
    reserved.style.display = 'flex';
    nonReserved.style.display = 'none';
  }
}

function swap(element, class1, class2) {
  if (element.classList.contains(class1)) {
    element.classList.remove(class1);
    element.classList.add(class2);
  } else if (element.classList.contains(class2)) {
    element.classList.remove(class2);
    element.classList.add(class1);
  }
}
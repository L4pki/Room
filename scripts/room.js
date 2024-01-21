
import roomsInitialization from "../utils/roomsInitialization.js";



let roomsArray = roomsInitialization.map((item) => item);


const roomTemplate = document.querySelector('.room').content;
const rooms = document.querySelector('.rooms');

function createRooms(data)
{
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
  const buttonTake = roomElement.querySelector('.price-button');
  rooms.append(roomElement); 
  //createEventForLike(buttonTake);
}

roomsArray.forEach(room => {
    createRooms(room);
});
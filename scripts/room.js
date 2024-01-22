
import roomsInitialization from "../utils/roomsInitialization.js";



let roomsArray = roomsInitialization.map((item) => item);


const roomTemplate = document.querySelector('.room-pattern').content;
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
  const caption = roomElement.querySelector('.room__caption');
  createEventForButton(buttonTake,caption);
  createEventForName(roomTitle);
  if(data.isChoise){
    mouseoutCaption(caption);
  }
  if(data.bestPrice){
    createEventForCaption(caption);
  }
  rooms.append(roomElement); 
}

function createEventForCaptionReserved(element) {
  element.addEventListener('mouseout',() => mouseoutCaption(element))
}
function mouseoutCaption(element) {
  const priceBlock = element.querySelector('.price-block')
  priceBlock.style.display = 'none';
  const reservedBlock = element.querySelector('.reserved')
  reservedBlock.style.display = 'flex';
}

function createEventForCaption(element) {
  element.addEventListener('mouseover',() => mouseoverCaption(element))
}

function mouseoverCaption(element){
  const checkBestPrice = element.querySelector('.bestPrice')
  checkBestPrice.style.display = 'flex';
}

function createEventForName(element) {
  element.addEventListener('click', clickName);
  element.addEventListener('mouseover',mouseoverName)
  element.addEventListener('mouseout',mouseoutName)
}

function clickName(){
  if(this.classList.contains('room__title-mousover')){
    this.classList.remove('room__title-mousover');
    this.classList.add('room__title-checked');
  } else{
      if(this.classList.contains('room__title-checked')){
        this.classList.remove('room__title-checked');
        this.classList.add('room__title-mousover');
      }  
    }  
}

function mouseoverName(){
  if(this.classList.contains('room__title')){
    this.classList.remove('room__title');
    this.classList.add('room__title-mousover');
  }
}

function mouseoutName() {
  if(this.classList.contains('room__title-mousover')){
    this.classList.remove('room__title-mousover');
    this.classList.add('room__title');
  }
}
//////////////
function clickRoom(element,caption) {
  caption.addEventListener('mouseout',() => mouseoutCaption(caption))
  //createEventForCaptionReserved(caption);
  return clickRoom1 (element);
}

function clickRoom1(element) {
  if(element.classList.contains('price-button-mousover')){
    element.classList.remove('price-button-mousover');
    element.classList.add('price-button-checked');
  } else{
      if(element.classList.contains('price-button-checked')){
        element.classList.remove('price-button-checked');
        element.classList.add('price-button-mousover');
      }  
    }  
}

function mouseoverRoom() {
  if(this.classList.contains('price-button')){
    this.classList.remove('price-button');
    this.classList.add('price-button-mousover');
  }
}

function mouseoutRoom() {
  if(this.classList.contains('price-button-mousover')){
    this.classList.remove('price-button-mousover');
    this.classList.add('price-button');
  }
}

function createEventForButton(element,caption) { 
  element.addEventListener('click',()=>clickRoom(element,caption));
  element.addEventListener('mouseover',mouseoverRoom)
  element.addEventListener('mouseout',mouseoutRoom)
}

roomsArray.forEach(room => {
  createRooms(room);
});

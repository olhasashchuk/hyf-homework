//Spirit animal name generator
document.querySelectorAll('.radio').forEach(radio => {
   radio.addEventListener('click', function(event){
      const usernameInput = document.getElementById('username');
      const buttonSpiritAnimal = document.getElementById('btnSpiritAnimal');

      buttonSpiritAnimal.removeEventListener('click', handleButtonClick);
      usernameInput.removeEventListener('mouseover', handleMouseOver);
      usernameInput.removeEventListener('input', handleTextInput);
      
      if (event.target.value === 'btnClick') {
         buttonSpiritAnimal.addEventListener('click', handleButtonClick);
      } else if (event.target.value === 'hoverInput') {
         usernameInput.addEventListener('mouseover', handleMouseOver);
      } else if(event.target.value === 'textInput') {
         usernameInput.addEventListener('input', handleTextInput);
      }
   })
})

document.getElementById('btnNewSpiritAnimal').addEventListener('click', handleNewSpiritAnimalClick);

function handleButtonClick(event) {
   handleEvent(event, 'result');
}

function handleNewSpiritAnimalClick(event) {
   handleEvent(event, 'result2');
}

function handleMouseOver(event) {
   handleEvent(event, 'result');
}

function handleTextInput(event) {
   handleEvent(event, 'result');
}

const arrSpiritAnimal = [
   'Wolf',
   'Bear',
   'Eagle',
   'Butterfly',
   'Dolphin',
   'Owl',
   'Tiger',
   'Horse',
   'Spider',
   'Fox'
]

function getRandomSpiritAnimal() {
   const randomIndex = Math.floor(Math.random() * arrSpiritAnimal.length);
   return arrSpiritAnimal[randomIndex];
}

function displaySpiritAnimal(userName, spiritAnimal, elementId) {
   const resultElement = document.getElementById(elementId);
   resultElement.innerText = `Name: ${userName}; The Spirit Animal: ${spiritAnimal}`;
}

function handleEvent(event, elementId) {
   event.preventDefault();
   const userName = document.getElementById('username').value.trim();
   if (userName === '') {
      alert('Please, enter your name');
   } else {
      const randomSpiritAnimal = getRandomSpiritAnimal();
      displaySpiritAnimal(userName, randomSpiritAnimal, elementId);
   }
}



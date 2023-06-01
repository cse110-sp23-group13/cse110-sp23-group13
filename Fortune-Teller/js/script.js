import { yesAnswers, noAnswers } from '../text/yesNoDescriptions.js';
import { cardPaths } from '../text/cardPaths.js'


window.addEventListener('DOMContentLoaded', init);


var deck = document.getElementById('deck')
var selectedCard = null;
var bottomCardContainer = null;
var container = null;
var isCardSelected = false; // Flag to track card selection
var question = document.getElementById('question');
var submitButton = document.getElementById('submitButton');
var questionText = document.getElementById('question-text');
var questionBox = document.getElementById('question-box');
var instructions = document.getElementById('instructions');
var textEnabled = true;
var currCard = null;

function init(){
    /* Check when card is clicked */
    deck.addEventListener('click', cardClickEvent);
    submitButton.addEventListener('click', submitButtonClickEvent)
};

function cardClickEvent(event) {
    if (isCardSelected || !event.target.classList.contains('card')) {
        return;
    }
    currCard = event.target;
    currCard.style.visibility = 'hidden';
    isCardSelected = true;
    container = createCardContainer(currCard)
    document.body.appendChild(container);
}

function createCardContainer() {
    var container = document.createElement('div');
    container.classList.add('overlay');

    var chooseAnotherCardButton = document.createElement('button');
    chooseAnotherCardButton.textContent = 'Choose a Different Card';
    chooseAnotherCardButton.classList.add('choose_another')

    var flexContainer = document.createElement('div');
    flexContainer.classList.add('flex_container');

    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image_container');

    var image = new Image(200, 300);
    selectedCard = new Image(100, 200);
    const cardIdx = Math.floor(Math.random() * cardPaths.length);
    image.src = cardPaths[cardIdx];
    selectedCard.src = cardPaths[cardIdx];

    var title = createTitle();
    var cardDescription = createCardDescription(title, cardIdx);

    chooseAnotherCardButton.addEventListener('click', chooseAnotherCardButtonEvent);
    image.style.maxWidth = '100%';
    imageContainer.appendChild(image);

    // Create a container for the text on the right side
    var infoContainer = document.createElement('div');
    infoContainer.classList.add('info_container')

    // Append all information
    container.appendChild(flexContainer);
    flexContainer.appendChild(imageContainer);
    flexContainer.appendChild(infoContainer);
    infoContainer.appendChild(title);
    infoContainer.appendChild(cardDescription);
    infoContainer.appendChild(chooseAnotherCardButton);
    return container
}

function createTitle() {
    var title = document.createElement('h1');
    var randomTitle = Math.random() < 0.5 ? 'Yes' : 'No';
    title.textContent = randomTitle;
    return title
}

function createCardDescription(title, cardIdx) {
    var cardDescription = document.createElement('p');
    if (cardDescription == 'Yes') {
        cardDescription.textContent = yesAnswers[cardIdx];
    }
    else {
        cardDescription.textContent = noAnswers[cardIdx];
    }
    return cardDescription;
}

function chooseAnotherCardButtonEvent() {
    if (!bottomCardContainer) {
        bottomCardContainer = document.createElement('div');
        bottomCardContainer.classList.add('bottom_card_container')
        document.body.appendChild(bottomCardContainer);
    }
    else if (selectedCard && bottomCardContainer) {
        bottomCardContainer.innerHTML = ''; 
        selectedCard.style.visibility = 'visible';
    }
    bottomCardContainer.appendChild(selectedCard);
    currCard.style.visibility = 'visible';
    document.body.removeChild(container);
    isCardSelected = false;
}

function submitButtonClickEvent(event) {
    event.preventDefault(); 
    if (textEnabled){
        var input = document.getElementById('question').value; 
        if (input.trim() === '') {
            return;
        }
        //display question
        questionBox.style.marginTop = 0;
        questionText.textContent = input;
        question.style.display = 'none'; 
        submitButton.textContent = 'Update Question';
        //show deck and instructions
        instructions.classList.add('fade-in')
        deck.classList.add('fade-in')
        instructions.style.visibility = 'visible'
        deck.style.visibility = 'visible'

        textEnabled = false;
    }
    else {
        //show input box
        question.style.display = 'flex'; 
        document.getElementById('question').value = ''; 
        questionText.textContent = 'What question do you want answered?'; // Reset the h1 tag's content
        submitButton.textContent = 'Submit';
        textEnabled = true;
    }
}
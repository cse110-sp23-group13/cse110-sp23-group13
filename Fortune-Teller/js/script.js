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

/**
 * The init function sets up the event listeners for deck and submitButton and preloads the cards.
 */
function init(){
    preloadCards()
    deck.addEventListener('click', cardClickEvent);
    submitButton.addEventListener('click', submitButtonClickEvent)
};

/**
 * Preloads card images to improve performance.
 * Iterates over the array of card paths and creates a new Image object for each one, setting its src property to the path.
 */
function preloadCards() {
    for (var i = 0; i < cardPaths.length; i++) {
        var img = new Image();
        img.src = cardPaths[i];
    }
}

/**
 * Event handler for a click on a card.
 * Checks if a card is already selected or if the clicked target isn't a card. If so, it returns without doing anything.
 * Otherwise, it hides the clicked card and creates an overlay containing the selected card.
 * @param {Event} event - The click event
 */
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

/**
 * Creates the card container for the selected card.
 * This involves creating the layout, adding the card image, and populating it with information like title and card description.
 * Also sets up a button to choose a different card.
 * @returns {HTMLElement} - The card container
 */
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

/**
 * Generates a random title (Yes or No) for the card.
 * @returns {HTMLElement} - The title element
 */
function createTitle() {
    var title = document.createElement('h1');
    var randomTitle = Math.random() < 0.5 ? 'Yes' : 'No';
    title.textContent = randomTitle;
    return title
}

/**
 * Creates a description for the card based on the title and a random index.
 * If the title is "Yes", it uses the yesAnswers array, otherwise it uses the noAnswers array.
 * @param {HTMLElement} title - The title element
 * @param {number} cardIdx - The index to use for the answer arrays
 * @returns {HTMLElement} - The description element
 */
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

/**
 * Event handler for the "Choose a Different Card" button.
 * If a card is already chosen, it makes the current card visible again and removes the card container overlay.
 * Also shows the selected card at the bottom of the screen.
 */
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

/**
 * Event handler for the submit button click.
 * Handles showing and hiding the question input field, updating the question, and toggling visibility of the deck and instructions.
 * @param {Event} event - The click event
 */
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
import { situations, challenges } from '../text/careerCardDescriptions.js';
import { cardPaths } from '../text/cardPaths.js'


window.addEventListener('DOMContentLoaded', init);


var deck = document.getElementById('deck')
var bottomCardContainer = null;
var container = null;
var sText = document.getElementById('s-text');
var sAnswer = document.getElementById('s-answer');
var cText = document.getElementById('c-text');
var cAnswer = document.getElementById('c-answer');
var submitButton = document.getElementById('submitButton');
var questionBox = document.getElementById('pick2-box');
var instructions = document.getElementById('instructions');
var textEnabled = true;
var currCard = null;
var card1 = null;
var card2 = null;
var sIdx = null;
var cIdx = null;
var cardCount = 0;
var audio = document.getElementById('flipSound');


/**
 * The init function sets up the event listeners for deck and submitButton and preloads the cards.
 */
function init() {
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
 * Checks if a card is already selected, if the clicked target isn't a card, or if the question isn't valid.
 * If any of these conditions are true, it returns without doing anything.
 * Otherwise, it hides the clicked card and creates an overlay containing the selected card.
 * @param {Event} event - The click event
 */
function cardClickEvent(event) {
    if (cardCount >= 2){
        return;
    }
    audio.play();
    cardCount += 1;
    
    // situation card
    if (cardCount == 1){
        // create bottom card container
        bottomCardContainer = document.createElement('div');
        bottomCardContainer.classList.add('bottom_card_container')
        document.body.appendChild(bottomCardContainer);

        // generate and show card drawn
        card1 = new Image(133, 200);
        sIdx = Math.floor(Math.random() * cardPaths.length);
        card1.src = cardPaths[sIdx];
        bottomCardContainer.appendChild(card1);
        card1.style.visibility = 'visible';
    }

    // challenge card
    if (cardCount == 2){
        // generate and show card drawn (dependent on card1)
        card2 = new Image(133, 200);
        while (cIdx == sIdx || cIdx == null){
            cIdx = Math.floor(Math.random() * cardPaths.length);
        }
        card2.src = cardPaths[cIdx];
        bottomCardContainer.appendChild(card2);
        card2.style.visibility = 'visible';

        // trigger overlay
        container = createCardContainer();
        document.body.appendChild(container);
    }
    audio.currentTime = 0;
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

    // var imageContainer = document.createElement('div');
    // imageContainer.classList.add('image_container');

    // var image = new Image(200, 300);
    var descriptions = createCardDescription(sIdx, cIdx);
    var sDescription = descriptions[0];
    var cDescription = descriptions[1];

    chooseAnotherCardButton.addEventListener('click', chooseAnotherCardButtonEvent);
    // image.style.maxWidth = '100%';
    // imageContainer.appendChild(image);

    // Create a container for the text on the left side
    var leftContainer = document.createElement('div');
    leftContainer.classList.add('left_container');

    // Create a container for the text on the right side
    var rightContainer = document.createElement('div');
    rightContainer.classList.add('right_container')

    var chooseContainer = document.createElement('div');
    rightContainer.classList.add('choose_container')

    // Append all information
    container.appendChild(leftContainer);
    container.appendChild(rightContainer);
    leftContainer.appendChild(sDescription);
    rightContainer.appendChild(cDescription);
    chooseContainer.appendChild(chooseAnotherCardButton);
    container.appendChild(chooseContainer);
    return container
}

/**
 * Creates a description for the card based on the title and a random index.
 * If the title is "Yes", it uses the yesAnswers array, otherwise it uses the noAnswers array.
 * @param {number} sIdx - The index to use for the answer arrays
 * @param {number} cIdx - The index to use for the answer arrays
 * @returns {HTMLElement, HTMLElement} - The description elements
 */
function createCardDescription(sIdx, cIdx) {
    var sDescription = document.createElement('p');
    var cDescription = document.createElement('p');
        sDescription.textContent = situations[sIdx];
        cDescription.textContent = challenges[cIdx];
    return [sDescription, cDescription];
}

/**
 * Event handler for the "Choose a Different Card" button.
 * If a card is already chosen, it makes the current card visible again and removes the card container overlay.
 * Also shows the selected card at the bottom of the screen.
 */
function chooseAnotherCardButtonEvent() {
    // if (!bottomCardContainer) {
    //     bottomCardContainer = document.createElement('div');
    //     bottomCardContainer.classList.add('bottom_card_container')
    //     document.body.appendChild(bottomCardContainer);
    // }
    // else if (selectedCard && bottomCardContainer) {
    //     bottomCardContainer.innerHTML = '';
    //     selectedCard.style.visibility = 'visible';
    // }
    // bottomCardContainer.appendChild(selectedCard);
    // currCard.style.visibility = 'visible';
    // document.body.removeChild(container);
    cardCount = 0;
}

/**
 * Event handler for the submit button click.
 * Handles showing and hiding the question input field, updating the question, and toggling visibility of the deck and instructions.
 * It also checks if the input question is a yes/no question and sets the isQuestionValid flag accordingly.
 * @param {Event} event - The click event
 */
function submitButtonClickEvent(event) {
    event.preventDefault();
    if (textEnabled) {
        var sInput = sAnswer.value;
        var cInput = cAnswer.value;
        if (sInput.trim() === '' || cInput.trim() === '') {
            return;
        }

        //display question
        questionBox.style.marginTop = 0;
        questionBox.style.flexDirection = 'row';

        sText.textContent = sInput;
        cText.textContent = cInput;
        sAnswer.style.display = 'none';
        cAnswer.style.display = 'none';

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
        questionBox.style.flexDirection = 'column';
        sAnswer.style.display = 'flex';
        cAnswer.style.display = 'flex';
        sAnswer.value = '';
        cAnswer.value = '';
        sText.textContent = 'What is your Situation?'; // Reset the h1 tag's content
        cText.textContent = 'What is your Challenge?';
        submitButton.textContent = 'Submit';
        textEnabled = true;
    }
}
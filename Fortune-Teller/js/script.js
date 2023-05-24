import { yesCards, noCards } from '../text/yesNoDescriptions.js';
import { cardPaths } from '../text/cardPaths.js'

window.addEventListener('DOMContentLoaded', init);

function init(){
    var selectedCard = null;
    var bottomCardContainer = null;
    var isCardSelected = false; // Flag to track card selection

    /* Check when card is clicked */
    document.getElementById('deck').addEventListener('click', function(event) {
        if (!isCardSelected && event.target.classList.contains('card')) {
            // Hide the card
            event.target.style.visibility = 'hidden';
            selectedCard = new Image(100, 200);

            isCardSelected = true;

            // Create the overall container for the card
            var container = document.createElement('div');
            container.classList.add('overlay');

            var title = document.createElement('h2');
            var randomTitle = Math.random() < 0.5 ? 'Yes' : 'No';
            title.textContent = randomTitle;

            // Choose if it is a yes or no card, and randomly choose a yes/no text
            var text = document.createElement('p');
            const idx = Math.floor(Math.random() * yesCards.length)
            const cards = Math.floor(Math.random() * 2) == 0 ? yesCards : noCards;
            text.textContent = cards[idx];

            // Create the pick another card button
            var button = document.createElement('button');
            button.classList.add('choose_another')
            button.textContent = 'Pick Another Card';

            // Create the flexContainer which will have the card and all the text
            var flexContainer = document.createElement('div');
            flexContainer.style.display = 'flex';

            // Create a container for the image and style it 
            var imageContainer = document.createElement('div');
            imageContainer.style.padding = '10px';
            imageContainer.style.height = '500px';
            imageContainer.style.width = '200px';
            imageContainer.style.display = 'flex';
            imageContainer.style.flexDirection = 'column'; // Arrange elements vertically
            imageContainer.style.justifyContent = 'center';

            // Choose which card it will be randomly
            var image = new Image(200, 300);
            const cardIdx = Math.floor(Math.random() * cardPaths.length);
            image.src = cardPaths[cardIdx];
            selectedCard.src = cardPaths[cardIdx];

            // When the button is clicked, it will place the card image on the bototm of the screen, reset the containers, and place the card back in the deck
            button.addEventListener('click', function() {
                if (selectedCard && bottomCardContainer) {
                    bottomCardContainer.innerHTML = ''; 
                    bottomCardContainer.appendChild(selectedCard);
                    selectedCard.style.visibility = 'visible';
                }
                event.target.style.visibility = 'visible';
                document.body.removeChild(container);
                isCardSelected = false;
            });
            image.style.maxWidth = '100%';
            imageContainer.appendChild(image);

            // Create a container for the text on the right side
            var infoContainer = document.createElement('div');
            infoContainer.style.padding = '10px';
            infoContainer.style.display = 'flex';
            infoContainer.style.flexDirection = 'column'; // Arrange elements vertically
            infoContainer.style.justifyContent = 'center'; // Center elements vertically
            infoContainer.style.overflow = 'auto'; // Add overflow handling
            infoContainer.style.height = '500px';
            infoContainer.style.width = '200px';

            // Append all information
            container.appendChild(flexContainer);
            flexContainer.appendChild(imageContainer);
            flexContainer.appendChild(infoContainer);
            infoContainer.appendChild(title);
            infoContainer.appendChild(text);
            infoContainer.appendChild(button);

            document.body.appendChild(container);

            // Adjust container height
            container.style.position = 'fixed';
            container.style.top = '50%';
            container.style.left = '50%';

            // Create or update the bottom card container
            if (!bottomCardContainer) {
                bottomCardContainer = document.createElement('div');
                bottomCardContainer.style.position = 'fixed';
                bottomCardContainer.style.bottom = '10px';
                bottomCardContainer.style.left = '50%';
                bottomCardContainer.style.transform = 'translateX(-50%)';
                document.body.appendChild(bottomCardContainer);
            }
        }
    });
    var questionForm = document.getElementById('questionForm');
    var submitButton = document.getElementById('submitButton');
    var updateButton = document.getElementById('updateButton');
    var questionText = document.getElementById('question-text');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        var input = document.getElementById('question').value; 
        if (input.trim() === '') {
            return;
        }
        questionText.textContent = input; // Update h1 tag's content
        //questionAsked.textContent = input;
        questionForm.style.display = 'none'; 
        updateButton.style.display = 'inline-block'; 
    });

    updateButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        questionForm.style.display = 'flex'; 
        updateButton.style.display = 'none'; 
        document.getElementById('question').value = ''; 
        questionText.textContent = 'What question do you want answered?'; // Reset the h1 tag's content
        //document.getElementById('question').textContent = questionAsked;
    });

}
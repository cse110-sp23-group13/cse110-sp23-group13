window.addEventListener('DOMContentLoaded', init);

function init(){
    document.getElementById('deck').addEventListener('click', function(event) {
        if (event.target.classList.contains('card')) {
            /* hide the card */
            event.target.style.visibility = 'hidden';
            console.log('clicked');
            var num = Math.floor(Math.random() * 2);
            var image = new Image(100,200);
            if (num == 0){
                image.src = "./images/thefool.svg";
            }else{
                image.src = "./images/themagician.svg";
            }
            /* at the bottom */
            document.body.appendChild(image);
            /* at the top
            let parent = document.body;
            let child = parent.firstChild;
            parent.insertBefore(image, child); */
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
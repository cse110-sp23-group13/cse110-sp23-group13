document.addEventListener('DOMContentLoaded', function() {
    /* Check when card is clicked*/
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
});

function findZodiacSign() {
    console.log("This works!");
    var monthInput = document.getElementById('birth-month').value.toLowerCase();
    var dateInput = parseInt(document.getElementById('birth-date').value);

    var zodiacSign = '';

    if ((monthInput === 'december' && dateInput >= 22) || (monthInput === 'january' && dateInput <= 19)) {
        zodiacSign = 'Capricorn';
    } else if ((monthInput === 'january' && dateInput >= 20) || (monthInput === 'february' && dateInput <= 18)) {
        zodiacSign = 'Aquarius';
    } else if ((monthInput === 'february' && dateInput >= 19) || (monthInput === 'march' && dateInput <= 20)) {
        zodiacSign = 'Pisces';
    } else if ((monthInput === 'march' && dateInput >= 21) || (monthInput === 'april' && dateInput <= 19)) {
        zodiacSign = 'Aries';
    } else if ((monthInput === 'april' && dateInput >= 20) || (monthInput === 'may' && dateInput <= 20)) {
        zodiacSign = 'Taurus';
    } else if ((monthInput === 'may' && dateInput >= 21) || (monthInput === 'june' && dateInput <= 20)) {
        zodiacSign = 'Gemini';
    } else if ((monthInput === 'june' && dateInput >= 21) || (monthInput === 'july' && dateInput <= 22)) {
        zodiacSign = 'Cancer';
    } else if ((monthInput === 'july' && dateInput >= 23) || (monthInput === 'august' && dateInput <= 22)) {
        zodiacSign = 'Leo';
    } else if ((monthInput === 'august' && dateInput >= 23) || (monthInput === 'september' && dateInput <= 22)) {
        zodiacSign = 'Virgo';
    } else if ((monthInput === 'september' && dateInput >= 23) || (monthInput === 'october' && dateInput <= 22)) {
        zodiacSign = 'Libra';
    } else if ((monthInput === 'october' && dateInput >= 23) || (monthInput === 'november' && dateInput <= 21)) {
        zodiacSign = 'Scorpio';
    } else if ((monthInput === 'november' && dateInput >= 22) || (monthInput === 'december' && dateInput <= 21)) {
        zodiacSign = 'Sagittarius';
    } else {
        zodiacSign = 'Invalid date or month';
    }

    document.getElementById('result').textContent = zodiacSign;
}
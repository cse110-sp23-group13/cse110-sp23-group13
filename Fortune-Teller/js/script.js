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
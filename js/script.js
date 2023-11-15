const textElement = document.getElementById('scroll-text');

function scrollText() {
    textElement.style.transform = 'translateX(100%)';

        textElement.animate([{ transform: 'translateX(100%'} ,
        { transform: 'translateX(-100%)' }],
        {
            duration: 5000,
            iterations: Infinity, easing: 'liner'
        }
    );   
}
scrollText();
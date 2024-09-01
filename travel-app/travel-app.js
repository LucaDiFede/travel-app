const GreatStar = document.querySelector('.GreatStar i');
const Stelle = document.querySelectorAll('.Stella');
const ratingText = document.querySelector('.selected-rating');
const feedbackMessaggio = document.querySelector('.feedback-messaggio');
const btn = document.querySelector(".rating button");

Stelle.forEach(Stella => {
    Stella.addEventListener('mouseenter', handleHover);
    Stella.addEventListener('mouseleave', handleLeave);
    Stella.addEventListener('click', handleClick);
});

let rating;

function highlightStelle(rating) {
    Stelle.forEach((Stella, index) => {
        if (index < rating) {
            Stella.classList.add('selected');
        } else {
            Stella.classList.remove('selected');
        }
    });
}

function getfeedbackMessaggio(rating) {
    switch (rating) {
        case '1':
            return `
            <h2>Terrible!</h2>
            <p>We\'re sorry to hear that you had a bad experience</p>`
        
        case '2':
            return `
            <h2>Not good!</h2>
            <p>Cercheremo di fare di meglio</p>`

        case '3':
            return `
            <h2>E' okay!</h2>
            <p>Speriamo di riuscire a sorprenderti di più la prossima volta.</p>`
            
        case '4':
            return `
            <h2>Buono!</h2>
            <p>Siamo felici di ciò!</p>`

        case '5':
            return `
            <h2>Perfetto!</h2>
            <p>Siamo grati di sapere ciò!</p>`;
        default:
            return '';
    }
}

function handleHover(e) {
    const rating = e.currentTarget.getAttribute('data-value');
    highlightStelle(rating);
}

function handleLeave() {
    highlightStelle(rating);
}

function handleClick(e) {
    btn.style.display = "block";
    rating = e.currentTarget.getAttribute('data-value');
    GreatStar.style.fontSize = `${1 + rating * 0.1}em`;
    ratingText.textContent = rating;
    feedbackMessaggio.innerHTML = getfeedbackMessaggio(rating);
    feedbackMessaggio.style.visibility = 'visible';
    feedbackMessaggio.style.opacity = '1';
}


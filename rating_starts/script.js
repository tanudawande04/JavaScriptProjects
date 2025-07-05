const stars = document.getElementsByClassName('star');
Array.from(stars).forEach((star, idx) => {
    star.addEventListener('click', () => {
        Array.from(stars).forEach((s, i) => {
            if (i <= idx) {
                s.style.color = 'gold';
            } else {
                s.style.color = '#ccc';
            }
        });
    });
});
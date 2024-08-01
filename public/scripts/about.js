document.querySelectorAll('.responsive-img, .responsive-video').forEach(element => {
    element.addEventListener('click', () => {
        alert('You clicked an interactive element!');
    });
});
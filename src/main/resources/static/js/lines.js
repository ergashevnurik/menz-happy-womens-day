let section = document.getElementById('lines-section');
for (let i = 0; i <= 100; i++) {
    let container = document.createElement('div');
    container.classList.add('lines');
    section.appendChild(container);
}

function animateLines() {
    anime({
        targets: '.lines',
        translateX: function() {
            return anime.random(-1200,1200);
        },
        translateY: function() {
            return anime.random(-500,500);
        },
        rotate: 180,
        scale: function() {
            return anime.random(1,2);
        },
    })
}

animateLines();
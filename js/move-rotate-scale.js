function moveObject() {
    const object = document.getElementById('object');
    object.style.transform = 'translateX(100px)';
}

function rotateObject() {
    const object = document.getElementById('object');
    object.style.transform = 'rotate(45deg)';
}

function scaleObject() {
    const object = document.getElementById('object');
    object.style.transform = 'scale(1.5)';
}

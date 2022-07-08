const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`
div.style.top = `${divY}px`

let active = false;

let insertDivX;
let insertDivY;

const grabDiv = function (e) {
    div.style.backgroundColor = 'gray';
    active = !active

    insertDivX = e.offsetX
    insertDivY = e.offsetY
}

const moveDiv = function (event) {
    if (active) {
        divX = event.clientX - insertDivX;
        divY = event.clientY - insertDivY;

        div.style.left = `${divX}px`
        div.style.top = `${divY}px`
    }
}

const releaseDiv = function () {
    div.style.backgroundColor = 'black';
    active = !active
}

div.addEventListener('mousemove', moveDiv);
div.addEventListener('mousedown', grabDiv);
div.addEventListener('mouseup', releaseDiv);
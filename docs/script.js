var menu = document.querySelector('#menu')
var arrow = document.querySelector('#drop')
let opened = false
arrow.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    opened = !opened
});
document.addEventListener('click', function (event) {
    var isClickInside = menu.contains(event.target) || arrow.contains(event.target);
    if (!isClickInside) {
        if (opened) {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            opened = !opened
        }
    }
});
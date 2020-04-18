var mouseOutCount = 0;
document.body.addEventListener('mouseleave', function (event) {
    //событие на увод мышки со страницы. если мышка уходит за верхнюю границу документа, вызывается попап
    var e = event || window.even;
    e = e.clientY;
    var popup = document.querySelector('.popup-container');
    if (popup && e < 10 && mouseOutCount === 0) {
        popup.classList.add('show');
        mouseOutCount++;
    }
});
document.querySelector('#ps-popup-out-comebacker-close').onclick = function () {
    document.querySelector('.popup-container').classList.remove('show');
};
document.querySelector('.popup__bg').onclick = function () {
    document.querySelector('.popup-container').classList.remove('show');
};



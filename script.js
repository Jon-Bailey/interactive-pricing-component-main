// console log value of input slider
const slider = document.getElementById('slider-bar');
const price = document.getElementById('price');

price.textContent = '$' + slider.value;

slider.oninput = function() {
    price.textContent = '$' + this.value;
    return price.textContent;
}


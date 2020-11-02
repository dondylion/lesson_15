'use strict';

let inputSelector = document.querySelector('#selector'),
    inputText = document.querySelector('#text-inside'),
    btn = document.querySelector('button'),
    bottom = document.querySelector('.bottom');

const DomElement = function() {
    let selector = '',
        height = '',
        width = '',
        bg = '',
        fontSize = 0;
};

DomElement.prototype.createElement = function() {
    const newElement = document.createElement('div');
    newElement.innerText = inputText.value;
    if (inputSelector.value[0]==='#') {
        newElement.id = inputSelector.value.slice(1);
    } else if (inputSelector.value[0]==='.') {
        newElement.className = inputSelector.value.slice(1);
    }

    newElement.style.height = this.height;
    newElement.style.width = this.width;
    newElement.style.background = this.bg;
    newElement.style.fontSize = this.fontSize;

    newElement.style.margin = '20px';
    newElement.style.border = '5px solid black';
    newElement.style.padding = '10px';

    btn.parentNode.insertBefore(newElement, bottom);

    console.log(newElement);
};

const newObj = new DomElement();
const createStart = newObj.createElement.bind(newObj);
newObj.height = '50px';
newObj.width = '100px';
newObj.bg = 'gold';
newObj.fontSize = '20px';

btn.addEventListener('click', createStart);
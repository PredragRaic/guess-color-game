
function rgbColorRandomPicker(){
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    return `RGB(${r}, ${g}, ${b})`
}

const forh1 = rgbColorRandomPicker();

const h1Element = document.querySelector('#h1');
h1Element.innerHTML = forh1;

const oneElement = document.querySelector('#one');
oneElement.style.backgroundColor = rgbColorRandomPicker();
const twoElement = document.querySelector('#two');
twoElement.style.backgroundColor = rgbColorRandomPicker();
const threeElement = document.querySelector('#three');
threeElement.style.backgroundColor = rgbColorRandomPicker();
const fourElement = document.querySelector('#four');
fourElement.style.backgroundColor = rgbColorRandomPicker();
const fiveElement = document.querySelector('#five');
fiveElement.style.backgroundColor = rgbColorRandomPicker();
const sixElement = document.querySelector('#six');
sixElement.style.backgroundColor = rgbColorRandomPicker();


const placeColorInSixBoxes = Math.floor(Math.random() * 6)

console.log(placeColorInSixBoxes);

if(0 === placeColorInSixBoxes){
    oneElement.style.backgroundColor = forh1;
}else if(1 === placeColorInSixBoxes){
    twoElement.style.backgroundColor = forh1;
}else if(2 === placeColorInSixBoxes){
    threeElement.style.backgroundColor = forh1;
}else if(3 === placeColorInSixBoxes){
    fourElement.style.backgroundColor = forh1;
}else if(4 === placeColorInSixBoxes){
    fiveElement.style.backgroundColor = forh1;
}else if(5 === placeColorInSixBoxes){
    sixElement.style.backgroundColor = forh1;
};

const backgroundOfTheTitle = document.querySelector('.head-container');

document.querySelectorAll('.li').forEach(item => {
    item.addEventListener('click', event => {
      backgroundOfTheTitle.style.backgroundColor = forh1;
      
    })
  })
var container = document.querySelector('#container');
var content = document.querySelector('#content');
var pallet = document.querySelector(".color-pallet");

var rand = function random(number) {
  return Math.floor(Math.random() * ((number + 20) * 8));
}

for (var i = 0; i < 32; i++) {
  var circleColor = 'rgb(' + rand(i) + ',' + rand(i) + ',' + rand(i) + ')';
  var span = document.createElement('span');
  span.className = "circle";
  span.setAttribute('color', circleColor);
  span.style.backgroundColor = span.getAttribute('color');
  pallet.append(span);
}

var currentColor = document.createElement('span');
currentColor.appendChild(document.createTextNode('Current Color >'));
currentColor.id = "current-color";
pallet.appendChild(currentColor);

var colorBox = document.createElement('span');
colorBox.id = "color-box";
pallet.appendChild(colorBox);

drawGrid();

function drawGrid() {
  for (var i = 0; i < 2378; i++) {
    var square = document.createElement('div');
    square.className = "square";
    content.append(square);
  }

  var circle = document.querySelectorAll('.circle');
  var rgb = '(' + 255 + ',' + 255 + ',' + 255 + ')';

  var getColor = function(e) {
    rgb = e.target.getAttribute('color');
    colorBox.setAttribute('color', rgb);
    colorBox.style.backgroundColor = rgb;
  };

  function setColor(e) {
    e.target.style.backgroundColor = colorBox.getAttribute('color');
  }

content.addEventListener('click', setColor);
pallet.addEventListener('click', getColor);

}

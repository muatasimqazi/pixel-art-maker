var container = document.querySelector('#container');
var content = document.querySelector('#content');
var pallent = document.querySelector(".color-pallet");





for (var i = 0; i < 32; i++) {
  var span = document.createElement('span');
  span.className = "circle";

  pallent.append(span);
}

var currentColor = document.createElement('span');
currentColor.appendChild(document.createTextNode('Current Color >'));
currentColor.id = "current-color";
pallent.appendChild(currentColor);

var colorBox = document.createElement('span');
colorBox.id = "color-box";
pallent.appendChild(colorBox);


drawGrid();


function drawGrid() {
  for(var i = 0; i < 2378; i++) {
    var square = document.createElement('div');
    square.className = "square";
    content.append(square);
  }

}

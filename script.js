function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(ele) {
  ele.attr("fill", getRandomColor());
}

function loopPaths() {
  var paths = $("path");
  for (var i = 0; i < paths.length; i++) {
    setRandomColor($(paths[i]));
  }
}

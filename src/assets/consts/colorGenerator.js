function getRandomRolor() {
  var letters = "012345".split("");
  var color = "#";
  color += letters[Math.round(Math.random() * 5)];
  letters = "0123456789ABCDEF".split("");
  for (var i = 0; i < 5; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

export default getRandomRolor;

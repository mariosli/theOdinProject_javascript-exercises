function roundToOne(num) {
  return +(Math.round(num + "e+1")  + "e-1");
}

const convertToCelsius = function(temp) {
  return roundToOne((temp - 32) * (5/9));
};

const convertToFahrenheit = function(temp) {
  return roundToOne(((9/5)*temp) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

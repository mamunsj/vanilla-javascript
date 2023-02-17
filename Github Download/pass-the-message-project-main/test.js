/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  const fahrenheit = (celsius * 1.8 + 32.0).toFixed(5);
  const Kelvin = (celsius + 273.15).toFixed(5);
  return [Kelvin, fahrenheit];
};
convertTemperature(36.5);

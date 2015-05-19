var PI = Math.PI;

exports.circlearea = function (r) {
  value = PI * r * r;
 return value.toFixed(2);//((25.132741228718345).toFixed(1)) //25.13
};

exports.circlecircumference = function (r) {
  value = 2 * PI * r;
  return value.toFixed(2) //((50.26548245743669).toFixed(1)) //50.26
};

exports.squarearea = function (s) {
  return s * s;
};

exports.squareperimeter = function (b , h) {
  return (b + b) + (h + h);
};

exports.trianglearea = function (a , b) {
  return (a * b);
};

exports.triangleperimeter = function (a , b , c ) {
  return (a + b +c);
};
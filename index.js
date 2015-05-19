var PI = Math.PI;

exports.circlearea = function (r) {
  return PI * r * r;
};

exports.circlecircumference = function (r) {
  return 2 * PI * r;
};

exports.squarearea = function (s) {
	return s*s;
}

exports.squarediagonal = function (s) {
	return Math.sqrt(Math.pow(s,2) + Math.pow(s,2));
}
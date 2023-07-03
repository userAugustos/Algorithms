let s = ["h","e","l","l","o"]

var reverseString = function(s) {
	let length = s.length;

  for (var i = 0; i < length; i++) {
    s.splice(i, 0, s.pop());
  }
	return s
};
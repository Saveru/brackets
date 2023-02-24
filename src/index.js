module.exports = function check(str, bracketsConfig) {
  const unkn = bracketsConfig.map((el) => {
		return el.join('');
	});
	
	while (unkn.some((el) => str.includes(el))) {
		unkn.forEach((el) => str = str.replaceAll(el, ''));
	}
	return !!!str;
}

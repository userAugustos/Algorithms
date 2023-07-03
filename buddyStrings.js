function buddyStrings(s, goal) {
	if(s.length !== goal.length) {
		return false
	}

	if(s === goal) {
		// o setConstructor remove qualquer caracter duplicado da string
		const uniqueCharacters = new Set(s)
		console.debug(uniqueCharacters)
		// 
		return uniqueCharacters.size < goal.length
	}

	const diffs = []

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== goal[i]){
			diffs.push(i)
		}
	}

	if(diffs.length !== 2) {
		return false;
	}

	const [i, j] = diffs;
	// então o diff vai mostrar os indexes onde existe uma diferença entre s e goal
	console.debug(i, j)
	// e então verificamos se trocando elas de posição elas combinam, se sim, então vai ser possivel transformar s em goal
	return s[i] === goal[j] && s[j] === goal[i]
}

console.debug(buddyStrings("aaaaaaaaabc", "aaaaaaaaacb"))
function firstDuplicate(arr) {
	let leastArr = [];
	for (let x in arr) {
		if (leastArr.indexOf(arr[x]) == -1) {
			leastArr.push(arr[x])
		} else {
			return arr[x]
		}
	}
	return -1
}

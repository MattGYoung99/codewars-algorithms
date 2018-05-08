function firstDuplicate(arr) {
	let leastArr = [];
	let leastNums = [];
	for (let x in arr) {
		for (let j in arr) {
			if (arr[x] == arr[j] && x !== j) {
				leastArr.push([parseInt(x), parseInt(j)])
			}
		}
	}
	for (let j in leastArr) {
		if (leastArr[j][0]+leastArr[j][1] < leastNums[0]+leastNums[1] || leastNums.length <= 0) {
			leastNums = [leastArr[j][0], leastArr[j][1]];
		}
	}
	return (leastNums.length > 0) ? arr[leastNums[0]] : -1;
}

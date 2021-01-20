let map = (sourceArray, func) => {
	let arr = [];
	for (let i = 0; i < sourceArray.length; i++) {
		let thisOne = sourceArray[i];
		arr.push(func(thisOne));
	}
	return arr;
};

let reduce = (sourceArray, func, startingPoint = 0) => {
	let tmp;

	if (startingPoint) {
		tmp = startingPoint;
		for (let i = 0; i < sourceArray.length; i++) {
			tmp = func(sourceArray[i], tmp);
		}
	} else {
		tmp = sourceArray[0];
		for (let i = 1; i < sourceArray.length; i++) {
			tmp = func(sourceArray[i], tmp);
		}
	}
	return tmp;
};

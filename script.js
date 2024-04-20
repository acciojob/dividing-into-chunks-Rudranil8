const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let result=[];
	let subarray=[];
	let sum=0;
	for(let i=0; i<n; i++){
		if(sum + arr[i] > n) {
	    result.push(subarray);
	    subarray = [];
	    sum = 0;
	}
		subarray.push(arr[i]);
		sum += arr[i];
	}
	return result;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));

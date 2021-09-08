function Todosleft(props) {
	let sum = 0;

	if (props.Arr.length > 0) {
		for (let index = 0; index < props.Arr.length; index++) {
			if (!props.Arr[index].isdone) {
				sum = sum + 1;
			}
		}
	}
	return (
		<span>{sum} items left</span>
	);
}

export default Todosleft;
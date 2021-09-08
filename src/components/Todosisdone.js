function Todosisdone(props) {
	let sum = 0;

	if (props.arr.length > 0) {
		for (let index = 0; index < props.arr.length; index++) {
			if (props.arr[index].isdone) {
				sum = sum + 1;
			}
		}
	}
	return (
		<span>[{sum}]</span>
	);
}

export default Todosisdone;
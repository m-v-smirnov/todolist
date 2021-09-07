function Todosleft(props) {
	let sum = 0;

	if (props.Arr.length > 0) {
		for (let index = 0; index < props.Arr.length; index++) {
			let elem = document.getElementById(index);
			console.log(elem);
			if (!elem.checked) {
				sum = sum + 1;
			}
		}
	}
	return (
		<span>{sum} items expected</span>
	);
}

export default Todosleft;
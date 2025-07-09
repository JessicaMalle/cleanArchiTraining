import { useState } from "react";

export function InputWrapperViewModel() {
	const [text, setText] = useState<string>("");

	const onChangeValue = ({value}: {value: string}) => {
		console.log(value)
		setText(value);
	}

	return { text, onChangeValue };
}

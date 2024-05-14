import React, { useContext } from "react";
import Item from "./item";
import {
	AMICABLE,
	AUTO,
	CASUAL,
	COMMENT,
	EMAIL,
	ENGLISH,
	FRKENDLY,
	LONG,
	MEDIUM,
	MESSAGE,
	PERSIAN,
	SHORT,
	SPANISH,
} from "../../../utils";
import { PageContext } from "../../../context/page-context";

const Filters = () => {
	const { setLanguageOutput } = useContext(PageContext);
	const onChange = (e) => {
		setLanguageOutput(e.target.value);
	};
	return (
		<div className="flex flex-col space-y-2">
			<span>Length</span>
			<div className="flex space-x-3">
				<Item type={AUTO} lengthFilter />
				<Item type={SHORT} lengthFilter />
				<Item type={MEDIUM} lengthFilter />
				<Item type={LONG} lengthFilter />
			</div>
			<span>Format</span>
			<div className="flex space-x-3">
				<Item type={AUTO} formatFilter />
				<Item type={EMAIL} formatFilter />
				<Item type={MESSAGE} formatFilter />
				<Item type={COMMENT} formatFilter />
			</div>
			<span>Tone</span>
			<div className="flex space-x-3">
				<Item type={AUTO} toneFilter />
				<Item type={AMICABLE} toneFilter />
				<Item type={CASUAL} toneFilter />
				<Item type={FRKENDLY} toneFilter />
			</div>
			<span>Output Language</span>
			<select className="max-w-[100px] outline-none" onChange={(e) => onChange(e)}>
				<option value={ENGLISH}>{ENGLISH}</option>
				<option value={SPANISH}>{SPANISH}</option>
				<option value={PERSIAN}>{PERSIAN}</option>
			</select>
		</div>
	);
};

export default Filters;

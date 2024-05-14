import React, { useContext } from "react";
import { PageContext } from "../../../context/page-context";
import { FORMAT, LENGTH, TONE } from "../../../utils";

const Item = ({ type, lengthFilter, formatFilter, toneFilter }) => {
	const {
		length,
		setLength,
		format,
		setFormat,
		tone,
		setTone,
		languageOutput,
		setLanguageOutput,
	} = useContext(PageContext);

	const handleClick = () => {
		lengthFilter && setLength(type);
		formatFilter && setFormat(type);
		toneFilter && setTone(type);
	};

	const isActive = () => {
		return (
			(lengthFilter && type === length) ||
			(formatFilter && type === format) ||
			(toneFilter && type === tone)
		);
	};

	return (
		<>
			{lengthFilter && (
				<button
					className={`${
						type === length ? "bg-purple-300" : "bg-slate-200"
					} p-1 rounded-lg`}
					onClick={handleClick}
				>
					{type}
				</button>
			)}
			{formatFilter && (
				<button
					className={`${
						type === format ? "bg-purple-300" : "bg-slate-200"
					} p-1 rounded-lg`}
					onClick={handleClick}
				>
					{type}
				</button>
			)}
			{toneFilter && (
				<button
					className={`${
						type === tone ? "bg-purple-300" : "bg-slate-200"
					} p-1 rounded-lg`}
					onClick={handleClick}
				>
					{type}
				</button>
			)}
		</>
	);
};

export default Item;

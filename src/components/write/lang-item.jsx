import React, { useContext } from "react";
import { PageContext } from "../../context/page-context";

const LangItem = ({ type, from }) => {
	const { language_from, language_to, setLanguageFrom, setLanguageTo } =
		useContext(PageContext);
	return (
		<>
			{from ? (
				<button
					className={`${
						language_from === type ? "text-white bg-black" : "text-black bg-slate-200"
					} p-2 text-xs font-bold rounded-full`}
					onClick={() => setLanguageFrom(type)}
				>
					{type}
				</button>
			) : (
				<button
					className={`${
						language_to === type ? "text-white bg-black" : "text-black bg-slate-200"
					} p-2 text-xs font-bold rounded-full`}
					onClick={() => setLanguageTo(type)}
				>
					{type}
				</button>
			)}
		</>
	);
};

export default LangItem;

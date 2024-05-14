import { createContext, useState } from "react";
import { AUTO, ENGLISH, PERSIAN, TRANSLATE_PAGE } from "../utils";

export const PageContext = createContext({
	page: TRANSLATE_PAGE,
	setPage: () => {},
	language_from: ENGLISH,
	setLanguageFrom: () => {},
	language_to: PERSIAN,
	setLanguageTo: () => {},
	length: AUTO,
	setLength: () => {},
	format: AUTO,
	setFormat: () => {},
	tone: AUTO,
	setTone: () => {},
	language_output: ENGLISH,
	setLanguageOutput: () => {},
});

export const PageContextProvider = ({ children }) => {
	const [page, setPage] = useState(TRANSLATE_PAGE);
	const [language_from, setLanguageFrom] = useState(ENGLISH);
	const [language_to, setLanguageTo] = useState(PERSIAN);
	const [length, setLength] = useState(AUTO);
	const [format, setFormat] = useState(AUTO);
	const [tone, setTone] = useState(AUTO);
	const [language_output, setLanguageOutput] = useState(ENGLISH);
	return (
		<PageContext.Provider
			value={{
				page,
				setPage,
				language_from,
				setLanguageFrom,
				language_to,
				setLanguageTo,
				length,
				setLength,
				format,
				setFormat,
				tone,
				setTone,
				language_output,
				setLanguageOutput,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};
